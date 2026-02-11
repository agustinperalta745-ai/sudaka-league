import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const SOURCES = [
  { key: "primera", url: "https://www.gesliga.com/Clasificacion.aspx?Liga=504087" },
  { key: "segunda", url: "https://www.gesliga.com/Clasificacion.aspx?Liga=504088" },
  { key: "tercera", url: "https://www.gesliga.com/Clasificacion.aspx?Liga=504089" }
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

const TEAM_PLAYER_HEADERS = ["equipo - jugador", "equipo-jugador", "equipo/jugador", "equipo", "club"];
const NORMALIZED_TEAM_PLAYER_HEADERS = TEAM_PLAYER_HEADERS.map((item) => normalizeText(item));

function normalizeText(value = "") {
  return value
    .trim()
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

function toNumber(value, fallback = 0) {
  const normalized = String(value ?? "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/[^\d+-]/g, "");
  const parsed = Number.parseInt(normalized, 10);
  return Number.isNaN(parsed) ? fallback : parsed;
}

function splitTeamAndPlayer(value = "") {
  const text = String(value ?? "").trim();
  if (!text) return { team: "", player: "" };

  const parts = text
    .split(/\s+-\s+/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length < 2) {
    const fallbackParts = text
      .split("-")
      .map((part) => part.trim())
      .filter(Boolean);

    if (fallbackParts.length >= 2) {
      const [team, ...playerParts] = fallbackParts;
      return { team, player: playerParts.join(" - ").trim() };
    }

    return { team: text, player: "" };
  }

  const [team, ...playerParts] = parts;
  const player = playerParts.join(" - ").trim();
  return { team, player };
}

function findHeaderIndexes(headerCells) {
  const normalizedHeaders = headerCells.map((header) => normalizeText(header));
  const indexes = {};

  normalizedHeaders.forEach((header, index) => {
    const normalized = header.toLowerCase();

    if (indexes.pos === undefined && /^pos$/i.test(normalized)) indexes.pos = index;
    if (indexes.pts === undefined && /^pt(s)?$/i.test(normalized)) indexes.pts = index;
    if (indexes.pj === undefined && /^pj$/i.test(normalized)) indexes.pj = index;
    if (indexes.pg === undefined && /^pg$/i.test(normalized)) indexes.pg = index;
    if (indexes.pe === undefined && /^pe$/i.test(normalized)) indexes.pe = index;
    if (indexes.pp === undefined && /^pp$/i.test(normalized)) indexes.pp = index;
    if (indexes.gf === undefined && /^gf$/i.test(normalized)) indexes.gf = index;
    if (indexes.gc === undefined && /^gc$/i.test(normalized)) indexes.gc = index;
    if (indexes.dg === undefined && /^dg$/i.test(normalized)) indexes.dg = index;
  });

  for (const key of Object.keys(REQUIRED_HEADER_GROUPS)) {
    if (indexes[key] === undefined) return null;
  }

  const firstStatIndex = Math.min(indexes.pts, indexes.pj, indexes.pg, indexes.pe, indexes.pp, indexes.gf, indexes.gc, indexes.dg);

  const teamPlayerByHeader = normalizedHeaders.findIndex((header) =>
    NORMALIZED_TEAM_PLAYER_HEADERS.includes(header)
  );

  const pos = indexes.pos ?? 0;
  const fallbackTeamPlayerIndex = Number.isInteger(indexes.pos) ? indexes.pos + 1 : Math.max(0, firstStatIndex - 1);

  return {
    ...indexes,
    pos,
    teamPlayer: teamPlayerByHeader >= 0 ? teamPlayerByHeader : fallbackTeamPlayerIndex
  };
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

function parseClassificationRows(html) {
  const $ = cheerio.load(html);
  const tables = $("table").toArray();

  for (const table of tables) {
    const rows = $(table).find("tr").toArray();
    if (rows.length < 2) continue;

    const headerCells = getRowCells($, rows[0], "th,td");
    const indexes = findHeaderIndexes(headerCells);
    if (!indexes) continue;

    const data = [];

    const bodyRows = $(table)
      .find("tbody tr")
      .toArray()
      .filter((row) => $(row).find("td").length > 0);
    const rowsToParse = bodyRows.length ? bodyRows : rows.slice(1);

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
        indexes.teamPlayer
      );

      if (cells.length <= minColumnIndex) return;

      const getCell = (index) => (index >= 0 ? cells[index] ?? "" : "");
      const rawPos = getCell(indexes.pos ?? 0);
      const pos = toNumber(rawPos, null);

      const combined = getCell(indexes.teamPlayer);
      const { team, player } = splitTeamAndPlayer(combined);

      const pts = toNumber(getCell(indexes.pts), Number.NaN);
      const pj = toNumber(getCell(indexes.pj), Number.NaN);

      if (!team || Number.isNaN(pts) || Number.isNaN(pj)) return;

      data.push({
        pos,
        equipo: team,
        jugador: player,
        team,
        player,
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

    return { rows: data, tableFound: true };
  }

  return { rows: [], tableFound: false };
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

async function saveDivision(key, rows) {
  const outputs = [
    path.join(repoRoot, "public", "data", "t24", `${key}.json`),
    path.join(repoRoot, "data", "t24", `${key}.json`)
  ];

  for (const outputPath of outputs) {
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, `${JSON.stringify(rows, null, 2)}\n`, "utf8");
  }
}

async function main() {
  await Promise.all(SOURCES.map((source) => saveDivision(source.key, [])));

  for (const source of SOURCES) {
    const html = await fetchHtml(source.url);

    const { rows, tableFound } = parseClassificationRows(html);

    if (!tableFound) {
      console.warn(`[T24] No se encontró tabla válida para ${source.key}`);
    }

    if (!rows.length) {
      console.warn(`[gesliga] ${source.key}: 0 filas válidas (posible cambio de HTML)`);
    }

    await saveDivision(source.key, rows);
    console.log(`[gesliga] ${source.key}: ${rows.length} filas`);
  }
}

main().catch((error) => {
  console.error("❌ Error al actualizar tablas T24:", error);
  process.exitCode = 1;
});
