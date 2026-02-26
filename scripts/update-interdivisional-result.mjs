import fs from 'node:fs/promises';
import path from 'node:path';
import { syncInterdivisionalBracket, validateInterdivisionalBracket } from '../utils/interdivisionalBracketSync.mjs';

const ROOT = process.cwd();
const CURRENT_PATH = path.join(ROOT, 'data', 'interdivisional_current.json');

function parseArgs(argv) {
  const [phase, matchId, winnerInput, scoreAInput, scoreBInput] = argv;

  if (!phase || !matchId || !winnerInput) {
    throw new Error('Uso: node scripts/update-interdivisional-result.mjs <phase> <matchId> <winner[a|b|teamA|teamB]> [scoreA] [scoreB]');
  }

  const winner = String(winnerInput).trim().toLowerCase();
  const normalizedWinner = ['a', 'teama', 'home'].includes(winner)
    ? 'a'
    : ['b', 'teamb', 'away'].includes(winner)
      ? 'b'
      : null;

  if (!normalizedWinner) {
    throw new Error(`winner inválido: ${winnerInput}`);
  }

  const scoreA = Number.isFinite(Number(scoreAInput)) ? Number(scoreAInput) : 0;
  const scoreB = Number.isFinite(Number(scoreBInput)) ? Number(scoreBInput) : 0;

  return { phase, matchId: String(matchId), winner: normalizedWinner, scoreA, scoreB };
}

function findMatch(current, phase, matchId) {
  const matches = Array.isArray(current?.phases?.[phase]) ? current.phases[phase] : [];
  return matches.find((entry) => String(entry?.id ?? '') === String(matchId));
}

async function saveCurrent(current) {
  await fs.writeFile(CURRENT_PATH, `${JSON.stringify(current, null, 2)}\n`, 'utf8');
}

async function run() {
  const { phase, matchId, winner, scoreA, scoreB } = parseArgs(process.argv.slice(2));
  const raw = await fs.readFile(CURRENT_PATH, 'utf8');
  const current = JSON.parse(raw);

  const match = findMatch(current, phase, matchId);
  if (!match) {
    throw new Error(`No existe el partido ${phase}:${matchId}`);
  }

  // Punto de guardado/actualización de resultado.
  match.score = { a: scoreA, b: scoreB };
  if (!match.pens || typeof match.pens !== 'object') {
    match.pens = { enabled: false, a: 0, b: 0 };
  }
  match.winner = winner;
  match.status = 'finished';

  const synced = syncInterdivisionalBracket(current);
  const validation = validateInterdivisionalBracket(synced);

  await saveCurrent(synced);

  if (!validation.ok) {
    console.warn('[interdivisional:update] Guardado con advertencias de validación:');
    validation.issues.forEach((issue) => console.warn(` - ${issue}`));
    return;
  }

  console.log(`[interdivisional:update] Resultado guardado en ${phase}:${matchId} y bracket sincronizado.`);
}

run().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
