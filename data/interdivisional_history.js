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
  },
  T23: {
    status: "completed",
    champion: "H09",
    fase1: [
      {
        label: "Octavos Play-offs 1",
        home: { club: "Lanús", player: "Eduq98", division: "Primera", shield: "assets/lanus.png" },
        away: { club: "Argentinos", player: "Facualanis", division: "Segunda", shield: "assets/argentinos.png" },
        winner: "home",
        result: { home: 3, away: 0 }
      },
      {
        label: "Octavos Play-offs 2",
        home: { club: "Millonarios", player: "Fafafa", division: "Primera" },
        away: { club: "Cruzeiro", player: "Crislot26", division: "Segunda", shield: "assets/cruzeiro.png" },
        winner: "away",
        result: { home: 0, away: 0, pensHome: 1, pensAway: 3 },
        pens: { home: 1, away: 3 }
      },
      {
        label: "Octavos Play-offs 3",
        home: { club: "Santos FC", player: "LombardoCABJ", division: "Primera", shield: "assets/santos.png" },
        away: { club: "Sao Paulo", player: "SoyLefo", division: "Segunda", shield: "assets/saopaulo.png" },
        winner: "away",
        result: { home: 1, away: 2 }
      },
      {
        label: "Octavos Play-offs 4",
        home: { club: "Estudiantes", player: "Exeeneta", division: "Primera", shield: "assets/estudiantes.png" },
        away: { club: "Internacional SC", player: "Joser17", division: "Segunda", shield: "assets/internacional_sc.png" },
        winner: "home",
        result: { home: 3, away: 1 }
      },
      {
        label: "Octavos Play-offs 5",
        home: { club: "Peñarol", player: "TunTun", division: "Primera", shield: "assets/penarol (1).png" },
        away: { club: "Huracán", player: "Leom", division: "Tercera", shield: "assets/huracan.png" },
        winner: "away",
        result: { home: 0, away: 3 }
      },
      {
        label: "Octavos Play-offs 6",
        home: { club: "Nacional", player: "Aacuis09", division: "Primera" },
        away: { club: "Peñarol", player: "Cacherinhooo", division: "Tercera", shield: "assets/penarol (1).png" },
        winner: "away",
        result: { home: 0, away: 2 }
      },
      {
        label: "Octavos Play-offs 7",
        home: { club: "Colo Colo", player: "Broko", division: "Primera", shield: "assets/colocolo.png" },
        away: { club: "Internacional SC", player: "Gab0211", division: "Tercera", shield: "assets/internacional_sc.png" },
        winner: "home",
        result: { home: 3, away: 0 }
      },
      {
        label: "Octavos Play-offs 8",
        home: { club: "Argentinos JRS", player: "Ivanarocela", division: "Primera", shield: "assets/argentinos.png" },
        away: { club: "Colo Colo", player: "Joelignacho", division: "Segunda", shield: "assets/colocolo.png" },
        winner: "away",
        result: { home: 1, away: 2 }
      }
    ],
    fase2: [
      {
        label: "Cuartos Play-offs 1",
        home: { club: "Lanús", player: "Eduq98", division: "Primera", shield: "assets/lanus.png" },
        away: { club: "Cruzeiro", player: "Crislot26", division: "Segunda", shield: "assets/cruzeiro.png" },
        winner: "home",
        result: { home: 3, away: 0 }
      },
      {
        label: "Cuartos Play-offs 2",
        home: { club: "Sao Paulo", player: "SoyLefo", division: "Segunda", shield: "assets/saopaulo.png" },
        away: { club: "Estudiantes", player: "Exeeneta", division: "Primera", shield: "assets/estudiantes.png" },
        winner: "away",
        result: { home: 0, away: 3 }
      },
      {
        label: "Cuartos Play-offs 3",
        home: { club: "Huracán", player: "Leom", division: "Tercera", shield: "assets/huracan.png" },
        away: { club: "Peñarol", player: "Cacherinhooo", division: "Tercera", shield: "assets/penarol (1).png" },
        winner: "away",
        result: { home: 1, away: 3 }
      },
      {
        label: "Cuartos Play-offs 4",
        home: { club: "Colo Colo", player: "Broko", division: "Primera", shield: "assets/colocolo.png" },
        away: { club: "Colo Colo", player: "Joelignacho", division: "Segunda", shield: "assets/colocolo.png" },
        winner: "home",
        result: { home: 3, away: 0 }
      }
    ],
    fase3: [
      {
        label: "Semifinal Play-offs 1",
        home: { club: "Lanús", player: "Edug98", division: "Primera", shield: "assets/lanus.png" },
        away: { club: "Estudiantes", player: "Exeeneta", division: "Primera", shield: "assets/estudiantes.png" },
        winner: "away",
        result: { home: 2, away: 2, pensHome: 2, pensAway: 3 },
        pens: { home: 2, away: 3 }
      },
      {
        label: "Semifinal Play-offs 2",
        home: { club: "Peñarol", player: "Cacherinhooo", division: "Tercera", shield: "assets/penarol (1).png" },
        away: { club: "Colo Colo", player: "Broko", division: "Primera", shield: "assets/colocolo.png" },
        winner: "home",
        result: { home: 2, away: 0 }
      }
    ],
    fase4: [
      {
        label: "Final Play-offs",
        home: { club: "Estudiantes", player: "Exeeneta", division: "Primera", shield: "assets/estudiantes.png" },
        away: { club: "Peñarol", player: "Cacherinhooo", division: "Tercera", shield: "assets/penarol (1).png" },
        winner: "home",
        result: { home: 2, away: 1 }
      }
    ],
    fase5: [
      {
        label: "Final Copa Interdivisional",
        home: { club: "Universitario", player: "H09", division: "2da Div", shield: "assets/escudos/universitario.png" },
        away: { club: "Estudiantes", player: "Exeeneta", division: "Primera", shield: "assets/estudiantes.png" },
        winner: "home",
        result: { home: 1, away: 0 }
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
