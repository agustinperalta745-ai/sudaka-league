import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const SOURCES = [
  { key: "primera", url: "https://www.gesliga.com/Clasificacion.aspx?Liga=504087", label: "Primera División" },
  { key: "segunda", url: "https://www.gesliga.com/Clasificacion.aspx?Liga=504088", label: "Segunda División" },
  { key: "tercera", url: "https://www.gesliga.com/Clasificacion.aspx?Liga=504089", label: "Tercera División" }
];

function decodeHtmlEntities(text = "") {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function stripHtml(text = "") {
  return decodeHtmlEntities(text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " "));
}

function toNumber(value) {
  const normalized = String(value ?? "").replace(/[^\d-]/g, "").trim();
  if (!normalized) return 0;
  const parsed = Number.parseInt(normalized, 10);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function normalizeHeader(value = "") {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function parseRowsFromTable(tableHtml) {
  const rowMatches = [...tableHtml.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
  if (rowMatches.length < 2) return [];

  const headers = [...rowMatches[0][1].matchAll(/<(th|td)[^>]*>([\s\S]*?)<\/\1>/gi)].map((match) => normalizeHeader(stripHtml(match[2])));

  const indexes = {
    pos: headers.indexOf("pos"),
    jugador: headers.indexOf("jugador"),
    equipo: headers.indexOf("equipo"),
    pts: headers.indexOf("pts"),
    pj: headers.indexOf("pj"),
    pg: headers.indexOf("pg"),
    pe: headers.indexOf("pe"),
    pp: headers.indexOf("pp"),
    gf: headers.indexOf("gf"),
    gc: headers.indexOf("gc"),
    dg: headers.indexOf("dg")
  };

  const fallbackIndexes = { pos: 0, jugador: 1, equipo: 2, pts: 3, pj: 4, pg: 5, pe: 6, pp: 7, gf: 8, gc: 9, dg: 10 };

  const dataRows = [];
  rowMatches.slice(1).forEach((rowMatch) => {
    const cols = [...rowMatch[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((match) => stripHtml(match[1]));
    if (!cols.length) return;

    const get = (name) => {
      const index = indexes[name] >= 0 ? indexes[name] : fallbackIndexes[name];
      return cols[index] ?? "";
    };

    const player = get("jugador");
    const team = get("equipo");
    if (!player && !team) return;

    dataRows.push({
      pos: toNumber(get("pos")),
      player,
      team,
      pts: toNumber(get("pts")),
      pj: toNumber(get("pj")),
      pg: toNumber(get("pg")),
      pe: toNumber(get("pe")),
      pp: toNumber(get("pp")),
      gf: toNumber(get("gf")),
      gc: toNumber(get("gc")),
      dg: toNumber(get("dg"))
    });
  });

  return dataRows;
}

function extractRows(html, source) {
  const tables = [...html.matchAll(/<table[^>]*>([\s\S]*?)<\/table>/gi)];
  const target = tables.find((match) => {
    const headers = [...match[1].matchAll(/<(th|td)[^>]*>([\s\S]*?)<\/\1>/gi)]
      .slice(0, 20)
      .map((item) => normalizeHeader(stripHtml(item[2])));

    return headers.includes("pj") && headers.includes("pg") && headers.includes("pp") && headers.includes("pts");
  });

  if (!target) {
    throw new Error(`No se encontró tabla de clasificación para ${source.key}`);
  }

  const rows = parseRowsFromTable(target[1]);

  return {
    source: source.url,
    division: source.label,
    fetchedAt: new Date().toISOString(),
    rows
  };
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; SudakaLeagueBot/1.0; +https://github.com/)"
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} al consultar ${url}`);
  }

  return response.text();
}

async function saveOutput(key, payload) {
  const outputs = [
    path.join(repoRoot, "public", "data", "gesliga", "t24", `${key}.json`),
    path.join(repoRoot, "data", "gesliga", "t24", `${key}.json`)
  ];

  for (const outputPath of outputs) {
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  }
}

async function main() {
  for (const source of SOURCES) {
    const html = await fetchHtml(source.url);
    const payload = extractRows(html, source);
    await saveOutput(source.key, payload);
    console.log(`✅ ${source.key}: ${payload.rows.length} filas`);
  }
}

main().catch((error) => {
  console.error("❌ Error al actualizar tablas T24:", error);
  process.exitCode = 1;
});
