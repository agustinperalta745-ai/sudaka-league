import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const SOURCES = [
  { key: "primera", ligaId: "504087" },
  { key: "segunda", ligaId: "504088" },
  { key: "tercera", ligaId: "504089" }
];

const REQUIRED_HEADER_GROUPS = {
  pts: ["PT", "PTS"],
  pj: ["PJ"],
  pg: ["PG"],
  pe: ["PE"],
  pp: ["PP"],
  gf: ["GF"],
  gc: ["GC"],
  dg: ["DG"]
};

const TEAM_HEADERS = ["equipo - jugador", "equipo-jugador", "equipo/jugador", "equipo", "club"];
const NORMALIZED_TEAM_HEADERS = TEAM_HEADERS.map((item) => normalizeText(item));

function normalizeText(value = "") {
  return value
    .trim()
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u00A0\u200B-\u200D\uFEFF]/g, " ")
    .replace(/\s+/g, " ");
}

function toNumber(value, fallback = 0) {
  const normalized = String(value ?? "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/[^\d+-]/g, "");
  const parsed = Number.parseInt(normalized, 10);
  return Number.isNaN(parsed) ? fallback : parsed;
}

function getRowCells($, row, selector = "th, td") {
  return $(row)
    .find(selector)
    .toArray()
    .map((cell) =>
      $(cell)
        .text()
        .replace(/[\u00A0\u200B-\u200D\uFEFF]/g, " ")
        .replace(/\s+/g, " ")
        .trim()
    );
}

function findHeaderIndexes(headerCells) {
  const normalizedHeaders = headerCells.map((header) => normalizeText(header));
  const indexes = {};

  normalizedHeaders.forEach((header, index) => {
    const normalized = header.toLowerCase();

    if (indexes.pos === undefined && /^(pos|pto|pto\.|posicion)$/.test(normalized)) indexes.pos = index;
    if (indexes.pts === undefined && /^(pt|pts|pto?s?)$/.test(normalized)) indexes.pts = index;
    if (indexes.pj === undefined && /^pj$/.test(normalized)) indexes.pj = index;
    if (indexes.pg === undefined && /^pg$/.test(normalized)) indexes.pg = index;
    if (indexes.pe === undefined && /^pe$/.test(normalized)) indexes.pe = index;
    if (indexes.pp === undefined && /^pp$/.test(normalized)) indexes.pp = index;
    if (indexes.gf === undefined && /^gf$/.test(normalized)) indexes.gf = index;
    if (indexes.gc === undefined && /^gc$/.test(normalized)) indexes.gc = index;
    if (indexes.dg === undefined && /^dg$/.test(normalized)) indexes.dg = index;
  });

  for (const key of Object.keys(REQUIRED_HEADER_GROUPS)) {
    if (indexes[key] === undefined) return null;
  }

  const firstStatIndex = Math.min(indexes.pts, indexes.pj, indexes.pg, indexes.pe, indexes.pp, indexes.gf, indexes.gc, indexes.dg);
  const teamByHeader = normalizedHeaders.findIndex((header) => NORMALIZED_TEAM_HEADERS.includes(header));

  return {
    ...indexes,
    pos: indexes.pos ?? 0,
    equipo: teamByHeader >= 0 ? teamByHeader : Math.max(0, firstStatIndex - 1)
  };
}

function findClassificationLayout($, table) {
  const rows = $(table).find("tr").toArray();
  if (rows.length < 2) return null;

  const headerSearchLimit = Math.min(rows.length, 6);

  for (let headerIndex = 0; headerIndex < headerSearchLimit; headerIndex += 1) {
    const headerCells = getRowCells($, rows[headerIndex], "th,td");
    const indexes = findHeaderIndexes(headerCells);
    if (!indexes) continue;

    const bodyRows = rows
      .slice(headerIndex + 1)
      .filter((row) => $(row).find("td").length > 0);

    if (!bodyRows.length) continue;

    return {
      indexes,
      rowsToParse: bodyRows
    };
  }

  return null;
}

function parseClassificationRows(html) {
  const $ = cheerio.load(html);
  const tables = $("table").toArray();

  for (const table of tables) {
    const layout = findClassificationLayout($, table);
    if (!layout) continue;

    const { indexes, rowsToParse } = layout;

    const parsedRows = [];

    rowsToParse.forEach((row) => {
      const cells = getRowCells($, row, "td");
      if (!cells.length) return;

      const minColumnIndex = Math.max(
        indexes.pts,
        indexes.pj,
        indexes.pg,
        indexes.pe,
        indexes.pp,
        indexes.gf,
        indexes.gc,
        indexes.dg,
        indexes.equipo
      );

      if (cells.length <= minColumnIndex) return;

      const getCell = (index) => (index >= 0 ? cells[index] ?? "" : "");

      const pts = toNumber(getCell(indexes.pts), Number.NaN);
      const pj = toNumber(getCell(indexes.pj), Number.NaN);
      if (Number.isNaN(pts) || Number.isNaN(pj)) return;

      const equipo = getCell(indexes.equipo);
      if (!equipo) return;

      const inferredPos = parsedRows.length + 1;

      parsedRows.push({
        pos: toNumber(getCell(indexes.pos), inferredPos),
        equipo,
        pts,
        pj,
        pg: toNumber(getCell(indexes.pg)),
        pe: toNumber(getCell(indexes.pe)),
        pp: toNumber(getCell(indexes.pp)),
        gf: toNumber(getCell(indexes.gf)),
        gc: toNumber(getCell(indexes.gc)),
        dg: toNumber(getCell(indexes.dg))
      });
    });

    return { rows: parsedRows, tableFound: true };
  }

  return { rows: [], tableFound: false };
}

function buildClasificacionUrl(ligaId) {
  return `https://www.gesliga.com/Clasificacion.aspx?Liga=${ligaId}`;
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; SudakaLeagueBot/1.0)"
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} al consultar ${url}`);
  }

  return response.text();
}

async function saveDivision(key, payload) {
  const outputs = [
    path.join(repoRoot, "public", "data", "t24", `${key}.json`),
    path.join(repoRoot, "data", "t24", `${key}.json`)
  ];

  for (const outputPath of outputs) {
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  }
}

function buildPayload(source, rows, fetchedAt = new Date().toISOString()) {
  return {
    source: "gesliga",
    division: source.key,
    fetchedAt,
    rows
  };
}

async function main() {
  const startedAt = new Date().toISOString();
  await Promise.all(SOURCES.map((source) => saveDivision(source.key, buildPayload(source, [], startedAt))));

  for (const source of SOURCES) {
    const url = buildClasificacionUrl(source.ligaId);
    const html = await fetchHtml(url);

    const { rows, tableFound } = parseClassificationRows(html);

    if (!tableFound) {
      console.warn(`[T24] No se encontró tabla válida para ${source.key}`);
    }

    if (!rows.length) {
      console.warn(`[gesliga] ${source.key}: 0 filas válidas (posible cambio de HTML)`);
    }

    await saveDivision(source.key, buildPayload(source, rows));
    console.log(`[gesliga] ${source.key}: ${rows.length} filas`);
  }
}

main().catch((error) => {
  console.error("❌ Error al actualizar tablas T24:", error);
  process.exitCode = 1;
});
