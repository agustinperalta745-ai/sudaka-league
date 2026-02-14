window.INTERDIVISIONAL_ACTIVE_SEASON = {
  season: "T24",

  octavos: [
    {
      id: "1",
      label: "Octavos Play-offs 1",
      home: { club: "Lanús", player: "Eduq98", division: "Primera", shield: "assets/lanus.png" },
      away: { club: "Argentinos", player: "Facualanis", division: "Segunda", shield: "assets/argentinos.png" }
    },
    {
      id: "2",
      label: "Octavos Play-offs 2",
      home: { club: "Millonarios", player: "Fafafa", division: "Primera" },
      away: { club: "Cruzeiro", player: "Crislot26", division: "Segunda", shield: "assets/cruzeiro.png" }
    },
    {
      id: "3",
      label: "Octavos Play-offs 3",
      home: { club: "Santos FC", player: "LombardoCABJ", division: "Primera", shield: "assets/santos.png" },
      away: { club: "Sao Paulo", player: "SoyLefo", division: "Segunda", shield: "assets/saopaulo.png" }
    },
    {
      id: "4",
      label: "Octavos Play-offs 4",
      home: { club: "Estudiantes", player: "Exeeneta", division: "Primera", shield: "assets/estudiantes.png" },
      away: { club: "Internacional SC", player: "Joser17", division: "Segunda", shield: "assets/internacional_sc.png" }
    },
    {
      id: "5",
      label: "Octavos Play-offs 5",
      home: { club: "Peñarol", player: "TunTun", division: "Primera", shield: "assets/penarol (1).png" },
      away: { club: "Huracán", player: "Leom", division: "Tercera", shield: "assets/huracan.png" }
    },
    {
      id: "6",
      label: "Octavos Play-offs 6",
      home: { club: "Nacional", player: "Aacuis09", division: "Primera" },
      away: { club: "Peñarol", player: "Cacherinhooo", division: "Tercera", shield: "assets/penarol (1).png" }
    },
    {
      id: "7",
      label: "Octavos Play-offs 7",
      home: { club: "Colo Colo", player: "Broko", division: "Primera", shield: "assets/colocolo.png" },
      away: { club: "Internacional SC", player: "Gab0211", division: "Tercera", shield: "assets/internacional_sc.png" }
    },
    {
      id: "8",
      label: "Octavos Play-offs 8",
      home: { club: "Argentinos JRS", player: "Ivanarocela", division: "Primera", shield: "assets/argentinos.png" },
      away: { club: "Colo Colo", player: "Joelignacho", division: "Segunda", shield: "assets/colocolo.png" }
    }
  ],

  cuartos_playoffs: [
    {
      id: "1",
      label: "Cuartos Play-offs 1",
      home: { club: "Lanús", player: "Eduq98", division: "Primera", shield: "assets/lanus.png" },
      away: { club: "Cruzeiro", player: "Crislot26", division: "Segunda", shield: "assets/cruzeiro.png" }
    },
    {
      id: "2",
      label: "Cuartos Play-offs 2",
      home: { club: "Sao Paulo", player: "SoyLefo", division: "Segunda", shield: "assets/saopaulo.png" },
      away: { club: "Estudiantes", player: "Exeeneta", division: "Primera", shield: "assets/estudiantes.png" }
    },
    {
      id: "3",
      label: "Cuartos Play-offs 3",
      home: { club: "Huracán", player: "Leom", division: "Tercera", shield: "assets/huracan.png" },
      away: { club: "Peñarol", player: "Cacherinhooo", division: "Tercera", shield: "assets/penarol (1).png" }
    },
    {
      id: "4",
      label: "Cuartos Play-offs 4",
      home: { club: "Colo Colo", player: "Broko", division: "Primera", shield: "assets/colocolo.png" },
      away: { club: "Colo Colo", player: "Joelignacho", division: "Segunda", shield: "assets/colocolo.png" }
    }
  ],

  semifinal_playoffs: [
    {
      id: "1",
      label: "Semifinal Play-offs 1",
      home: { winnerOf: "cuartos-1", placeholder: "Ganador Cuartos 1" },
      away: { winnerOf: "cuartos-2", placeholder: "Ganador Cuartos 2" }
    },
    {
      id: "2",
      label: "Semifinal Play-offs 2",
      home: { winnerOf: "cuartos-3", placeholder: "Ganador Cuartos 3" },
      away: { winnerOf: "cuartos-4", placeholder: "Ganador Cuartos 4" }
    }
  ],

  final_playoffs: [
    {
      id: "1",
      label: "Final Play-offs",
      home: { winnerOf: "semis-1", placeholder: "Ganador Semi 1" },
      away: { winnerOf: "semis-2", placeholder: "Ganador Semi 2" }
    }
  ],

  final_copa_interdivisional: [
    {
      id: "1",
      label: "Final Copa Interdivisional",
      home: {
        club: "Universitario",
        player: "H09",
        division: "2da Div",
        shield: "assets/escudos/universitario.png"
      },
      away: { winnerOf: "finalpo-1", placeholder: "Ganador Final Play-offs" }
    }
  ],

  winners: {
    cuartos_playoffs: [],
    semifinal_playoffs: [],
    final_playoffs: [],
    final_copa_interdivisional: []
  }
};
