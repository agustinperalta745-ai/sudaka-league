window.INTERDIVISIONAL_ACTIVE_SEASON = {
  // === Formato estándar por partido (copiar/pegar) ===
  // No jugado:
  // winner: null,
  // result: null,
  // pens: null
  //
  // Jugado sin penales:
  // winner: "home", // o "away"
  // result: { home: 2, away: 1 },
  // pens: null
  //
  // Jugado por penales:
  // winner: "away", // quien avanzó
  // result: { home: 0, away: 0 },
  // pens: { home: 1, away: 3 }

  // Cambiá acá la temporada activa
  season: "T24",

  // Cargá los cruces iniciales de Octavos + winner ("home" | "away" | null)
  octavos: [
    {
      label: "Octavos Play-offs 1",
      home: { club: "Lanús", player: "Edug98", division: "Primera" },
      away: { club: "Argentinos", player: "Facualanis", division: "Segunda" },
      winner: "home",
      result: { home: 3, away: 0 },
      pens: null
    },
    {
      label: "Octavos Play-offs 2",
      home: { club: "Millonarios", player: "Fafafa", division: "Primera" },
      away: { club: "Cruzeiro", player: "Crislot26", division: "Segunda" },
      winner: "away",
      result: { home: 0, away: 0 },
      pens: { home: 1, away: 3 }
    },
    {
      label: "Octavos Play-offs 3",
      home: { club: "Santos FC", player: "LombardoCABJ", division: "Primera" },
      away: { club: "Sao Paulo", player: "SoyLefo", division: "Segunda" },
      winner: "away",
      result: { home: 1, away: 2 },
      pens: null
    },
    {
      label: "Octavos Play-offs 4",
      home: { club: "Estudiantes", player: "Exeeneta", division: "Primera" },
      away: { club: "Internacional SC", player: "Joser17", division: "Segunda" },
      winner: "home",
      result: { home: 3, away: 1 },
      pens: null
    },
    {
      label: "Octavos Play-offs 5",
      home: { club: "Peñarol", player: "TunTun", division: "Primera" },
      away: { club: "Huracán", player: "Leom", division: "Tercera" },
      winner: "away",
      result: { home: 0, away: 3 },
      pens: null
    },
    {
      label: "Octavos Play-offs 6",
      home: { club: "Nacional", player: "Aacuis09", division: "Primera" },
      away: { club: "Peñarol", player: "Cacherinhooo", division: "Tercera" },
      winner: "away",
      result: { home: 0, away: 2 },
      pens: null
    },
    {
      label: "Octavos Play-offs 7",
      home: { club: "Colo Colo", player: "Broko", division: "Primera" },
      away: { club: "Internacional SC", player: "Gab0211", division: "Tercera" },
      winner: "home",
      result: { home: 3, away: 0 },
      pens: null
    },
    {
      label: "Octavos Play-offs 8",
      home: { club: "Argentinos JRS", player: "Ivanarocela", division: "Primera" },
      away: { club: "Colo Colo", player: "Joelignacho", division: "Segunda" },
      winner: "away",
      result: { home: 1, away: 2 },
      pens: null
    }
  ],



  cuartos_playoffs: [
    {
      home: { name: "GANADOR 1", escudo: "equipo1.png", division: "1ra" },
      away: { name: "GANADOR 2", escudo: "equipo2.png", division: "2da" },
      winner: ""
    },
    {
      home: {
        type: "team",
        user: "SoyLefo",
        division: "2da Div"
      },
      away: {
        type: "team",
        teamKey: "estudiantes.png",
        user: "Exeeneta",
        division: "1ra Div"
      },
      winner: ""
    },
    {
      home: { name: "GANADOR 5", escudo: "equipo5.png", division: "1ra" },
      away: { name: "GANADOR 6", escudo: "equipo6.png", division: "2da" },
      winner: ""
    },
    {
      home: { name: "GANADOR 7", escudo: "equipo7.png", division: "3ra" },
      away: { name: "GANADOR 8", escudo: "equipo8.png", division: "1ra" },
      winner: ""
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
      },
      winner: null,
      result: null,
      pens: null
    }
  ],

  winners: {
    cuartos_playoffs: [],
    semifinal_playoffs: [],
    final_playoffs: [],
    final_copa_interdivisional: []
  }
};
