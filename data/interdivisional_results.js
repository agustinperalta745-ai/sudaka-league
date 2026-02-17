const interdivisionalResults = {
  octavos: {
    "octavos-1": { score: { home: 3, away: 0 }, pens: null, winner: "home" },
    "octavos-2": { score: { home: 0, away: 0 }, pens: { home: 1, away: 3 }, winner: "away" },
    "octavos-3": { score: { home: 1, away: 2 }, pens: null, winner: "away" },
    "octavos-4": { score: { home: 3, away: 1 }, pens: null, winner: "home" },
    "octavos-5": { score: { home: 0, away: 3 }, pens: null, winner: "away" },
    "octavos-6": { score: { home: 0, away: 2 }, pens: null, winner: "away" },
    "octavos-7": { score: { home: 3, away: 0 }, pens: null, winner: "home" },
    "octavos-8": { score: { home: 1, away: 2 }, pens: null, winner: "away" }
  },
  cuartos: {
    "cuartos-1": { score: { home: 3, away: 0 } , pens: null, winner: "home" },
    "cuartos-2": { score: { home: 0, away: 3 } , pens: null, winner: "away" },
    "cuartos-3": { score: { home: 1, away: 3 } , pens: null, winner: "away" },
    "cuartos-4": { score: { home: 3, away: 0 } , pens: null, winner: "home" }
  },
  semis: {
    "semis-1": { score: { home: 2, away: 2 } , pens: { home: 2, away: 3 }, winner: "away" },
    "semis-2": { score: { home: 2, away: 0 }, pens: null, winner: "home" }
  },
  final_playoffs: {
    "finalpo-1": { score: null, pens: null, winner: null }
  },
  final: {
    "final-1": { score: null, pens: null, winner: null }
  }
};

window.interdivisionalResults = interdivisionalResults;
window.INTERDIVISIONAL_RESULTS = interdivisionalResults;
