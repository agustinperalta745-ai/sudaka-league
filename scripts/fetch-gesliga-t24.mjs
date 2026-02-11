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

const HEADER_ALIASES = {
  pos: ["pos", "posición", "posicion", "puesto", "#"],
  jugador: ["jugador", "usuario", "dt"],
  equipo: ["equipo", "club"],
  equipoJugador: ["equipo - jugador", "equipo-jugador", "equipo/jugador"],
  pts: ["pts", "ptos", "puntos"],
  pj: ["pj"],
  pg: ["pg"],
  pe: ["pe"],
  pp: ["pp"],
  gf: ["gf"],
  gc: ["gc"],
  dg: ["dg", "dif", "difgoles"]
};

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

  const separatorIndex = text.indexOf(" - ");
  if (separatorIndex === -1) {
    return { team: text, player: "" };
  }

  const team = text.slice(0, separatorIndex).trim();
  const player = text.slice(separatorIndex + 3).trim();
  return { team, player };
}

function resolveHeaderIndexes(headers) {
  const normalizedHeaders = headers.map((header) => normalizeText(header));

  const indexOfAlias = (aliases) => normalizedHeaders.findIndex((header) => aliases.includes(header));

  return {
    pos: indexOfAlias(HEADER_ALIASES.pos),
    jugador: indexOfAlias(HEADER_ALIASES.jugador),
    equipo: indexOfAlias(HEADER_ALIASES.equipo),
    equipoJugador: indexOfAlias(HEADER_ALIASES.equipoJugador),
    pts: indexOfAlias(HEADER_ALIASES.pts),
    pj: indexOfAlias(HEADER_ALIASES.pj),
    pg: indexOfAlias(HEADER_ALIASES.pg),
    pe: indexOfAlias(HEADER_ALIASES.pe),
    pp: indexOfAlias(HEADER_ALIASES.pp),
    gf: indexOfAlias(HEADER_ALIASES.gf),
    gc: indexOfAlias(HEADER_ALIASES.gc),
    dg: indexOfAlias(HEADER_ALIASES.dg)
  };
}

function hasClassificationShape(indexes) {
  return indexes.pts >= 0 && indexes.pj >= 0 && indexes.pg >= 0 && indexes.pe >= 0 && indexes.pp >= 0;
}

function parseClassificationRows(html, sourceKey) {
  const $ = cheerio.load(html);
  const tables = $("table").toArray();

  for (const table of tables) {
    const rows = $(table).find("tr").toArray();
    if (rows.length < 2) continue;

    const headers = $(rows[0])
      .find("th, td")
      .toArray()
      .map((cell) => $(cell).text().trim());

    const indexes = resolveHeaderIndexes(headers);
    if (!hasClassificationShape(indexes)) continue;

    const data = [];

    rows.slice(1).forEach((row) => {
      const cells = $(row)
        .find("td")
        .toArray()
        .map((cell) => $(cell).text().replace(/\s+/g, " ").trim());

      if (!cells.length) return;

      const getCell = (index) => (index >= 0 ? cells[index] ?? "" : "");

      const rawCombined = getCell(indexes.equipoJugador);
      const rawTeam = getCell(indexes.equipo);
      const rawPlayer = getCell(indexes.jugador);

      const combined = rawCombined || (!rawPlayer && rawTeam.includes(" - ") ? rawTeam : "");

      let team = rawTeam;
      let player = rawPlayer;

      if (combined) {
        const split = splitTeamAndPlayer(combined);
        team = split.team;
        player = split.player;
      }

      if (!team && !player) return;

      data.push({
        pos: toNumber(getCell(indexes.pos)),
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

    if (data.length) return data;
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
