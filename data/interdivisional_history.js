const INTERDIVISIONAL_HISTORY_PHASE_KEY_MAP = {
  fase1: "octavos_playoffs",
  fase2: "cuartos_playoffs",
  fase3: "semifinal_playoffs",
  fase4: "final_playoffs",
  fase5: "final_copa_interdivisional"
};

window.INTERDIVISIONAL_HISTORY = {
  T22: {
    status: "completed",
    champion: "Larrierismo",
    fase1: [
      {
        label: "Octavos Play-offs 1",
        home: { club: "Lanús", player: "Edug98", division: "Primera" },
        away: { club: "Argentinos", player: "Facualanis", division: "Segunda" },
        winner: "home",
        result: { home: 2, away: 0 }
      },
      {
        label: "Octavos Play-offs 2",
        home: { club: "Millonarios", player: "Fafafa", division: "Primera" },
        away: { club: "Cruzeiro", player: "Crislot26", division: "Segunda" },
        winner: "away"
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
        winner: "away"
      },
      {
        label: "Octavos Play-offs 5",
        home: { club: "Peñarol", player: "TunTun", division: "Primera" },
        away: { club: "Huracán", player: "Leom", division: "Tercera" },
        winner: "away"
      },
      {
        label: "Octavos Play-offs 6",
        home: { club: "Nacional", player: "Aacuis09", division: "Primera" },
        away: { club: "Peñarol", player: "Cacherinhooo", division: "Tercera" },
        winner: "away"
      },
      {
        label: "Octavos Play-offs 7",
        home: { club: "Colo Colo", player: "Broko", division: "Primera" },
        away: { club: "Internacional SC", player: "Gab0211", division: "Tercera" },
        winner: "away"
      },
      {
        label: "Octavos Play-offs 8",
        home: { club: "Argentinos JRS", player: "Ivanarocela", division: "Primera" },
        away: { club: "Colo Colo", player: "Joelignacho", division: "Segunda" },
        winner: "away"
      }
    ],
    fase2: [
      {
        label: "Cuartos de final Play-offs 1",
        home: { club: "Lanús", player: "Edug98", division: "Primera" },
        away: { club: "Cruzeiro", player: "Crislot26", division: "Segunda" },
        winner: "away",
        result: { home: 1, away: 1, pensHome: 4, pensAway: 5 }
      },
      {
        label: "Cuartos de final Play-offs 2",
        home: { club: "Santos FC", player: "LombardoCABJ", division: "Primera" },
        away: { club: "Internacional SC", player: "Joser17", division: "Segunda" },
        winner: "home"
      },
      {
        label: "Cuartos de final Play-offs 3",
        home: { club: "Huracán", player: "Leom", division: "Tercera" },
        away: { club: "Peñarol", player: "Cacherinhooo", division: "Tercera" },
        winner: "away"
      },
      {
        label: "Cuartos de final Play-offs 4",
        home: { club: "Internacional SC", player: "Gab0211", division: "Tercera" },
        away: { club: "Colo Colo", player: "Joelignacho", division: "Segunda" },
        winner: "away"
      }
    ],
    fase3: [
      {
        label: "Semifinal Play-offs 1",
        home: { club: "Cruzeiro", player: "Crislot26", division: "Segunda" },
        away: { club: "Santos FC", player: "LombardoCABJ", division: "Primera" },
        winner: "away",
        result: { home: 0, away: 2 }
      },
      {
        label: "Semifinal Play-offs 2",
        home: { club: "Peñarol", player: "Cacherinhooo", division: "Tercera" },
        away: { club: "Colo Colo", player: "Joelignacho", division: "Segunda" },
        winner: "home"
      }
    ],
    fase4: [
      {
        label: "Final Play-offs 1",
        home: { club: "Santos FC", player: "LombardoCABJ", division: "Primera" },
        away: { club: "Peñarol", player: "Cacherinhooo", division: "Tercera" },
        winner: "away",
        result: { home: 2, away: 2, pensHome: 2, pensAway: 4 }
      }
    ],
    fase5: [
      {
        label: "Final Copa Interdivisional 1",
        home: { club: "Cruzeiro", player: "Crislot26", division: "Segunda" },
        away: { club: "Lanús", player: "Larrierismo", division: "Primera" },
        winner: "away",
        result: { home: 1, away: 3 }
      }
    ]
  }
};

window.INTERDIVISIONAL_HISTORY_SEASONS = Object.entries(window.INTERDIVISIONAL_HISTORY).map(([season, data]) => ({
  season,
  status: data.status || "completed",
  champion: data.champion || "",
  phases: Object.entries(INTERDIVISIONAL_HISTORY_PHASE_KEY_MAP).reduce((acc, [faseKey, phaseKey]) => {
    acc[phaseKey] = Array.isArray(data[faseKey]) ? data[faseKey] : [];
    return acc;
  }, {})
}));
