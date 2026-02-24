import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const CURRENT_PATH = path.join(ROOT, "data", "interdivisional_current.json");

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

function getFinalPhase(current) {
  const phases = current?.phases;
  if (!phases || typeof phases !== "object") return null;

  return (
    phases.final_copa_interdivisional
    ?? phases.final_interdivisional
    ?? phases.final_interdivicional
    ?? phases.fase5
    ?? null
  );
}

function getFinalMatch(finalPhase) {
  if (!finalPhase) return null;
  if (Array.isArray(finalPhase)) return finalPhase[0] ?? null;
  if (Array.isArray(finalPhase.matches)) return finalPhase.matches[0] ?? null;
  return null;
}

async function main() {
  const current = await readJson(CURRENT_PATH);
  const finalMatch = getFinalMatch(getFinalPhase(current));
  const winner = finalMatch?.winner ?? null;

  console.log("[interdivisional:archive] Script deshabilitado: no se escribe historial.");
  console.log("[interdivisional:archive] Historial oficial: data/interdivisional_history.js (intocable).");

  if (!winner) {
    console.log("[interdivisional:archive] Sin campeón definido en la copa activa.");
    return;
  }

  console.log(`[interdivisional:archive] Campeón detectado para ${current?.season || "temporada desconocida"}: ${winner}`);
  console.log("[interdivisional:archive] Acción manual requerida para registrar historial.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
