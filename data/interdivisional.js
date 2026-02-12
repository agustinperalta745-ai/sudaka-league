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
