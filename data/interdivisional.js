window.INTERDIVISIONAL_ACTIVE_SEASON = {
  // Cambiá acá la temporada activa
  season: "T24",

  // Cargá los cruces iniciales de Octavos + winner ("home" | "away" | null)
  octavos: [
    {
      label: "Octavos Play-offs 1",
      home: { club: "Lanús", player: "Edug98", division: "Primera" },
      away: { club: "Argentinos", player: "Facualanis", division: "Segunda" },
      winner: null
    },
    {
      label: "Octavos Play-offs 2",
      home: { club: "Millonarios", player: "Fafafa", division: "Primera" },
      away: { club: "Cruzeiro", player: "Crislot26", division: "Segunda" },
      winner: null
    },
    {
      label: "Octavos Play-offs 3",
      home: { club: "Santos FC", player: "LombardoCABJ", division: "Primera" },
      away: { club: "Sao Paulo", player: "SoyLefo", division: "Segunda" },
      winner: "away",
      result: { home: 1, away: 2 }
    },
    {
      label: "Octavos Play-offs 4",
      home: { club: "Estudiantes", player: "Exeeneta", division: "Primera" },
      away: { club: "Internacional SC", player: "Joser17", division: "Segunda" },
      winner: null
    },
    {
      label: "Octavos Play-offs 5",
      home: { club: "Peñarol", player: "TunTun", division: "Primera" },
      away: { club: "Huracán", player: "Leom", division: "Tercera" },
      winner: null
    },
    {
      label: "Octavos Play-offs 6",
      home: { club: "Nacional", player: "Aacuis09", division: "Primera" },
      away: { club: "Peñarol", player: "Cacherinhooo", division: "Tercera" },
      winner: "away",
      result: { home: 0, away: 2 }
    },
    {
      label: "Octavos Play-offs 7",
      home: { club: "Colo Colo", player: "Broko", division: "Primera" },
      away: { club: "Internacional SC", player: "Gab0211", division: "Tercera" },
      winner: null
    },
    {
      label: "Octavos Play-offs 8",
      home: { club: "Argentinos JRS", player: "Ivanarocela", division: "Primera" },
      away: { club: "Colo Colo", player: "Joelignacho", division: "Segunda" },
      winner: "away",
      result: { home: 1, away: 2 }
    }
  ],

  // Solo cargá winners por fase. Los cruces se generan automáticamente.
  final_copa_interdivisional: [
    {
      label: "Final Copa Interdivisional 1",
      away: {
        club: "Universitario",
        player: "H09",
        division: "1ra Div",
        shield: "universitario.png"
      }
    }
  ],

  winners: {
    cuartos_playoffs: [],
    semifinal_playoffs: [],
    final_playoffs: [],
    final_copa_interdivisional: []
  }
};

(function attachInterdivisionalPhaseStatus() {
  function normalizeWinner(winner) {
    if (typeof winner !== "string") return null;
    const normalized = winner.trim().toLowerCase();
    return normalized === "home" || normalized === "away" ? normalized : null;
  }

  function getActiveSource() {
    return window.INTERDIVISIONAL_ACTIVE_SEASON || {};
  }

  function getSourcePhase(source, key) {
    if (Array.isArray(source[key])) return source[key];
    if (source.phases && Array.isArray(source.phases[key])) return source.phases[key];
    if (source.winners && Array.isArray(source.winners[key])) return source.winners[key];
    return [];
  }

  function createPlaceholderSide(label) {
    return { player: label || "Por definir" };
  }

  function getWinnerSide(match, fallbackLabel) {
    const winner = normalizeWinner(match && match.winner);
    if (winner === "home" && match && match.home) return match.home;
    if (winner === "away" && match && match.away) return match.away;
    return createPlaceholderSide(fallbackLabel);
  }

  function buildPhaseMatches(sourceMatches, sourceWinners, phaseLabel) {
    const matches = Array.isArray(sourceMatches) ? sourceMatches : [];
    const totalMatches = Math.ceil((sourceWinners.length || 0) / 2);
    const next = [];

    for (let index = 0; index < totalMatches; index += 1) {
      const sourceMatch = matches[index] || null;
      const homeSource = sourceWinners[index * 2];
      const awaySource = sourceWinners[index * 2 + 1];

      next.push({
        ...(sourceMatch || {}),
        label: (sourceMatch && sourceMatch.label) || `${phaseLabel} ${index + 1}`,
        home: (sourceMatch && sourceMatch.home) || homeSource || createPlaceholderSide("Por definir"),
        away: (sourceMatch && sourceMatch.away) || awaySource || createPlaceholderSide("Por definir"),
        winner: normalizeWinner(sourceMatch && sourceMatch.winner)
      });
    }

    return next;
  }

  function isPhaseComplete(matches) {
    return Array.isArray(matches) && matches.length > 0 && matches.every((m) => m && normalizeWinner(m.winner));
  }

  function getPhaseStatuses({ octavos, cuartos, semis, finalPO, finalCopa }) {
    const phases = [octavos, cuartos, semis, finalPO, finalCopa];
    const firstIncomplete = phases.findIndex((matches) => !isPhaseComplete(matches));

    return phases.map((matches, index) => {
      if (isPhaseComplete(matches)) {
        return { phase: index + 1, status: "FINALIZADA" };
      }
      if (index === firstIncomplete || firstIncomplete === -1) {
        return { phase: index + 1, status: "ACTIVA" };
      }
      return { phase: index + 1, status: "EN ESPERA" };
    });
  }

  function computePhaseStatuses() {
    const source = getActiveSource();
    const octavos = Array.isArray(source.octavos_playoffs)
      ? source.octavos_playoffs
      : Array.isArray(source.octavos)
        ? source.octavos
        : [];

    const winnersOctavos = octavos.map((match, idx) => getWinnerSide(match, `Ganador Octavos ${idx + 1}`));
    const cuartos = buildPhaseMatches(getSourcePhase(source, "cuartos_playoffs"), winnersOctavos, "Cuartos de final Play-offs");

    const winnersCuartos = cuartos.map((match, idx) => getWinnerSide(match, `Ganador Cuartos ${idx + 1}`));
    const semis = buildPhaseMatches(getSourcePhase(source, "semifinal_playoffs"), winnersCuartos, "Semifinal Play-offs");

    const winnersSemis = semis.map((match, idx) => getWinnerSide(match, `Ganador Semi ${idx + 1}`));
    const finalPO = buildPhaseMatches(getSourcePhase(source, "final_playoffs"), winnersSemis, "Final Play-offs");

    const winnersFinalPO = finalPO.map((match) => getWinnerSide(match, "Ganador Final Play-offs"));
    const finalCopa = buildPhaseMatches(getSourcePhase(source, "final_copa_interdivisional"), winnersFinalPO, "Final Copa Interdivisional");

    return getPhaseStatuses({ octavos, cuartos, semis, finalPO, finalCopa });
  }

  function getStatusStyle(status) {
    if (status === "ACTIVA") {
      return { backgroundColor: "#15803d", color: "#f0fdf4", borderColor: "#4ade80" };
    }
    if (status === "EN ESPERA") {
      return { backgroundColor: "#92400e", color: "#fffbeb", borderColor: "#facc15" };
    }
    return { backgroundColor: "#1d4ed8", color: "#eff6ff", borderColor: "#60a5fa" };
  }

  function renderPhaseStatuses() {
    const tabContainer = document.querySelector(".cup-card-tabs");
    if (!tabContainer) return;

    const statuses = computePhaseStatuses().reduce((acc, item) => {
      acc[item.phase] = item.status;
      return acc;
    }, {});

    const buttons = tabContainer.querySelectorAll(".cup-tab-btn");
    buttons.forEach((button, index) => {
      const phase = index + 1;
      const status = statuses[phase] || "EN ESPERA";
      const style = getStatusStyle(status);

      const baseLabel = button.getAttribute("data-phase-label") || button.textContent.trim();
      button.setAttribute("data-phase-label", baseLabel);
      button.innerHTML = "";

      const label = document.createElement("span");
      label.textContent = baseLabel;

      const badge = document.createElement("small");
      badge.textContent = status;
      badge.style.display = "block";
      badge.style.marginTop = "4px";
      badge.style.fontWeight = "700";

      button.style.backgroundColor = style.backgroundColor;
      button.style.color = style.color;
      button.style.borderColor = style.borderColor;
      button.append(label, badge);
    });
  }

  const observer = new MutationObserver(() => {
    renderPhaseStatuses();
  });

  function startObserver() {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    renderPhaseStatuses();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startObserver, { once: true });
  } else {
    startObserver();
  }
})();
