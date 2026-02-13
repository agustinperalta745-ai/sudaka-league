window.COPA_PREMIER_ACTIVE_SEASON = {
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
  // result: { home: 1, away: 1 },
  // pens: { home: 3, away: 4 }

  season: "T24",
  status: "inactive",
  currentPhase: "cuartos",

  phases: {
    cuartos: [
      {
        label: "Cuartos 1 (1° vs 8°)",
        home: { pos: 1, glove: "negro.png", user: "Jugador_1", division: "Primera" },
        away: { pos: 8, glove: "rojo.png", user: "Jugador_8", division: "Primera" },
        winner: null,
        result: null,
        pens: null
      },
      {
        label: "Cuartos 2 (2° vs 7°)",
        home: { pos: 2, glove: "amarillo.png", user: "Jugador_2", division: "Primera" },
        away: { pos: 7, glove: "azul.png", user: "Jugador_7", division: "Primera" },
        winner: null,
        result: null,
        pens: null
      },
      {
        label: "Cuartos 3 (3° vs 6°)",
        home: { pos: 3, glove: "verde.png", user: "Jugador_3", division: "Primera" },
        away: { pos: 6, glove: "violeta.png", user: "Jugador_6", division: "Primera" },
        winner: null,
        result: null,
        pens: null
      },
      {
        label: "Cuartos 4 (4° vs 5°)",
        home: { pos: 4, glove: "blanco.png", user: "Jugador_4", division: "Primera" },
        away: { pos: 5, glove: "naranja.png", user: "Jugador_5", division: "Primera" },
        winner: null,
        result: null,
        pens: null
      }
    ],
    semifinales: [
      {
        label: "Semifinal 1 (Ganador QF1 vs Ganador QF4)",
        winner: null,
        result: null,
        pens: null
      },
      {
        label: "Semifinal 2 (Ganador QF2 vs Ganador QF3)",
        winner: null,
        result: null,
        pens: null
      }
    ],
    final: [
      {
        label: "Final (Ganador SF1 vs Ganador SF2)",
        winner: null,
        result: null,
        pens: null,
        banSystem: "Sistema de baneos (informativo)"
      }
    ]
  }
};

window.COPA_PREMIER_HISTORY_SEASONS = [
  {
    season: "T23",
    status: "completed",
    champion: "Por definir",
    phases: {
      cuartos: [],
      semifinales: [],
      final: []
    }
  }
];
