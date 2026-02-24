import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const CURRENT_PATH = path.join(ROOT, "data", "interdivisional_current.json");
const HISTORY_PATH = path.join(ROOT, "data", "interdivisional_history.json");

const PHASE_KEYS = [
  "octavos_playoffs",
  "cuartos_playoffs",
  "semifinal_playoffs",
  "final_playoffs",
  "final_interdivicional"
];

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function readJsonIfExists(filePath, fallback) {
  try {
    return await readJson(filePath);
  } catch (error) {
    if (error && error.code === "ENOENT") return fallback;
    throw error;
  }
}

function getFinalPhase(current) {
  const phases = current?.phases;

  if (Array.isArray(phases)) {
    return (
      phases.find((phase) => {
        const key = String(
          phase?.key ?? phase?.id ?? phase?.name ?? phase?.slug ?? ""
        ).toLowerCase();
        return key.includes("final_interdivicional") || key.includes("final_interdivisional");
      }) ?? phases[4] ?? null
    );
  }

  if (phases && typeof phases === "object") {
    return (
      phases.final_interdivicional
      ?? phases.final_interdivisional
      ?? phases.final_copa_interdivisional
      ?? phases.fase5
      ?? null
    );
  }

  return null;
}

function getFinalMatch(finalPhase) {
  if (!finalPhase) return null;
  if (Array.isArray(finalPhase)) return finalPhase[0] ?? null;
  if (Array.isArray(finalPhase.matches)) return finalPhase.matches[0] ?? null;
  return null;
}

function resetPhases(phases) {
  if (Array.isArray(phases)) {
    const base = phases.slice(0, 5).map((phase, index) => ({
      ...phase,
      id: phase?.id ?? String(index + 1),
      key: phase?.key ?? PHASE_KEYS[index],
      matches: []
    }));

    if (base.length === 5) return base;

    while (base.length < 5) {
      base.push({
        id: String(base.length + 1),
        key: PHASE_KEYS[base.length],
        matches: []
      });
    }

    return base;
  }

  const result = {};
  PHASE_KEYS.forEach((key) => {
    const existing = phases?.[key] ?? phases?.[`fase${PHASE_KEYS.indexOf(key) + 1}`] ?? null;
    if (existing && typeof existing === "object" && !Array.isArray(existing)) {
      result[key] = { ...existing, matches: [] };
      return;
    }
    result[key] = [];
  });
  return result;
}

async function main() {
  const current = await readJson(CURRENT_PATH);
  const finalPhase = getFinalPhase(current);
  const finalMatch = getFinalMatch(finalPhase);
  const championId = String(finalMatch?.winnerId ?? "").trim();

  if (!championId) {
    console.log("Sin campeón definido. No se realizan cambios.");
    return;
  }

  const season = String(current?.season ?? "").trim();
  const historyData = await readJsonIfExists(HISTORY_PATH, []);

  const existingEditions = Array.isArray(historyData)
    ? historyData
    : Array.isArray(historyData?.editions)
      ? historyData.editions
      : [];

  const duplicated = existingEditions.some(
    (edition) => String(edition?.season ?? "") === season
      && String(edition?.championId ?? "") === championId
  );

  if (duplicated) {
    console.log("Edición ya archivada. No se realizan cambios.");
    return;
  }

  const edition = {
    season,
    finishedAt: new Date().toISOString(),
    championId,
    phases: current?.phases ?? []
  };

  const nextEditions = [edition, ...existingEditions];
  const nextHistory = Array.isArray(historyData)
    ? nextEditions
    : { ...historyData, editions: nextEditions };

  const nextCurrent = {
    ...current,
    phases: resetPhases(current?.phases)
  };

  await fs.writeFile(HISTORY_PATH, `${JSON.stringify(nextHistory, null, 2)}\n`, "utf8");
  await fs.writeFile(CURRENT_PATH, `${JSON.stringify(nextCurrent, null, 2)}\n`, "utf8");

  console.log("Copa Interdivisional archivada correctamente.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
