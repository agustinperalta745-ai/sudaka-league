function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizeWinnerSide(value) {
  const winner = String(value ?? "").trim().toLowerCase();
  if (["a", "teama", "home"].includes(winner)) return "teamA";
  if (["b", "teamb", "away"].includes(winner)) return "teamB";
  return null;
}

function getScore(match) {
  const score = match?.score;
  if (!score || typeof score !== "object") return { a: 0, b: 0 };
  return {
    a: Number.isFinite(Number(score.a)) ? Number(score.a) : 0,
    b: Number.isFinite(Number(score.b)) ? Number(score.b) : 0,
  };
}

function hasNonZeroScore(match) {
  const { a, b } = getScore(match);
  return a !== 0 || b !== 0;
}

function isPendingWithoutResult(match) {
  const status = String(match?.status ?? "pending").trim().toLowerCase();
  const winner = normalizeWinnerSide(match?.winner);
  return status === "pending" && !winner && !hasNonZeroScore(match);
}

function isPlaceholderTeam(team) {
  if (!team || typeof team !== "object") return true;
  if (typeof team.winnerOf === "string" && team.winnerOf.trim() !== "") return true;
  if (typeof team.placeholder === "string" && team.placeholder.trim() !== "") return true;

  const label = String(team.user ?? team.player ?? "").trim().toLowerCase();
  if (!label) return true;
  if (label.startsWith("ganador ")) return true;
  if (["por definir", "por definirse", "tbd"].includes(label)) return true;
  return false;
}

function parseWinnerReference(reference) {
  const [phaseRaw = "", matchIdRaw = ""] = String(reference || "").split(":");
  const phase = phaseRaw.trim();
  const matchId = matchIdRaw.trim();
  if (!phase || !matchId) return null;
  return { phase, matchId };
}

function getMatchByRef(phases, phase, matchId) {
  const matches = Array.isArray(phases?.[phase]) ? phases[phase] : [];
  return matches.find((match) => String(match?.id ?? "").trim() === String(matchId));
}

function normalizeTeam(team) {
  if (!team || typeof team !== "object") return null;
  return {
    user: team.user ?? team.player ?? "",
    division: team.division ?? "",
    club: team.club ?? "",
    logo: team.logo ?? team.escudo ?? "",
    escudo: team.escudo ?? team.logo ?? "",
  };
}

function teamsDiffer(teamA, teamB) {
  const a = normalizeTeam(teamA);
  const b = normalizeTeam(teamB);
  if (!a || !b) return true;
  return a.user !== b.user || a.club !== b.club || a.division !== b.division || a.escudo !== b.escudo;
}

function addNeedsReview(match) {
  const status = String(match.status ?? "").trim().toLowerCase();
  if (status !== "needs_review") {
    if (status && status !== "pending") {
      match.status = "needs_review";
    } else {
      match.status = "needs_review";
    }
  }

  const flags = Array.isArray(match.flags) ? match.flags.slice() : [];
  if (!flags.includes("needs_review")) flags.push("needs_review");
  match.flags = flags;
}

function resolveWinnerTeam(phases, reference, visited = new Set()) {
  const refData = parseWinnerReference(reference);
  if (!refData) return null;

  const refKey = `${refData.phase}:${refData.matchId}`;
  if (visited.has(refKey)) return null;
  visited.add(refKey);

  const match = getMatchByRef(phases, refData.phase, refData.matchId);
  if (!match) return null;

  const winnerSide = normalizeWinnerSide(match.winner);
  if (!winnerSide) return null;

  const winnerTeam = winnerSide === "teamA" ? match.teamA : match.teamB;
  if (winnerTeam && typeof winnerTeam.winnerOf === "string" && winnerTeam.winnerOf.trim() !== "") {
    return resolveWinnerTeam(phases, winnerTeam.winnerOf, visited);
  }

  return normalizeTeam(winnerTeam);
}

function ensurePhase(phases, key, expectedMatches) {
  if (!Array.isArray(phases[key])) phases[key] = [];
  for (let index = 0; index < expectedMatches; index += 1) {
    if (!phases[key][index]) {
      phases[key][index] = {
        id: String(index + 1),
        phase: key,
        teamA: { placeholder: "Por definir" },
        teamB: { placeholder: "Por definir" },
        score: { a: 0, b: 0 },
        pens: { enabled: false, a: 0, b: 0 },
        winner: null,
        status: "pending",
      };
    }

    const match = phases[key][index];
    if (!match.id) match.id = String(index + 1);
    if (!match.phase) match.phase = key;
    if (!match.score || typeof match.score !== "object") match.score = { a: 0, b: 0 };
    if (!match.pens || typeof match.pens !== "object") match.pens = { enabled: false, a: 0, b: 0 };
    if (match.winner === undefined) match.winner = null;
    if (!match.status) match.status = "pending";
  }
  phases[key] = phases[key].slice(0, expectedMatches);
}

function reconcileTeamSlot(match, slotKey, resolvedTeam) {
  const currentTeam = match[slotKey];
  if (!resolvedTeam) return;

  const pending = isPendingWithoutResult(match);
  const placeholder = isPlaceholderTeam(currentTeam);

  if (pending || placeholder) {
    match[slotKey] = resolvedTeam;
    return;
  }

  if (teamsDiffer(currentTeam, resolvedTeam)) {
    addNeedsReview(match);
  }
}

function syncSemifinalPlayoffs(current) {
  const phases = current.phases;
  ensurePhase(phases, "semifinal_playoffs", 2);

  const refs = [
    ["cuartos_playoffs:1", "cuartos_playoffs:2"],
    ["cuartos_playoffs:3", "cuartos_playoffs:4"],
  ];

  phases.semifinal_playoffs.forEach((match, index) => {
    const [refA, refB] = refs[index];
    const teamA = resolveWinnerTeam(phases, refA);
    const teamB = resolveWinnerTeam(phases, refB);
    reconcileTeamSlot(match, "teamA", teamA);
    reconcileTeamSlot(match, "teamB", teamB);

    if (isPlaceholderTeam(match.teamA)) {
      match.teamA = { winnerOf: refA, placeholder: `Ganador ${refA}` };
    }
    if (isPlaceholderTeam(match.teamB)) {
      match.teamB = { winnerOf: refB, placeholder: `Ganador ${refB}` };
    }
  });
}

function syncFinalPlayoffs(current) {
  const phases = current.phases;
  ensurePhase(phases, "final_playoffs", 1);

  const match = phases.final_playoffs[0];
  const teamA = resolveWinnerTeam(phases, "semifinal_playoffs:1");
  const teamB = resolveWinnerTeam(phases, "semifinal_playoffs:2");

  reconcileTeamSlot(match, "teamA", teamA);
  reconcileTeamSlot(match, "teamB", teamB);

  if (isPlaceholderTeam(match.teamA)) {
    match.teamA = { winnerOf: "semifinal_playoffs:1", placeholder: "Ganador semifinal 1" };
  }
  if (isPlaceholderTeam(match.teamB)) {
    match.teamB = { winnerOf: "semifinal_playoffs:2", placeholder: "Ganador semifinal 2" };
  }
}

function syncFinalCopaInterdivisional(current) {
  const phases = current.phases;
  ensurePhase(phases, "final_copa_interdivisional", 1);

  const match = phases.final_copa_interdivisional[0];
  const isT24 = String(current?.season ?? "").trim().toUpperCase() === "T24";

  if (isT24) {
    match.teamA = {
      user: "Sally1901",
      division: "Segunda",
      club: "Marsella",
      logo: "assets/escudos/marsella.png",
      escudo: "assets/escudos/marsella.png",
    };
  }

  const teamB = resolveWinnerTeam(phases, "final_playoffs:1");
  reconcileTeamSlot(match, "teamB", teamB);

  if (isPlaceholderTeam(match.teamB)) {
    match.teamB = { winnerOf: "final_playoffs:1", placeholder: "Ganador Final Play-offs" };
  }
}

export function syncInterdivisionalBracket(currentCup) {
  const current = deepClone(currentCup);
  if (!current || typeof current !== "object") return currentCup;
  if (!current.phases || typeof current.phases !== "object") current.phases = {};

  syncSemifinalPlayoffs(current);
  syncFinalPlayoffs(current);
  syncFinalCopaInterdivisional(current);

  return current;
}

export function validateInterdivisionalBracket(currentCup) {
  const issues = [];
  const phases = currentCup?.phases;
  if (!phases || typeof phases !== "object") {
    return { ok: false, issues: ["phases inexistente"] };
  }

  const expected = {
    semifinal_playoffs: 2,
    final_playoffs: 1,
    final_copa_interdivisional: 1,
  };

  Object.entries(expected).forEach(([phase, count]) => {
    if (!Array.isArray(phases[phase])) {
      issues.push(`Falta array ${phase}`);
      return;
    }
    if (phases[phase].length !== count) {
      issues.push(`${phase} debe tener ${count} partido(s) y tiene ${phases[phase].length}`);
    }
  });

  Object.entries(phases).forEach(([phaseKey, matches]) => {
    if (!Array.isArray(matches)) return;
    matches.forEach((match) => {
      ["teamA", "teamB"].forEach((slot) => {
        const ref = match?.[slot]?.winnerOf;
        if (!ref) return;
        const refData = parseWinnerReference(ref);
        if (!refData) {
          issues.push(`winnerOf inválido ${ref} en ${phaseKey}:${match?.id || "?"}`);
          return;
        }
        if (!getMatchByRef(phases, refData.phase, refData.matchId)) {
          issues.push(`winnerOf apunta a partido inexistente ${ref} en ${phaseKey}:${match?.id || "?"}`);
        }
      });
    });
  });

  return { ok: issues.length === 0, issues };
}
