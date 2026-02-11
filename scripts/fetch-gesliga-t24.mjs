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
  pts: ["pt", "pts"],
  pj: ["pj"],
  pg: ["pg"],
  pe: ["pe"],
  pp: ["pp"],
  gf: ["gf"],
  gc: ["gc"],
  dg: ["dg"]
};

const TEAM_PLAYER_HEADERS = ["equipo - jugador", "equipo-jugador", "equipo/jugador", "equipo", "club"];

function normalizeText(value = "") {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

function toNumber(value) {
  const normalized = String(value ?? "").replace(/[^\d-]/g, "");
  const parsed = Number.parseInt(normalized, 10);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function splitTeamAndPlayer(value = "") {
  const text = String(value ?? "").trim();
  if (!text) return { team: "", player: "" };

  const parts = text
    .split(/\s+-\s+/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length < 2) {
    return { team: text, player: "" };
  }

  const [team, ...playerParts] = parts;
  const player = playerParts.join(" - ").trim();
  return { team, player };
}

function findHeaderIndexes(headerCells) {
  const normalizedHeaders = headerCells.map((header) => normalizeText(header));
  const indexes = {};

  for (const [key, aliases] of Object.entries(REQUIRED_HEADER_GROUPS)) {
    indexes[key] = normalizedHeaders.findIndex((header) => aliases.includes(header));
    if (indexes[key] < 0) return null;
  }

  const teamPlayerIndex = normalizedHeaders.findIndex((header) => TEAM_PLAYER_HEADERS.includes(header));

  return {
    ...indexes,
    teamPlayer: teamPlayerIndex >= 0 ? teamPlayerIndex : 1,
    pos: 0
  };
}

function getRowCells($, row) {
  return $(row)
    .find("th, td")
    .toArray()
    .map((cell) => $(cell).text().replace(/\s+/g, " ").trim());
}

function parseClassificationRows(html, sourceKey) {
  const $ = cheerio.load(html);
  const tables = $("table").toArray();

  for (const table of tables) {
    const rows = $(table).find("tr").toArray();
    if (rows.length < 2) continue;

    const headerCells = getRowCells($, rows[0]);
    const indexes = findHeaderIndexes(headerCells);
    if (!indexes) continue;

    const data = [];

    rows.slice(1).forEach((row) => {
      const cells = getRowCells($, row);
      if (!cells.length) return;

      const getCell = (index) => (index >= 0 ? cells[index] ?? "" : "");
      const rawPos = getCell(0);
      const pos = toNumber(rawPos);
      if (!pos) return;

      const combined = getCell(indexes.teamPlayer);
      const { team, player } = splitTeamAndPlayer(combined);

      if (!team && !player) return;

      data.push({
        pos,
        team,
        player,
        pts: toNumber(getCell(indexes.pts)),
        pj: toNumber(getCell(indexes.pj)),
        pg: toNumber(getCell(indexes.pg)),
        pe: toNumber(getCell(indexes.pe)),
        pp: toNumber(getCell(indexes.pp)),
        gf: toNumber(getCell(indexes.gf)),
        gc: toNumber(getCell(indexes.gc)),
        dg: toNumber(getCell(indexes.dg))
      });
    });

    if (!data.length) {
      throw new Error(`La tabla detectada para ${sourceKey} no contiene filas válidas`);
    }

    return data;
  }

  throw new Error(`No se encontró una tabla de clasificación válida para ${sourceKey}`);
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
  for (const source of SOURCES) {
    const html = await fetchHtml(source.url);
    const rows = parseClassificationRows(html, source.key);
    await saveDivision(source.key, rows);
    console.log(`✅ ${source.key}: ${rows.length} filas`);
  }
}

main().catch((error) => {
  console.error("❌ Error al actualizar tablas T24:", error);
  process.exitCode = 1;
});
