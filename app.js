import { copaInterdivisionalConfig } from "./data/copa_config.js";

// === HISTORIAL PES 6 (EDITAR SOLO ESTO) ===
const PES6_HISTORY = [
  {
    season: "Temporada 18",
    divisions: {
      div1: "Loloo",
      div2: "Sebajm28",
      div3: "Cacherinhooo",
      div4: "NO EXISTIA"
    },
    cups: {
      interdiv: "Sebajm28",
      superfinal: "Sebajm28",
      interliga: "NO EXISTIA"
    },
    awards: {
      balonOro: "NO EXISTIA",
      puskas: "NO EXISTIA"
    }
  },
  {
    season: "Temporada 19",
    divisions: { div1: "Alex_CABJ", div2: "Cacherinhooo", div3: "Switch", div4: "NO EXISTIA" },
    cups: { interdiv: "Pelufo", superfinal: "Pelufo", interliga: "Feretche (S.F.A)" },
    awards: { balonOro: "NO EXISTIA", puskas: "Gargarensis" }
  },
  {
    season: "Temporada 20 ",
    divisions: { div1: "Josemirlujambio", div2: "Switch", div3: "TCL06", div4: "NO EXISTIA" },
    cups: { interdiv: "MMAURI455", superfinal: "Josemirlujambio", interliga: "NO SE DISPUTO" },
    awards: { balonOro: "POR DEFINIR", puskas: "Gargarensis" }
  },
  {
    season: "Temporada 21",
    divisions: { div1: "Switch", div2: "Tank", div3: "MartinPalermo", div4: "Sally1901" },
    cups: { interdiv: "Tank", superfinal: "Switch", interliga: "FaquuVilla (S.F.A)" },
    awards: { balonOro: "NO EXISTIA", puskas: "Switch" }
  },
  {
    season: "Temporada 22",
    divisions: { div1: "Eduug98", div2: "MartinPalermo", div3: "H09", div4: "Cacherinhooo" },
    cups: { interdiv: "Larrierismo", superfinal: "Larrierismo", interliga: "NO SE DISPUTO" },
    awards: { balonOro: "Pelufo", puskas: "Naxul90" }
  },
  {
    season: "Temporada 23",
    divisions: { div1: "Alex_CABJ", div2: "H09", div3: "Leom", div4: "Jona96delgado" },
    cups: { interdiv: "POR DEFINIR", superfinal: "POR DEFINIR", interliga: "POR DEFINIR" },
    awards: { balonOro: "NO SE DISPUTA", puskas: "Tank" }
  }
];

// === CONFIGURACIÓN DE CUPOS (EDITAR SOLO ESTO) ===
const SITE_DATA = window.SUDAKA_SITE_DATA || {};
const PES6_CUPOS_LIBRES = Number.isFinite(Number(SITE_DATA.pes6CuposLibres))
  ? Number(SITE_DATA.pes6CuposLibres)
  : 2;
const KOF_CUPOS_LIBRES = Number.isFinite(Number(SITE_DATA.kofCuposLibres))
  ? Number(SITE_DATA.kofCuposLibres)
  : 2;

const DONATION_GOAL_TOTAL_ARS = 10000;
const DONATION_CURRENT_AMOUNT_ARS = 2500;

const WHATSAPP_COMUNIDAD = "https://chat.whatsapp.com/DvRyA2bxAC67x0ulPQYvCa?mode=gi_t";
const PES6_SEASON_NAME = "Temporada 24";
const KOF_LEAGUE = {
  nombre: "King of Fighters 2002 – Fightcade",
  nombreCorto: "KOF 2002",
  logo: "assets/kof2002.jpg",
  temporada: {
    nombre: "Temporada 1",
    estado: "EN ESPERA",
    nota: "En espera hasta completar cupos"
  },
  card: {
    descripcion: "Liga 1 vs 1 con formato competitivo oficial."
  },
  caracteristicas: [
    "Formato 1 vs 1",
    "Personajes libres (todos pueden usar cualquier personaje)",
    "Los colores representan al jugador",
    "Victoria: 3 puntos",
    "Derrota: 0 puntos",
    "Temporadas de 2 semanas",
    "Resultados cargados en Gesliga",
    "Coordinación por WhatsApp"
  ],
  salaFightcade: "#THE KING OF FIGHTERS 2002",
  videoInstalacion: "https://www.youtube.com/watch?v=tM5yVYoY-7w&t=126s"
};

const KOF_TOP3_DATA_PATH = "./data/kof_top3.json";
const BOUNTY_PARTICLES_COUNT = 10;
const BOUNTY_DATA = window.SUDAKA_BOUNTY_DATA && typeof window.SUDAKA_BOUNTY_DATA === "object"
  ? window.SUDAKA_BOUNTY_DATA
  : {
    bountyUser: "Rulitox17",
    bountyGloveImage: "violeta.png",
    hunterUser: null,
    hunterGloveImage: null
  };

const KOF_GLOVES_UTILS = window.KOF_GLOVES_UTILS || {};
const normalizeKofGloveColor = typeof KOF_GLOVES_UTILS.normalizeColorName === "function"
  ? KOF_GLOVES_UTILS.normalizeColorName
  : (value = "") => String(value || "").trim().toLowerCase();
const getKofGloveImage = typeof KOF_GLOVES_UTILS.getGloveImage === "function"
  ? KOF_GLOVES_UTILS.getGloveImage
  : () => "assets/blanco.png";
const getKofGlowColor = typeof KOF_GLOVES_UTILS.getGlowColor === "function"
  ? KOF_GLOVES_UTILS.getGlowColor
  : () => "#7fb3ff";

const PES6_PALMARES = {
  divisiones: [
    {
      nombre: "División 1",
      trofeo: "assets/trofeo_div1.png",
      campeones: ["Alex_CABJ"]
    },
    {
      nombre: "División 2",
      trofeo: "assets/trofeo_div2.png",
      campeones: ["H09"]
    },
    {
      nombre: "División 3",
      trofeo: "assets/trofeo_div3.png",
      campeones: ["Leom"]
    },
    {
      nombre: "División 4",
      trofeo: "assets/trofeo_div4.png",
      campeones: ["Jona96delgado"]
    }
  ],
  copas: [
    {
      nombre: "Copa Interdivisional",
      trofeo: "assets/trofeo_interdiv.png",
      campeones: ["Larrierismo"]
    },
    {
      nombre: "Super Final",
      trofeo: "assets/trofeo_superfinal.png",
      campeones: ["Larrierismo"]
    },
    {
      nombre: "Final Interliga vs S.F.A",
      trofeo: "assets/trofeo_interliga.png",
      campeones: ["Faquuvilla (S.F.A)"]
    }
  ],
  individuales: [
    {
      key: "balonOro",
      nombre: "Balón de Oro",
      trofeo: "assets/trofeo_balon_oro.png",
      subtitulo: "Ganador (últimas 3 temporadas)",
      ganadores: ["Pelufo"]
    },
    {
      key: "puskas",
      nombre: "Premio Puskás",
      trofeo: "assets/trofeo_puskas.png",
      subtitulo: "Ganador (Temporada 23)",
      ganadores: ["Tank"]
    }
  ]
};



const PES6_TITLE_META = {
  divisions: {
    div1: { type: "División 1", title: "Campeón 1ra División" },
    div2: { type: "División 2", title: "Campeón 2da División" },
    div3: { type: "División 3", title: "Campeón 3ra División" },
    div4: { type: "División 4", title: "Campeón 4ta División" }
  },
  cups: {
    interdiv: { type: "Copa", title: "Copa Interdivicional" },
    superfinal: { type: "Copa", title: "Super Final" },
    interliga: { type: "Copa", title: "Final Interliga vs S.F.A" }
  },
  awards: {
    balonOro: { type: "Premio", title: "Balón de Oro" },
    puskas: { type: "Premio", title: "Premio Puskás" }
  }
};

const PES6_COUNTED_TITLES = {
  divisions: ["div1"],
  cups: ["interdiv", "superfinal", "interliga"],
  awards: ["balonOro", "puskas"]
};

const DIVISION_CONFIG = [
  { key: "div1", label: "División 1", trophy: "assets/trofeo_div1.png" },
  { key: "div2", label: "División 2", trophy: "assets/trofeo_div2.png" },
  { key: "div3", label: "División 3", trophy: "assets/trofeo_div3.png" },
  { key: "div4", label: "División 4", trophy: "assets/trofeo_div4.png" }
];

const DIVISION_NAMES_BY_KEY = {
  div1: "Primera",
  div2: "Segunda",
  div3: "Tercera",
  div4: "Cuarta"
};

const PES6_HISTORY_META = {
  divisions: DIVISION_CONFIG,
  cups: [
    { key: "interdiv", label: "Copa Interdivisional", trophy: "assets/trofeo_interdiv.png" },
    { key: "superfinal", label: "Super Final", trophy: "assets/trofeo_superfinal.png" },
    { key: "interliga", label: "Final Interliga vs S.F.A", trophy: "assets/trofeo_interliga.png" }
  ],
  awards: [
    { key: "balonOro", label: "Balón de Oro", trophy: "assets/trofeo_balon_oro.png" },
    { key: "puskas", label: "Premio Puskás", trophy: "assets/trofeo_puskas.png" }
  ]
};

const INTERDIVISIONAL_ACTIVE_SOURCE = window.INTERDIVISIONAL_ACTIVE_SEASON || null;
const INTERDIVISIONAL_CUARTOS_SOURCE = Array.isArray(window.INTERDIVISIONAL_CUARTOS_PLAYOFFS)
  ? window.INTERDIVISIONAL_CUARTOS_PLAYOFFS
  : [];
const INTERDIVISIONAL_RESULTS_SOURCE = window.INTERDIVISIONAL_RESULTS
  && typeof window.INTERDIVISIONAL_RESULTS === "object"
  ? window.INTERDIVISIONAL_RESULTS
  : {};
const INTERDIVISIONAL_HISTORY_SOURCE = getInterdivisionalHistorySeasonsSource(
  window.INTERDIVISIONAL_HISTORY,
  window.INTERDIVISIONAL_HISTORY_SEASONS
);

const SITE_CUP_SEASON = window.SUDAKA_SITE_DATA?.cupSeason ?? 23;

const COPA_PREMIER_ACTIVE_SOURCE = window.COPA_PREMIER_ACTIVE_SEASON || null;
const COPA_PREMIER_HISTORY_SOURCE = Array.isArray(window.COPA_PREMIER_HISTORY_SEASONS)
  ? window.COPA_PREMIER_HISTORY_SEASONS
  : [];

const INTERDIVISIONAL_PHASES = [
  { key: "octavos_playoffs", label: "Octavos Play-offs" },
  { key: "cuartos_playoffs", label: "Cuartos Play-offs" },
  { key: "semifinal_playoffs", label: "Semi final Play-offs" },
  { key: "final_playoffs", label: "Final Play-offs" },
  { key: "final_copa_interdivisional", label: "Final Copa Interdivicional" }
];

const COPA_PREMIER_PHASES = [
  { key: "cuartos", label: "🔥 CUARTOS (BO3)" },
  { key: "semifinales", label: "🥊 SEMIFINALES (BO3)" },
  { key: "final", label: "👑 FINAL (1 pelea)" }
];

const CUP_CROSSING_DIVISION_SHORT = {
  Primera: "1ra Div",
  Segunda: "2da Div",
  Tercera: "3ra Div",
  Cuarta: "4ta Div"
};

function getAssetsBasePath() {
  const isGitHubPagesHost = /\.github\.io$/i.test(location.hostname);
  const isSudakaLeaguePath = location.pathname === "/sudaka-league" || location.pathname.startsWith("/sudaka-league/");

  if (isGitHubPagesHost || isSudakaLeaguePath) {
    return "/sudaka-league";
  }

  return "";
}

const ASSETS_BASE_PATH = getAssetsBasePath();

const AWARD_GLOVE_TROPHIES = {
  balonOro: "assets/guantes/balon-oro.png",
  puskas: "assets/guantes/puskas.png"
};

const AWARD_TROPHY_FALLBACKS = {
  balonOro: "assets/trofeo_balon_oro.png",
  puskas: "assets/trofeo_puskas.png"
};

function withAssetBasePath(assetPath = "") {
  if (!assetPath) return "";
  if (/^(?:https?:)?\/\//i.test(assetPath)) return assetPath;
  if (assetPath.startsWith("/")) {
    return `${ASSETS_BASE_PATH}${assetPath}`;
  }
  return `${ASSETS_BASE_PATH}/${assetPath}`;
}

function setImageFallback(imageNode, fallbackPath) {
  if (!imageNode || !fallbackPath) return;

  imageNode.addEventListener(
    "error",
    () => {
      const fallbackSrc = withAssetBasePath(fallbackPath);
      if (!fallbackSrc || imageNode.dataset.fallbackApplied === "true") return;
      imageNode.dataset.fallbackApplied = "true";
      imageNode.src = fallbackSrc;
    },
    { once: true }
  );
}

function resolveAwardTrophy(key, fallbackTrophy) {
  return AWARD_GLOVE_TROPHIES[key] || fallbackTrophy;
}

const TEAM_LOGOS = {
  "Lanús": "lanus.png",
  "Argentinos": "argentinos.png",
  "Cruzeiro": "cruzeiro.png",
  "Santos FC": "santos.png",
  "Colo-Colo": "colocolo.png",
  "Estudiantes": "estudiantes.png",
  "Huracán": "huracan.png",
  "Nacional": "nacional.png",
  "San Lorenzo": "sanlorenzo.png",
  "Sao Paulo": "saopaulo.png",
  "Internacional": "internacional_sc.png",
  "Peñarol": "penarol (1).png"
};

const CUP_CROSSING_CLUB_LOGO_MAP = {
  ...TEAM_LOGOS,
  "Internacional SC": TEAM_LOGOS.Internacional,
  "Colo Colo": TEAM_LOGOS["Colo-Colo"],
  "Argentinos JRS": TEAM_LOGOS.Argentinos
};

function normalizeClubName(value = "") {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, " ");
}

function getCupCrossingDivisionLabel(division = "") {
  return CUP_CROSSING_DIVISION_SHORT[division] || division;
}

function parseSeasonNumber(seasonValue) {
  const asString = String(seasonValue || "");
  const match = asString.match(/\d+/);
  return match ? Number.parseInt(match[0], 10) : null;
}

function getDivisionsForSeason(seasonNumber, options = {}) {
  const { includeFourthAlways = false } = options;

  if (includeFourthAlways || seasonNumber == null || Number.isNaN(seasonNumber) || seasonNumber <= 23) {
    return ["Primera", "Segunda", "Tercera", "Cuarta"];
  }

  return ["Primera", "Segunda", "Tercera"];
}

function getDivisionMetaForSeason(seasonNumber, options = {}) {
  const allowedDivisions = new Set(getDivisionsForSeason(seasonNumber, options));

  return DIVISION_CONFIG.filter((division) => {
    return allowedDivisions.has(DIVISION_NAMES_BY_KEY[division.key]);
  });
}

function isDivisionEnabledForSeason(divisionName, seasonNumber, options = {}) {
  return getDivisionsForSeason(seasonNumber, options).includes(divisionName);
}

function toAssetPath(assetPath = "") {
  if (/^https?:\/\//i.test(assetPath)) return assetPath;

  const normalizedAssetPath = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${ASSETS_BASE_PATH}${normalizedAssetPath}`;
}

function getCupCrossingTeamLogoPath(teamData) {
  if (teamData.shield) {
    return toAssetPath(teamData.shield);
  }

  if (teamData.escudo) {
    return toAssetPath(teamData.escudo);
  }

  if (teamData.logo) {
    return toAssetPath(teamData.logo);
  }

  if (CUP_CROSSING_CLUB_LOGO_MAP[teamData.club]) {
    return toAssetPath(`assets/${CUP_CROSSING_CLUB_LOGO_MAP[teamData.club]}`);
  }

  const normalizedClub = normalizeClubName(teamData.club);
  const normalizedMappedClub = Object.entries(CUP_CROSSING_CLUB_LOGO_MAP).find(([clubName]) => {
    return normalizeClubName(clubName) === normalizedClub;
  });

  if (normalizedMappedClub) {
    return toAssetPath(`assets/${normalizedMappedClub[1]}`);
  }

  if (!normalizedClub) return "";

  const assetName = normalizedClub.replace(/\s+/g, "_");
  return toAssetPath(`assets/${assetName}.png`);
}

const overlay = document.getElementById("modal-overlay");
const modals = [...document.querySelectorAll(".league-modal")];
const triggers = [...document.querySelectorAll(".modal-trigger")];
const closeButtons = [...document.querySelectorAll(".close-btn-fixed")];
const copyButtons = [...document.querySelectorAll(".copy-btn")];
const backToTopButton = document.getElementById("back-to-top");
const pes6Status = document.getElementById("pes6Status");
const pes6Remaining = document.getElementById("pes6-remaining");
const kofRemaining = document.getElementById("kof-remaining");
const pes6SeasonName = document.getElementById("pes6SeasonName");
const cupStatus = document.getElementById("cupStatus");
const cupInterdivisionalCard = document.getElementById("cup-interdivisional-card");
const cupCrossingsPanel = document.getElementById("cup-crossings-panel");
const cupCrossingsList = document.getElementById("cup-crossings-list");
const cupHistoryList = document.getElementById("cup-history-list");
const cupToggleLabel = document.getElementById("cup-toggle-label");
const cupCurrentSeason = document.getElementById("cup-current-season");
const cupCurrentPhase = document.getElementById("cup-current-phase");
const cupTabActive = document.getElementById("cup-tab-active");
const cupTabHistory = document.getElementById("cup-tab-history");
const cupTabPanelActive = document.getElementById("cup-tab-panel-active");
const cupTabPanelHistory = document.getElementById("cup-tab-panel-history");
const cupHistorySeasonSelect = document.getElementById("cup-history-season");
const cupPremierCard = document.getElementById("cup-premier-card");
const cupPremierPanel = document.getElementById("cup-premier-panel");
const cupPremierSeasonCard = document.getElementById("cup-premier-season-card");
const cupPremierList = document.getElementById("cup-premier-list");
const cupPremierHistoryList = document.getElementById("cup-premier-history-list");
const cupPremierToggleLabel = document.getElementById("cup-premier-toggle-label");
const cupPremierCurrentSeason = document.getElementById("cup-premier-current-season");
const cupPremierCurrentPhase = document.getElementById("cup-premier-current-phase");
const cupPremierStatus = document.getElementById("cupPremierStatus");
const cupPremierRemaining = document.getElementById("cup-premier-remaining");
const cupPremierTabActive = document.getElementById("cup-premier-tab-active");
const cupPremierTabHistory = document.getElementById("cup-premier-tab-history");
const cupPremierTabPanelActive = document.getElementById("cup-premier-tab-panel-active");
const cupPremierTabPanelHistory = document.getElementById("cup-premier-tab-panel-history");
const cupPremierHistorySeasonSelect = document.getElementById("cup-premier-history-season");
const sfStatus = document.getElementById("sfStatus");
const sfSeasonName = document.getElementById("sfSeasonName");
const pes6SlotsValue = document.getElementById("pes6-slots");
const pes6SlotsBadge = document.getElementById("pes6-slots-badge");
const pes6LeadersList = document.getElementById("pes6-leaders");
const pes6Updated = document.getElementById("pes6-updated");
const kofTop3Section = document.getElementById("kof-top3-section");
const kofTop3List = document.getElementById("kof-top3");
const kofUpdated = document.getElementById("kof-updated");
const bountyWeekList = document.getElementById("bounty-week-list");
const sfSlotsValue = document.getElementById("sf-slots");
const sfSlotsBadge = document.getElementById("sf-slots-badge");
const donationProgressText = document.getElementById("donation-progress-text");
const donationProgressBar = document.getElementById("donation-progress-bar");
const donationGoalTrack = document.querySelector(".donation-goal-track");
const pes6Panel = document.getElementById("pes6-panel");
const pes6MaintenanceGoHistoryButton = document.getElementById("pes6-t24-maintenance-go-history");

const kofContentBindings = {
  heroName: document.getElementById("kofHeroName"),
  seasonTitle: document.getElementById("kof-season-title"),
  seasonSlotsLabel: document.getElementById("kofSeasonSlotsLabel"),
  cardImage: document.getElementById("kofCardImage"),
  cardHeading: document.getElementById("kofCardHeading"),
  cardDescription: document.getElementById("kofCardDescription"),
  modalBanner: document.getElementById("kofModalBanner"),
  modalTitle: document.getElementById("kofModalTitle"),
  modalTabsLabel: document.getElementById("kofModalTabsLabel"),
  modalNeedTitle: document.getElementById("kofNeedTitle"),
  modalRoom: document.getElementById("kofRoomName"),
  modalMessage: document.getElementById("kof-message"),
  modalInstallLink: document.getElementById("kofInstallVideoLink"),
  modalSystemList: document.getElementById("kofSystemList"),
  modalSeasonsList: document.getElementById("kofSeasonsList"),
  systemTabButton: document.getElementById("sistema-tab-btn-sfii"),
  systemTabList: document.getElementById("kofSystemPanelList")
};


let activeModal = null;
let lastFocusedElement = null;
let showAllTitlesRanking = false;
let openTitlesRankingId = null;
let interdivisionalState = null;
let cupPanelTab = "active";
let cupActivePhase = "2";
let cupHistorySeasonKey = "";
let cupHistorySelectedPhase = "";
let copaPremierState = null;
let cupPremierPanelTab = "active";
let cupPremierActivePhase = "cuartos";
const MAX_RANKING_TITLES_DETAIL = 6;

const CUP_PHASE_BUTTONS = [
  { id: "1", key: "octavos_playoffs", label: "1RA FASE" },
  { id: "2", key: "cuartos_playoffs", label: "2DA FASE" },
  { id: "3", key: "semifinal_playoffs", label: "3RA FASE" },
  { id: "4", key: "final_playoffs", label: "4TA FASE" },
  { id: "5", key: "final_copa_interdivisional", label: "5TA FASE" }
];

const CUP_HISTORY_PHASES = [
  { id: "1", key: "octavos_playoffs", label: "1RA FASE" },
  { id: "2", key: "cuartos_playoffs", label: "2DA FASE" },
  { id: "3", key: "semifinal_playoffs", label: "3RA FASE" },
  { id: "4", key: "final_playoffs", label: "4TA FASE" },
  { id: "5", key: "final_copa_interdivisional", label: "5TA FASE" }
];

const CUP_HISTORY_MIN_SEASON_NUMBER = 23;

const T24_DIVISIONS = [
  { key: "primera", label: "Primera División" },
  { key: "segunda", label: "Segunda División" },
  { key: "tercera", label: "Tercera División" }
];

const T24_ESCUDO_PLACEHOLDER = "-";
let t24TablesLoaded = false;

const T24_MAINTENANCE_HASH_ALIASES = new Set([
  "#pes6-tab-tablas-t24",
  "#tablas-t24",
  "#pes6-tablas-t24"
]);


function createT24Cell(tag, text, className = "") {
  const cell = document.createElement(tag);
  if (className) cell.className = className;
  cell.textContent = text;
  return cell;
}

function splitEquipo(raw = "") {
  const rawValue = String(raw || "").trim();
  if (!rawValue) {
    return { jugador: "", equipo: "" };
  }

  if (!rawValue.includes(" - ")) {
    return { jugador: "", equipo: rawValue };
  }

  const [jugadorRaw = "", equipoRaw = ""] = rawValue.split(" - ");
  return {
    jugador: jugadorRaw.trim(),
    equipo: equipoRaw.trim()
  };
}

function slugifyTeamName(name = "") {
  return String(name || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function getT24BadgeSrc(teamName = "") {
  const slug = slugifyTeamName(teamName);
  if (!slug) return "";
  const base = window.location.pathname.includes('/sudaka-league/') ? '/sudaka-league/' : '/';
  return `${base}assets/escudos/${slug}.png`;
}

function normalizeT24Entry(entry = {}) {
  const combinedEquipo = typeof entry.equipo === "string" ? entry.equipo : "";
  const parsedEquipo = splitEquipo(combinedEquipo);
  const teamName = (entry.team || parsedEquipo.equipo || "").trim();
  const playerName = (entry.player || parsedEquipo.jugador || "").trim();

  return {
    pos: entry.pos,
    rowEquipo: combinedEquipo,
    teamName,
    playerName,
    escudoSrc: getT24BadgeSrc(teamName),
    pts: entry.pts,
    pj: entry.pj,
    pg: entry.pg,
    pe: entry.pe,
    pp: entry.pp,
    gf: entry.gf,
    gc: entry.gc,
    dg: entry.dg
  };
}

function createT24TableCard(divisionLabel, data) {
  const rows = data?.rows || [];
  const hasRows = rows.length > 0;
  const card = document.createElement("article");
  card.className = "t24-card sl-card";

  const title = document.createElement("h3");
  title.className = "t24-card-title";
  title.textContent = divisionLabel;

  const scroller = document.createElement("div");
  scroller.className = "t24-table-scroller table-scroll";

  const table = document.createElement("table");
  table.className = "t24-table";

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  ["Pos", "Escudo", "Jugador", "Equipo", "Pts", "PJ", "PG", "PE", "PP", "GF", "GC", "DG"].forEach((text) => {
    headRow.appendChild(createT24Cell("th", text));
  });
  thead.appendChild(headRow);

  const tbody = document.createElement("tbody");

  if (hasRows) {
    rows.map((rawEntry, index) => {
      const entry = normalizeT24Entry(rawEntry);
      const row = document.createElement("tr");
      if (index < 3) {
        row.classList.add("is-top");
      }

      row.appendChild(createT24Cell("td", String(entry.pos ?? "-"), "t24-pos"));

      const logoCell = document.createElement("td");
      logoCell.className = "t24-logo-cell";
      if (entry.escudoSrc) {
        const logo = document.createElement("img");
        logo.className = "team-crest";
        logo.src = entry.escudoSrc;
        logo.alt = entry.teamName || "Equipo";
        logo.loading = "lazy";
        logo.onerror = () => {
          const fallback = document.createElement("span");
          fallback.className = "badge-missing";
          fallback.textContent = T24_ESCUDO_PLACEHOLDER;
          logo.replaceWith(fallback);
        };
        logoCell.appendChild(logo);
      } else {
        const fallback = document.createElement("span");
        fallback.className = "badge-missing";
        fallback.textContent = T24_ESCUDO_PLACEHOLDER;
        logoCell.appendChild(fallback);
      }
      row.appendChild(logoCell);

      row.appendChild(createT24Cell("td", entry.playerName || "-", "t24-player"));
      row.appendChild(createT24Cell("td", entry.teamName || "-", "t24-team"));
      row.appendChild(createT24Cell("td", String(entry.pts ?? "-")));
      row.appendChild(createT24Cell("td", String(entry.pj ?? "-")));
      row.appendChild(createT24Cell("td", String(entry.pg ?? "-")));
      row.appendChild(createT24Cell("td", String(entry.pe ?? "-")));
      row.appendChild(createT24Cell("td", String(entry.pp ?? "-")));
      row.appendChild(createT24Cell("td", String(entry.gf ?? "-")));
      row.appendChild(createT24Cell("td", String(entry.gc ?? "-")));
      row.appendChild(createT24Cell("td", String(entry.dg ?? "-"), "t24-dg"));

      tbody.appendChild(row);
    });
  } else {
    const emptyRow = document.createElement("tr");
    const emptyCell = createT24Cell("td", "Sin datos");
    emptyCell.colSpan = 12;
    emptyRow.appendChild(emptyCell);
    tbody.appendChild(emptyRow);
  }

  table.append(thead, tbody);
  scroller.appendChild(table);
  card.append(title, scroller);
  return card;
}

async function fetchT24DivisionData(key) {
  const basePath = window.location.pathname.includes('/sudaka-league')
    ? '/sudaka-league'
    : '';
  const T24_FETCH_PATHS = {
    primera: `${basePath}/data/gesliga/t24/primera.json`,
    segunda: `${basePath}/data/gesliga/t24/segunda.json`,
    tercera: `${basePath}/data/gesliga/t24/tercera.json`
  };

  try {
    const response = await fetch(T24_FETCH_PATHS[key], { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`No se pudo cargar ${key}.json (${response.status})`);
    }

    const data = await response.json();
    const rows = data.rows || [];
    return { ...data, rows };
  } catch (error) {
    console.error(`Error en fetch de tabla T24 (${key})`, error);
    throw error;
  }
}

async function renderT24Tables() {
  const container = document.getElementById("pes6-tablas-t24");
  if (!container) return;

  container.replaceChildren();
  const loading = document.createElement("p");
  loading.className = "t24-status";
  loading.textContent = "Cargando tablas T24…";
  container.appendChild(loading);

  try {
    const datasets = await Promise.all(T24_DIVISIONS.map((division) => fetchT24DivisionData(division.key)));
    container.replaceChildren();

    T24_DIVISIONS.forEach((division, index) => {
      container.appendChild(createT24TableCard(division.label, datasets[index]));
    });

    t24TablesLoaded = true;
  } catch (error) {
    console.error("Error al cargar tablas T24", error);
    container.replaceChildren();
    const message = document.createElement("p");
    message.className = "t24-status is-error";
    message.textContent = "No se pudieron cargar las tablas T24. Intentá nuevamente en unos minutos.";
    container.appendChild(message);
  }
}

// Asignación centralizada de links editables.

const PES6_FINAL_TARGET = new Date("2026-02-22T23:59:00-03:00");
function updateCountdown(targetDate, el, options = {}) {
  if (!el) return;

  const now = new Date();
  const ms = targetDate.getTime() - now.getTime();
  const formatDays = options.formatDays ?? ((value) => `${value} días restantes`);
  const formatHours = options.formatHours ?? ((hours, minutes) => `${hours} horas ${minutes} min`);
  const formatEnded = options.formatEnded ?? (() => "FINALIZADA");

  if (ms <= 0) {
    el.textContent = formatEnded();
    return;
  }

  if (ms < 24 * 60 * 60 * 1000 && options.showHoursOnLastDay) {
    const totalMinutes = Math.max(1, Math.floor(ms / (60 * 1000)));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    el.textContent = formatHours(hours, minutes);
    return;
  }

  const days = Math.max(1, Math.ceil(ms / (24 * 60 * 60 * 1000)));
  el.textContent = formatDays(days);
}

function updateLeagueRemaining(targetDate, el) {
  updateCountdown(targetDate, el, { showHoursOnLastDay: true });
}

function getCurrentCupHeaderPhase() {
  const currentSeason = getCurrentInterdivisionalSeason();
  if (!currentSeason) return INTERDIVISIONAL_PHASES[0].key;

  return getCurrentInterdivisionalPhase(currentSeason);
}

function hasLoadedInterdivisionalMatches(season, phaseKey) {
  if (!season?.phases || !phaseKey) return false;

  const matches = season.phases[phaseKey];
  return Array.isArray(matches) && matches.length > 0;
}

function hasPhaseLoadedInSource(source, keys = []) {
  if (!source || typeof source !== "object") return false;

  return keys.some((key) => {
    const matches = source[key];
    return Array.isArray(matches) && matches.length > 0;
  });
}

function detectInterdivisionalPhaseFromSource(source) {
  if (!source || typeof source !== "object") return null;

  if (hasPhaseLoadedInSource(source, ["final_copa_interdivisional", "final_copa_interdivicional", "final"])) {
    return "final_copa_interdivisional";
  }

  if (hasPhaseLoadedInSource(source, ["final_playoffs", "finalpo"])) {
    return "final_playoffs";
  }

  if (hasPhaseLoadedInSource(source, ["semifinal_playoffs", "semis"])) {
    return "semifinal_playoffs";
  }

  if (hasPhaseLoadedInSource(source, ["cuartos_playoffs", "cuartos"])) {
    return "cuartos_playoffs";
  }

  if (hasPhaseLoadedInSource(source, ["octavos_playoffs", "octavos"])) {
    return "octavos_playoffs";
  }

  return null;
}

function getCurrentInterdivisionalPhase(season) {
  if (!season) return INTERDIVISIONAL_PHASES[0].key;

  const sourcePhases = detectInterdivisionalPhaseFromSource(INTERDIVISIONAL_ACTIVE_SOURCE)
    || detectInterdivisionalPhaseFromSource(INTERDIVISIONAL_ACTIVE_SOURCE?.phases)
    || detectInterdivisionalPhaseFromSource(INTERDIVISIONAL_RESULTS_SOURCE);

  if (sourcePhases) {
    return sourcePhases;
  }

  if (hasLoadedInterdivisionalMatches(season, "final_copa_interdivisional")) {
    return "final_copa_interdivisional";
  }

  if (hasLoadedInterdivisionalMatches(season, "final_playoffs")) {
    return "final_playoffs";
  }

  if (hasLoadedInterdivisionalMatches(season, "semifinal_playoffs")) {
    return "semifinal_playoffs";
  }

  if (hasLoadedInterdivisionalMatches(season, "cuartos_playoffs")) {
    return "cuartos_playoffs";
  }

  if (hasLoadedInterdivisionalMatches(season, "octavos_playoffs")) {
    return "octavos_playoffs";
  }

  return INTERDIVISIONAL_PHASES[0].key;
}

function updateMainSeasonCountdowns() {
  updateLeagueRemaining(PES6_FINAL_TARGET, pes6Remaining);
  updateLeagueRemaining(PES6_FINAL_TARGET, kofRemaining);
}

function updateCupRemaining() {
  if (cupPremierRemaining) {
    cupPremierRemaining.textContent = "INACTIVA";
  }
}

function formatInterdivisionalCountdown(msRemaining) {
  if (msRemaining <= 0) return "FINALIZADO";

  const totalMinutes = Math.max(0, Math.floor(msRemaining / (1000 * 60)));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  if (days > 0) {
    return `⏳ ${days}d ${hours}h ${minutes}m`;
  }

  if (hours > 0) {
    return `⏳ ${hours}h ${minutes}m`;
  }

  return `⏳ ${Math.max(0, minutes)}m`;
}

function iniciarContador() {
  const contadorEl = document.getElementById("contador-inter");
  if (!contadorEl) return;

  contadorEl.classList.add("mini-badge", "cup-countdown-chip");

  const deadlineValue = copaInterdivisionalConfig?.deadline;
  const deadline = deadlineValue ? new Date(deadlineValue) : null;
  const hasValidDeadline = deadline instanceof Date && !Number.isNaN(deadline.getTime());

  function actualizar() {
    if (!hasValidDeadline) {
      contadorEl.textContent = "Sin fecha";
      return;
    }

    const diferencia = deadline.getTime() - Date.now();
    contadorEl.textContent = formatInterdivisionalCountdown(diferencia);
  }

  actualizar();
  setInterval(actualizar, 30000);
}

function updateSeasonStatus() {
  if (!pes6Status || !pes6SeasonName || !sfStatus || !sfSeasonName || !pes6Remaining) {
    return;
  }

  pes6SeasonName.textContent = PES6_SEASON_NAME;
  sfSeasonName.textContent = KOF_LEAGUE.temporada.nombre;

  const seasonEnded = PES6_FINAL_TARGET.getTime() - Date.now() <= 0;
  const kofEnded = seasonEnded;

  pes6Status.textContent = seasonEnded ? "FINALIZADA" : "ACTIVA";
  pes6Status.classList.toggle("season-badge-active", !seasonEnded);
  pes6Status.classList.toggle("season-badge-ended", seasonEnded);

  sfStatus.textContent = kofEnded ? "FINALIZADA" : "ACTIVA";
  sfStatus.classList.toggle("season-badge-active", !kofEnded);
  sfStatus.classList.toggle("season-badge-ended", kofEnded);
  sfStatus.classList.toggle("season-badge-wait", false);

  updateCupCardHeader();
}

function updateSlotsStatus() {
  const slotsElements = [
    pes6SlotsValue,
    pes6SlotsBadge,
    sfSlotsValue,
    sfSlotsBadge
  ];

  if (slotsElements.some((element) => !element)) {
    return;
  }

  const slotsConfig = [
    {
      slots: PES6_CUPOS_LIBRES,
      value: pes6SlotsValue,
      badge: pes6SlotsBadge
    },
    {
      slots: KOF_CUPOS_LIBRES,
      value: sfSlotsValue,
      badge: sfSlotsBadge
    }
  ];

  slotsConfig.forEach(({ slots, value, badge }) => {
    const isOpen = slots > 0;
    const safeSlots = Math.max(0, slots);

    value.textContent = `${safeSlots} libres`;
    badge.textContent = isOpen ? "ABIERTA" : "COMPLETA";
    badge.classList.toggle("mini-badge--open", isOpen);
    badge.classList.toggle("mini-badge--closed", !isOpen);
  });
}

function renderList(target, items) {
  if (!target) return;
  target.replaceChildren();
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function getPes6LeaderShieldSrc(escudoFile = "") {
  const cleanFile = String(escudoFile || "").trim();
  if (!cleanFile) return "";
  return toAssetPath(`assets/escudos/${cleanFile}`);
}

function createPes6LeaderItem(leader = {}) {
  const item = document.createElement("article");
  item.className = "pes6-leader-card";

  const divisionKey = String(leader.divisionKey || "").trim().toLowerCase();
  if (divisionKey) {
    item.dataset.division = divisionKey;
  }

  const left = document.createElement("div");
  left.className = "pes6-leader-main";

  const shieldWrap = document.createElement("div");
  shieldWrap.className = "pes6-leader-shield";

  const shieldSrc = getPes6LeaderShieldSrc(leader.escudoFile);
  if (shieldSrc) {
    const shield = document.createElement("img");
    shield.loading = "lazy";
    shield.decoding = "async";
    shield.alt = `Escudo ${leader.usuario || ""}`;
    shield.src = shieldSrc;

    shield.onerror = () => {
      const fallbackSrc = toAssetPath("assets/escudos/default.png");
      if (shield.dataset.fallbackApplied === "1") {
        shield.remove();
        return;
      }

      shield.dataset.fallbackApplied = "1";
      shield.src = fallbackSrc;

      shield.onerror = () => {
        shield.remove();
      };
    };

    shieldWrap.appendChild(shield);
  }

  const info = document.createElement("div");
  info.className = "pes6-leader-info";

  const user = document.createElement("p");
  user.className = "pes6-leader-user";
  user.textContent = String(leader.usuario || "—");

  const badges = document.createElement("div");
  badges.className = "pes6-leader-badges";

  const pj = document.createElement("span");
  pj.className = "mini-badge";
  pj.textContent = `PJ: ${Number.isFinite(Number(leader.pj)) ? Number(leader.pj) : 0}`;

  const pg = document.createElement("span");
  pg.className = "mini-badge";
  pg.textContent = `PG: ${Number.isFinite(Number(leader.pg)) ? Number(leader.pg) : 0}`;

  const pts = document.createElement("span");
  pts.className = "mini-badge";
  const leaderPoints = leader.pts ?? leader.points;
  pts.textContent = `PTS: ${Number.isFinite(Number(leaderPoints)) ? Number(leaderPoints) : 0}`;

  badges.append(pj, pg, pts);
  info.append(user, badges);
  left.append(shieldWrap, info);

  const division = document.createElement("span");
  division.className = "pes6-leader-division";
  division.textContent = String(leader.divisionLabel || "Sin división");

  item.append(left, division);
  return item;
}

function getKofGloveImagePath(gloveColor = "") {
  if (/^(?:https?:)?\/\//i.test(gloveColor)) return gloveColor;
  return toAssetPath(getKofGloveImage(gloveColor));
}

function createKofTop3Item(player = {}, positionIndex = 0) {
  const item = document.createElement("article");
  item.className = "pes6-leader-card kof-top3-card";

  const left = document.createElement("div");
  left.className = "pes6-leader-main";

  const gloveWrap = document.createElement("span");
  gloveWrap.className = "pes6-leader-shield kof-top3-glove";

  const rawGloveColor = player.gloveColor || player.glove || player.color || player.gloveImage || "";
  const gloveColorSlug = normalizeKofGloveColor(rawGloveColor);

  const gloveImg = document.createElement("img");
  gloveImg.src = getKofGloveImagePath(gloveColorSlug || rawGloveColor);
  gloveImg.alt = `Guante ${gloveColorSlug || "blanco"} puesto ${player.pos || positionIndex + 1}`;
  gloveImg.loading = "lazy";
  gloveImg.decoding = "async";

  const glowColor = getKofGlowColor(gloveColorSlug || rawGloveColor);
  item.style.setProperty("--glow-color", glowColor);

  gloveImg.onerror = () => {
    if (gloveImg.dataset.fallbackApplied === "1") {
      gloveImg.remove();
      const fallback = document.createElement("span");
      fallback.className = "kof-top3-fallback";
      fallback.setAttribute("aria-hidden", "true");
      fallback.textContent = "🥊";
      gloveWrap.appendChild(fallback);
      return;
    }

    gloveImg.dataset.fallbackApplied = "1";
    gloveImg.src = toAssetPath("assets/blanco.png");
  };

  gloveWrap.appendChild(gloveImg);

  const info = document.createElement("div");
  info.className = "pes6-leader-info";

  const name = document.createElement("p");
  name.className = "pes6-leader-user";
  const playerPos = Number.isFinite(Number(player.pos)) ? Number(player.pos) : positionIndex + 1;
  name.textContent = `#${playerPos} ${String(player.user || "—")}`;

  info.appendChild(name);
  left.append(gloveWrap, info);

  const wins = document.createElement("span");
  wins.className = "mini-badge";
  const winsValue = Number.isFinite(Number(player.wins)) ? Number(player.wins) : 0;
  wins.textContent = `Wins: ${winsValue}`;

  item.append(left, wins);
  return item;
}

function buildBountyRow({
  icon = "",
  user = "",
  gloveImage = null,
  badgeText = "",
  showBadge = false,
  enableGlow = false,
  enableParticles = false
} = {}) {
  const row = document.createElement("article");
  row.className = "pes6-leader-card kof-top3-card bounty-row bountyRow";

  const left = document.createElement("div");
  left.className = "pes6-leader-main leftGroup";

  const iconNode = document.createElement("span");
  iconNode.className = "bounty-row-icon";
  iconNode.setAttribute("aria-hidden", "true");
  iconNode.textContent = String(icon || "");

  const gloveWrap = document.createElement("span");
  gloveWrap.className = "pes6-leader-shield kof-top3-glove bounty-row-glove";
  let hasGlove = false;

  if (gloveImage) {
    const gloveSlug = normalizeKofGloveColor(gloveImage);
    const gloveImg = document.createElement("img");
    gloveImg.loading = "lazy";
    gloveImg.decoding = "async";
    gloveImg.alt = `Guante ${gloveSlug || "blanco"}`;
    gloveImg.src = getKofGloveImagePath(gloveSlug || gloveImage);

    gloveImg.onerror = () => {
      if (gloveImg.dataset.fallbackApplied === "1") {
        gloveImg.remove();
        return;
      }
      gloveImg.dataset.fallbackApplied = "1";
      gloveImg.src = toAssetPath("assets/blanco.png");
    };

    gloveWrap.appendChild(gloveImg);
    hasGlove = true;
  }

  const info = document.createElement("div");
  info.className = "pes6-leader-info";

  const userName = document.createElement("p");
  userName.className = "pes6-leader-user";
  userName.textContent = String(user || "—");

  info.appendChild(userName);
  left.append(iconNode);

  if (hasGlove) {
    left.append(gloveWrap);
  }

  left.append(info);

  let glowColor = null;
  if (gloveImage) {
    glowColor = getKofGlowColor(gloveImage);
    row.style.setProperty("--bountyColor", glowColor);
  }

  if (enableGlow && gloveImage) {
    row.style.setProperty("--glow-color", glowColor);
    row.classList.add("is-glow");
  }

  if (enableParticles) {
    row.classList.add("has-particles");
    const particlesWrap = document.createElement("div");
    particlesWrap.className = "bounty-particles bountyParticles";
    particlesWrap.setAttribute("aria-hidden", "true");

    for (let i = 0; i < BOUNTY_PARTICLES_COUNT; i += 1) {
      const particle = document.createElement("span");
      particle.className = `bounty-particle particle p${i}`;
      particlesWrap.appendChild(particle);
    }

    row.appendChild(particlesWrap);
  }

  row.append(left);

  if (showBadge) {
    const badge = document.createElement("span");
    badge.className = "mini-badge bounty-row-badge rightGroup";
    badge.textContent = String(badgeText || "—");
    row.append(badge);
  }

  return row;
}

function renderBountyWeek() {
  if (!bountyWeekList) return;

  bountyWeekList.replaceChildren();

  const bountyUser = String(BOUNTY_DATA?.bountyUser || "—");
  const bountyGloveImage = BOUNTY_DATA?.bountyGloveImage || null;
  const hunterUserValue = BOUNTY_DATA?.hunterUser;
  const hunterHasUser = hunterUserValue !== null && String(hunterUserValue || "").trim() !== "";
  const hunterUser = hunterHasUser ? String(hunterUserValue) : "Sin cazador";
  const hunterGloveImage = hunterHasUser ? (BOUNTY_DATA?.hunterGloveImage || null) : null;
  const bountyBadgeText = hunterHasUser ? "Derrotado" : "Bounty activo";

  const bountyRow = buildBountyRow({
    icon: "🎯",
    user: bountyUser,
    gloveImage: bountyGloveImage,
    badgeText: bountyBadgeText,
    showBadge: true,
    enableGlow: true,
    enableParticles: !hunterHasUser
  });

  const hunterRow = buildBountyRow({
    icon: "⚔️",
    user: hunterUser,
    gloveImage: hunterGloveImage,
    showBadge: false,
    enableGlow: hunterHasUser,
    enableParticles: false
  });

  bountyWeekList.append(bountyRow, hunterRow);
}


async function renderKofTop3() {
  if (!kofTop3Section || !kofTop3List) return;

  const showTop3Unavailable = () => {
    kofTop3List.replaceChildren();
    const empty = document.createElement("p");
    empty.className = "pes6-leaders-empty";
    empty.textContent = "Top 3 no disponible";
    kofTop3List.appendChild(empty);
    kofTop3Section.hidden = false;

    if (kofUpdated) {
      kofUpdated.hidden = true;
      kofUpdated.textContent = "";
    }
  };

  try {
    const response = await fetch(KOF_TOP3_DATA_PATH, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`No se pudo cargar Top 3 KOF (${response.status})`);
    }

    const data = await response.json();
    const top3 = Array.isArray(data?.top3) ? data.top3 : [];

    if (kofUpdated) {
      if (data?.updatedAt) {
        kofUpdated.textContent = `Última actualización: ${timeAgo(data.updatedAt)}`;
        kofUpdated.hidden = false;
      } else {
        kofUpdated.hidden = true;
        kofUpdated.textContent = "";
      }
    }

    if (!top3.length) {
      showTop3Unavailable();
      return;
    }

    const fragment = document.createDocumentFragment();
    top3.forEach((player, index) => {
      fragment.appendChild(createKofTop3Item(player, index));
    });

    kofTop3List.replaceChildren(fragment);
    kofTop3Section.hidden = false;
  } catch (_error) {
    showTop3Unavailable();
  }
}

function timeAgo(dateStr) {
  const now = new Date();
  const past = new Date(dateStr);

  if (Number.isNaN(past.getTime())) {
    return "fecha desconocida";
  }

  const diffHours = Math.floor((now - past) / (1000 * 60 * 60));

  if (diffHours < 1) return "hace menos de 1 hora";
  if (diffHours < 24) return `hace ${diffHours} hs`;

  const days = Math.floor(diffHours / 24);
  return `hace ${days} días`;
}

async function loadPes6Leaders() {
  if (!pes6LeadersList) return;

  pes6LeadersList.replaceChildren();

  try {
    const response = await fetch("data/pes6_punteros.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`No se pudo cargar punteros (${response.status})`);
    }

    const data = await response.json();
    const leaders = Array.isArray(data?.leaders) ? data.leaders : [];

    if (pes6Updated) {
      if (data?.updatedAt) {
        pes6Updated.textContent = `Última actualización: ${timeAgo(data.updatedAt)}`;
        pes6Updated.hidden = false;
      } else {
        pes6Updated.hidden = true;
        pes6Updated.textContent = "";
      }
    }

    if (!leaders.length) {
      const empty = document.createElement("p");
      empty.className = "pes6-leaders-empty";
      empty.textContent = "Sin datos cargados.";
      pes6LeadersList.appendChild(empty);
      return;
    }

    const fragment = document.createDocumentFragment();
    leaders.forEach((leader) => {
      fragment.appendChild(createPes6LeaderItem(leader));
    });

    pes6LeadersList.appendChild(fragment);
  } catch (error) {
    if (pes6Updated) {
      pes6Updated.hidden = true;
      pes6Updated.textContent = "";
    }

    console.error("Error al cargar punteros PES6", error);
    const errorText = document.createElement("p");
    errorText.className = "pes6-leaders-empty";
    errorText.textContent = "No se pudieron cargar los punteros.";
    pes6LeadersList.appendChild(errorText);
  }
}

function applyKofLeagueContent() {
  const {
    nombre,
    nombreCorto,
    logo,
    card,
    caracteristicas,
    salaFightcade,
    videoInstalacion
  } = KOF_LEAGUE;

  if (kofContentBindings.heroName) {
    kofContentBindings.heroName.textContent = nombre;
  }

  if (kofContentBindings.seasonTitle) {
    kofContentBindings.seasonTitle.textContent = `🥊 ${nombre}`;
  }

  if (kofContentBindings.seasonSlotsLabel) {
    kofContentBindings.seasonSlotsLabel.setAttribute("aria-label", `Cupos ${nombreCorto}`);
  }

  if (kofContentBindings.cardImage) {
    kofContentBindings.cardImage.src = logo;
    kofContentBindings.cardImage.alt = `${nombre} - Sudaka League`;
  }

  if (kofContentBindings.cardHeading) {
    kofContentBindings.cardHeading.textContent = nombre;
  }

  if (kofContentBindings.cardDescription) {
    kofContentBindings.cardDescription.textContent = card.descripcion;
  }

  if (kofContentBindings.modalBanner) {
    kofContentBindings.modalBanner.src = logo;
    kofContentBindings.modalBanner.alt = `${nombre} Banner`;
  }

  if (kofContentBindings.modalTitle) {
    kofContentBindings.modalTitle.textContent = nombre.toUpperCase();
  }

  if (kofContentBindings.modalTabsLabel) {
    kofContentBindings.modalTabsLabel.setAttribute("aria-label", `Contenido de ${nombre}`);
  }

  if (kofContentBindings.modalNeedTitle) {
    kofContentBindings.modalNeedTitle.textContent = `¿Qué necesitás para jugar ${nombre} en Sudaka League?`;
  }

  if (kofContentBindings.modalRoom) {
    kofContentBindings.modalRoom.textContent = salaFightcade;
  }

  if (kofContentBindings.modalInstallLink) {
    kofContentBindings.modalInstallLink.href = videoInstalacion;
    kofContentBindings.modalInstallLink.textContent = videoInstalacion;
  }

  if (kofContentBindings.modalMessage) {
    kofContentBindings.modalMessage.value = `🔥 BIENVENIDO A LA LIGA DE ${nombre.toUpperCase()} – SUDAKA LEAGUE 🔥

📹 VIDEO DE INSTALACIÓN (OBLIGATORIO)
Este video explica únicamente cómo instalar y configurar Fightcade y el juego: ${videoInstalacion}

⚠️ IMPORTANTE: El video NO explica el funcionamiento de la liga.

🎮 ¿CÓMO FUNCIONA LA LIGA?
La liga se juega en Fightcade con ${nombreCorto}.

📍 SALÓN DE FIGHTCADE (OBLIGATORIO)
${salaFightcade}

🔍 ¿CÓMO BUSCAR PARTIDA?
1) Entrar a Fightcade
2) Buscar el salón indicado
3) Avisar en el grupo de WhatsApp que estás disponible
4) Coordinar, invitar y jugar
5) Enviar resultado al grupo

⏱️ DATOS CLAVE
- No hay horarios fijos
- No hay lobby automático
- Los partidos se juegan cuando coinciden dos jugadores

🏆 OBJETIVO
Competir, sumar puntos y escalar posiciones.

🔥 Bienvenido a Sudaka League – ${nombreCorto} 🔥`;
  }

  renderList(kofContentBindings.modalSystemList, [
    "Formato 1 vs 1",
    "Sin horarios fijos, se coordina por WhatsApp",
    "Se juega en Fightcade dentro del salón oficial",
    "Resultados cargados en Gesliga",
    "Ranking / posiciones oficiales",
    "Respeto y juego limpio"
  ]);

  renderList(kofContentBindings.modalSeasonsList, [
    "Temporadas de 2 semanas",
    "Los colores representan al jugador",
    "Personajes libres (todos pueden usar cualquier personaje)"
  ]);

  if (kofContentBindings.systemTabButton) {
    kofContentBindings.systemTabButton.textContent = nombre;
  }

  renderList(kofContentBindings.systemTabList, caracteristicas);
}

function updateDonationGoal() {
  if (!donationProgressText || !donationProgressBar || !donationGoalTrack) {
    return;
  }

  const safeCurrentAmount = Math.max(0, DONATION_CURRENT_AMOUNT_ARS);
  const safeGoal = Math.max(1, DONATION_GOAL_TOTAL_ARS);
  const cappedAmount = Math.min(safeCurrentAmount, safeGoal);
  const progressRatio = cappedAmount / safeGoal;
  const progressPercent = Math.round(progressRatio * 100);

  donationProgressText.textContent = `$${safeCurrentAmount.toLocaleString("es-AR")} / $${safeGoal.toLocaleString("es-AR")}`;
  donationProgressBar.style.width = `${progressPercent}%`;
  donationGoalTrack.setAttribute("aria-valuemax", String(safeGoal));
  donationGoalTrack.setAttribute("aria-valuenow", String(cappedAmount));
}

function applyWhatsAppLinks() {
  const links = {
    "cta-comunidad": WHATSAPP_COMUNIDAD,
    "wa-sf-modal": WHATSAPP_COMUNIDAD
  };

  Object.entries(links).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.href = value;
  });
}

function getFocusableElements(container) {
  return [...container.querySelectorAll('button, [href], textarea, details, summary, [tabindex]:not([tabindex="-1"])')]
    .filter((element) => !element.hasAttribute("disabled") && !element.hidden);
}

function trapFocus(event) {
  if (event.key !== "Tab" || !activeModal) return;

  const focusable = getFocusableElements(activeModal);
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
    return;
  }

  if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function onPes6TabActivated(targetPanelId) {
  if (targetPanelId === "pes6-tab-history") {
    renderPes6History();
  }

  if (targetPanelId === "pes6-tab-ranking") {
    renderPes6Ranking();
  }

}

function activateTabById(modal, targetPanelId) {
  const tabButtons = [...modal.querySelectorAll(".tab-btn")];
  const tabPanels = [...modal.querySelectorAll(".tab-panel")];

  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === targetPanelId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  tabPanels.forEach((panel) => {
    const isActive = panel.id === targetPanelId;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });

  if (modal.id === "pes6-panel") {
    onPes6TabActivated(targetPanelId);
  }
}

function activateTab(modal, tabButton) {
  activateTabById(modal, tabButton.dataset.tab);
}

function setupTabs() {
  modals.forEach((modal) => {
    const tabButtons = [...modal.querySelectorAll(".tab-btn")];
    if (!tabButtons.length) return;

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => activateTab(modal, button));
    });
  });
}

function setAccordionState(item, shouldOpen) {
  const trigger = item.querySelector(".system-accordion-trigger");
  const panel = item.querySelector(".system-accordion-panel");
  if (!trigger || !panel) return;

  trigger.setAttribute("aria-expanded", String(shouldOpen));
  panel.hidden = !shouldOpen;
  panel.classList.toggle("is-open", shouldOpen);
  panel.style.maxHeight = shouldOpen ? `${panel.scrollHeight}px` : "0px";
}

function resetAccordionGroup(group) {
  const items = [...group.querySelectorAll(".system-accordion-item")];
  items.forEach((item) => {
    const isDefaultOpen = item.dataset.defaultOpen === "true";
    setAccordionState(item, isDefaultOpen);
  });
}

function setupAccordionGroups() {
  const groups = [...document.querySelectorAll("[data-accordion-group]")];

  groups.forEach((group) => {
    const items = [...group.querySelectorAll(".system-accordion-item")];

    items.forEach((item) => {
      const trigger = item.querySelector(".system-accordion-trigger");
      if (!trigger) return;

      trigger.addEventListener("click", () => {
        const isExpanded = trigger.getAttribute("aria-expanded") === "true";

        items.forEach((entry) => {
          if (entry !== item) setAccordionState(entry, false);
        });

        setAccordionState(item, !isExpanded);
      });
    });

    resetAccordionGroup(group);
  });

  window.addEventListener("resize", () => {
    groups.forEach((group) => {
      const items = [...group.querySelectorAll(".system-accordion-item")];
      items.forEach((item) => {
        const panel = item.querySelector(".system-accordion-panel");
        const trigger = item.querySelector(".system-accordion-trigger");
        if (!panel || !trigger) return;
        if (trigger.getAttribute("aria-expanded") === "true") {
          panel.style.maxHeight = `${panel.scrollHeight}px`;
        }
      });
    });
  });
}

function resetModalToDefaultTab(modal) {
  const defaultTabButton = modal.querySelector(".tab-btn");
  if (defaultTabButton) activateTab(modal, defaultTabButton);

  const accordionGroups = [...modal.querySelectorAll("[data-accordion-group]")];
  accordionGroups.forEach((group) => resetAccordionGroup(group));
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modals.forEach((item) => item.hidden = true);
  overlay.hidden = false;
  modal.hidden = false;
  activeModal = modal;
  document.body.classList.add("no-scroll");
  lastFocusedElement = document.activeElement;

  resetModalToDefaultTab(modal);

  const initialFocusable = getFocusableElements(modal)[0];
  if (initialFocusable) initialFocusable.focus();
}

function closeModal() {
  if (!activeModal) return;

  activeModal.hidden = true;
  overlay.hidden = true;
  document.body.classList.remove("no-scroll");
  const toFocus = lastFocusedElement;
  activeModal = null;

  if (toFocus && typeof toFocus.focus === "function") {
    toFocus.focus();
  }
}

function openPes6InTab(tabId) {
  openModal("pes6-panel");

  if (!pes6Panel) return;

  activateTabById(pes6Panel, tabId);
}

function handlePes6HashRoute() {
  const hash = window.location.hash.toLowerCase();
  if (!T24_MAINTENANCE_HASH_ALIASES.has(hash)) return;

  openPes6InTab("pes6-tab-tablas-t24");
}

triggers.forEach((trigger) => {
  trigger.addEventListener("click", () => openModal(trigger.dataset.target));
  trigger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(trigger.dataset.target);
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) closeModal();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
  trapFocus(event);
});

if (pes6MaintenanceGoHistoryButton) {
  pes6MaintenanceGoHistoryButton.addEventListener("click", () => {
    openPes6InTab("pes6-tab-history");
  });
}

window.addEventListener("hashchange", handlePes6HashRoute);

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const hiddenTextArea = document.createElement("textarea");
  hiddenTextArea.value = text;
  hiddenTextArea.style.position = "fixed";
  hiddenTextArea.style.opacity = "0";
  document.body.appendChild(hiddenTextArea);
  hiddenTextArea.focus();
  hiddenTextArea.select();

  const success = document.execCommand("copy");
  document.body.removeChild(hiddenTextArea);
  return success;
}

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const targetId = button.dataset.copyTarget;
    const textarea = document.getElementById(targetId);
    if (!textarea) return;

    const originalText = button.textContent;

    try {
      const copied = await copyText(textarea.value);
      button.textContent = copied ? "✅ Copiado" : "⚠️ No se pudo copiar";
    } catch (error) {
      button.textContent = "⚠️ No se pudo copiar";
    }

    setTimeout(() => {
      button.textContent = originalText;
    }, 1800);
  });
});

window.addEventListener("scroll", () => {
  backToTopButton.classList.toggle("visible", window.scrollY > 360);
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function createPalmaresCard(item, winnersKey, winnerLabel, variant = "default") {
  const isCupVariant = variant === "cups";
  const isDivisionVariant = variant === "divisions";
  const isIndividualVariant = variant === "awards";
  const card = document.createElement("article");
  card.className = isCupVariant
    ? "copa-item"
    : isDivisionVariant
      ? "division-item"
      : isIndividualVariant
        ? "individual-item"
        : "palmares-card sl-card";

  const title = document.createElement("h4");
  title.className = "palmares-card-title";

  if (isDivisionVariant) {
    const divisionNames = ["PRIMERA DIVISIÓN", "SEGUNDA DIVISIÓN", "TERCERA DIVISIÓN", "CUARTA DIVISIÓN"];
    const match = item.nombre.match(/\d+/);
    const divisionIndex = match ? Number.parseInt(match[0], 10) - 1 : -1;
    title.textContent = divisionNames[divisionIndex] ?? item.nombre.toUpperCase();
  } else {
    title.textContent = item.nombre;
  }

  const trophy = document.createElement("img");
  trophy.className = "palmares-trophy";
  const isAwardCard = isIndividualVariant && Object.prototype.hasOwnProperty.call(AWARD_GLOVE_TROPHIES, item.key);
  const trophySource = isAwardCard ? resolveAwardTrophy(item.key, item.trofeo) : item.trofeo;
  const fallbackTrophy = isAwardCard ? AWARD_TROPHY_FALLBACKS[item.key] : "";

  trophy.src = withAssetBasePath(trophySource);
  trophy.alt = `Trofeo ${item.nombre}`;
  trophy.loading = "lazy";
  setImageFallback(trophy, fallbackTrophy);

  const winnersList = item[winnersKey].filter((winner) => winner && winner.trim() !== "");
  const safeWinners = winnersList.length ? winnersList : ["A confirmar"];

  const winners = document.createElement(isCupVariant || isDivisionVariant ? "p" : "ul");
  winners.className = isCupVariant || isDivisionVariant ? "palmares-winner-line" : "palmares-winners";

  if (isCupVariant || isDivisionVariant) {
    const winner = safeWinners[0];
    if (isCupVariant) {
      const winnerUpper = winner.trim().toUpperCase();
      const isLegacy = winnerUpper === "NO EXISTIA" || winnerUpper === "NO EXISTÍA";
      winners.textContent = isLegacy ? "Estado: NO EXISTÍA" : `Ganador: ${winner}`;
      winners.classList.add(isLegacy ? "is-muted" : "is-highlight");
    } else {
      winners.textContent = winner;
    }
  } else {
    safeWinners.forEach((winner) => {
      const winnerItem = document.createElement("li");
      winnerItem.textContent = `${winnerLabel}: ${winner}`;
      winners.appendChild(winnerItem);
    });
  }

  if (isDivisionVariant) {
    const content = document.createElement("div");
    content.className = "palmares-item-content";
    content.append(title, winners);
    card.append(content, trophy);
  } else if (isIndividualVariant) {
    const content = document.createElement("div");
    content.className = "palmares-item-content";
    content.append(title);

    if (item.subtitulo) {
      const subtitle = document.createElement("p");
      subtitle.className = "palmares-subtitle";
      subtitle.textContent = item.subtitulo;
      content.appendChild(subtitle);
    }

    content.appendChild(winners);
    card.append(trophy, content);
  } else {
    card.appendChild(title);

    if (item.subtitulo) {
      const subtitle = document.createElement("p");
      subtitle.className = "palmares-subtitle";
      subtitle.textContent = item.subtitulo;
      card.appendChild(subtitle);
    }

    card.append(trophy, winners);
  }

  return card;
}

function renderPalmares() {
  const container = document.getElementById("pes6-palmares-content");
  if (!container) return;

  const sections = [
    {
      key: "divisions",
      title: "Campeones por División",
      subtitle: "Últimos campeones (Temporada 23)",
      items: PES6_PALMARES.divisiones,
      winnersKey: "campeones",
      winnerLabel: "Último campeón"
    },
    {
      key: "cups",
      title: "Copas",
      subtitle: "Últimos campeones de copas (Temporada 22)",
      items: PES6_PALMARES.copas,
      winnersKey: "campeones",
      winnerLabel: "Ganador"
    },
    {
      key: "awards",
      title: "Premios individuales",
      items: PES6_PALMARES.individuales,
      winnersKey: "ganadores",
      winnerLabel: "Ganador"
    }
  ];

  container.replaceChildren();

  sections.forEach((section) => {
    const block = document.createElement("section");
    block.className = "block-container";

    const heading = document.createElement("h3");
    heading.textContent = section.title;
    block.appendChild(heading);

    if (section.subtitle) {
      const subtitle = document.createElement("p");
      subtitle.className = "palmares-subtitle";
      subtitle.textContent = section.subtitle;
      block.appendChild(subtitle);
    }

    const grid = document.createElement("div");
    grid.className = "palmares-grid";

    section.items.forEach((item) => {
      grid.appendChild(createPalmaresCard(item, section.winnersKey, section.winnerLabel, section.key));
    });

    block.appendChild(grid);
    container.appendChild(block);
  });
}


function isValidTitleWinner(value) {
  if (!value) return false;

  const normalized = value.trim();
  if (!normalized) return false;

  const invalidValues = ["POR DEFINIR", "NO EXISTIA", "NO SE DISPUTO", "NO SE DISPUTA"];
  return !invalidValues.includes(normalized.toUpperCase());
}

function buildPes6TitleMap(history) {
  const titleMap = {};

  history.forEach((seasonData) => {
    Object.entries(PES6_COUNTED_TITLES).forEach(([groupKey, allowedKeys]) => {
      const groupData = seasonData[groupKey] || {};
      const groupMeta = PES6_TITLE_META[groupKey];

      allowedKeys.forEach((key) => {
        const meta = groupMeta[key];
        if (!meta) {
          return;
        }

        const winner = groupData[key];

        if (!isValidTitleWinner(winner)) {
          return;
        }

        const player = winner.trim();
        if (!titleMap[player]) {
          titleMap[player] = {
            total: 0,
            counts: { primera: 0, copas: 0, individuales: 0 },
            titles: []
          };
        }

        const titleName = meta.title ?? meta.label ?? meta.type ?? "Título";
        const seasonLabel = seasonData.season;

        if (!titleName || !seasonLabel) {
          return;
        }

        titleMap[player].total += 1;
        titleMap[player].titles.push(`${titleName} (${seasonLabel})`);

        if (groupKey === "divisions") titleMap[player].counts.primera += 1;
        if (groupKey === "cups") titleMap[player].counts.copas += 1;
        if (groupKey === "awards") titleMap[player].counts.individuales += 1;
      });
    });
  });

  return titleMap;
}

function createRankingTitlesList(playerData) {
  const wrapper = document.createElement("div");
  wrapper.className = "pes6-ranking-titles";

  const heading = document.createElement("p");
  heading.className = "pes6-ranking-titles-heading";
  heading.textContent = "Últimos títulos:";

  const list = document.createElement("ul");
  list.className = "pes6-ranking-titles-list";

  const visibleTitles = playerData.titles.slice(-MAX_RANKING_TITLES_DETAIL).reverse();

  visibleTitles.forEach((title) => {
    const item = document.createElement("li");
    item.textContent = title;
    list.appendChild(item);
  });

  wrapper.append(heading, list);
  return wrapper;
}

function createPes6RankingItem(player, playerData, index, isOpen) {
  const row = document.createElement("article");
  row.className = "pes6-ranking-row sl-card";

  const header = document.createElement("div");
  header.className = "pes6-ranking-header rankingHeaderRow";

  const position = document.createElement("span");
  position.className = "pes6-ranking-position rankingPos";
  position.textContent = `#${index + 1}`;

  const name = document.createElement("span");
  name.className = "pes6-ranking-player rankingName";
  name.textContent = player;

  const total = document.createElement("span");
  total.className = "pes6-ranking-total";
  total.textContent = String(playerData.total);

  const totalLabel = document.createElement("span");
  totalLabel.className = "pes6-ranking-total-label";
  totalLabel.textContent = playerData.total === 1 ? "título" : "títulos";

  const stats = document.createElement("div");
  stats.className = "pes6-ranking-stats rankingMeta";
  stats.append(total, totalLabel);

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "pes6-ranking-toggle sl-pill";
  toggle.classList.add("rankingBtn");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-controls", `pes6-ranking-panel-${index}`);
  toggle.innerHTML = `<span>${isOpen ? "Ocultar" : "Ver detalle"}</span><span class="pes6-ranking-chevron" aria-hidden="true">⌄</span>`;

  header.append(position, name, stats, toggle);

  toggle.addEventListener("click", () => {
    openTitlesRankingId = openTitlesRankingId === player ? null : player;
    renderPes6Ranking();
  });

  if (index === 0) {
    row.classList.add("is-top");
  }

  if (isOpen) {
    row.classList.add("is-open");

    const panel = document.createElement("div");
    panel.className = "pes6-ranking-panel pes6-ranking-details rankingDetails";
    panel.id = `pes6-ranking-panel-${index}`;

    const breakdown = document.createElement("p");
    breakdown.className = "pes6-ranking-breakdown";
    breakdown.textContent = `Primera División: ${playerData.counts.primera} | Copas: ${playerData.counts.copas} | Individuales: ${playerData.counts.individuales}`;

    panel.append(breakdown, createRankingTitlesList(playerData));
    row.append(header, panel);
    return row;
  }

  row.append(header);
  return row;
}

function renderPes6Ranking() {
  const container = document.getElementById("pes6-ranking");
  if (!container) return;

  const titleMap = buildPes6TitleMap(PES6_HISTORY);
  const ranking = Object.entries(titleMap)
    .sort((a, b) => b[1].total - a[1].total || a[0].localeCompare(b[0], "es"));

  container.replaceChildren();

  if (!ranking.length) {
    const empty = document.createElement("p");
    empty.className = "pes6-ranking-empty";
    empty.textContent = "Sin datos";
    container.appendChild(empty);
    return;
  }

  const wrapper = document.createElement("section");
  wrapper.className = "pes6-ranking sl-card";

  const heading = document.createElement("h3");
  heading.textContent = "RANKING DE TÍTULOS";

  const subtitle = document.createElement("p");
  subtitle.className = "pes6-ranking-subtitle";
  subtitle.textContent = "Solo cuenta Primera División, Copas y Premios individuales.";

  const list = document.createElement("div");
  list.className = "pes6-ranking-list-wrap";

  const visibleRanking = showAllTitlesRanking ? ranking : ranking.slice(0, 5);

  if (!visibleRanking.some(([player]) => player === openTitlesRankingId)) {
    openTitlesRankingId = null;
  }

  visibleRanking.forEach(([player, data], index) => {
    list.appendChild(createPes6RankingItem(player, data, index, openTitlesRankingId === player));
  });

  const listToggle = document.createElement("button");
  listToggle.type = "button";
  listToggle.className = "pes6-ranking-toggle sl-pill";
  listToggle.textContent = showAllTitlesRanking ? "Ver top 5" : "Ver todos";
  listToggle.style.margin = "0.85rem auto 0";
  listToggle.style.display = "flex";

  listToggle.addEventListener("click", () => {
    showAllTitlesRanking = !showAllTitlesRanking;
    openTitlesRankingId = null;
    renderPes6Ranking();
  });

  wrapper.append(heading, subtitle, list, listToggle);
  container.appendChild(wrapper);
}

function createHistoryRow(itemMeta, value) {
  const row = document.createElement("div");
  row.className = "history-row sl-card";

  const left = document.createElement("div");
  left.className = "history-row-left";

  const trophy = document.createElement("img");
  trophy.className = "history-trophy";
  const isAwardHistory = Object.prototype.hasOwnProperty.call(AWARD_GLOVE_TROPHIES, itemMeta.key);
  const historyTrophySource = isAwardHistory ? resolveAwardTrophy(itemMeta.key, itemMeta.trophy) : itemMeta.trophy;
  const historyFallbackTrophy = isAwardHistory ? AWARD_TROPHY_FALLBACKS[itemMeta.key] : "";

  trophy.src = withAssetBasePath(historyTrophySource);
  trophy.alt = `Trofeo ${itemMeta.label}`;
  trophy.loading = "lazy";
  setImageFallback(trophy, historyFallbackTrophy);

  const label = document.createElement("span");
  label.className = "history-label";
  label.textContent = itemMeta.label;

  left.append(trophy, label);

  const winner = document.createElement("div");
  winner.className = "history-value";
  const safeValue = value && value.trim() !== "" ? value : "POR DEFINIR";
  const normalizedValue = safeValue.trim().toUpperCase();
  const isPending = normalizedValue === "POR DEFINIR";
  const isLegacy = normalizedValue === "NO EXISTIA";
  winner.textContent = safeValue;

  if (isPending) {
    winner.classList.add("is-pending");
    const badge = document.createElement("span");
    badge.className = "history-pending-badge";
    badge.textContent = "Pendiente";
    winner.appendChild(badge);
  }

  if (isLegacy) {
    row.classList.add("is-legacy");
    winner.classList.add("is-legacy");
  }

  row.append(left, winner);
  return row;
}

function createHistorySection(title, itemsMeta, values = {}) {
  const section = document.createElement("section");
  section.className = "history-section sl-card";

  const heading = document.createElement("h4");
  heading.textContent = title;
  section.appendChild(heading);

  itemsMeta.forEach((itemMeta) => {
    section.appendChild(createHistoryRow(itemMeta, values[itemMeta.key]));
  });

  return section;
}

function animateHistoryPanel(panel, expand) {
  const isExpanded = panel.dataset.expanded === "true";
  if (isExpanded === expand) return;

  panel.dataset.expanded = String(expand);

  if (expand) {
    panel.hidden = false;
    panel.style.maxHeight = "0px";

    requestAnimationFrame(() => {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    });

    const finishExpand = () => {
      if (panel.dataset.expanded === "true") {
        panel.style.maxHeight = "none";
      }
      panel.removeEventListener("transitionend", finishExpand);
    };

    panel.addEventListener("transitionend", finishExpand);
    return;
  }

  const currentHeight = panel.scrollHeight;
  panel.style.maxHeight = `${currentHeight}px`;

  requestAnimationFrame(() => {
    panel.style.maxHeight = "0px";
  });

  const finishCollapse = () => {
    if (panel.dataset.expanded === "false") {
      panel.hidden = true;
    }
    panel.removeEventListener("transitionend", finishCollapse);
  };

  panel.addEventListener("transitionend", finishCollapse);
}

function createHistoryAccordionItem(seasonData, index) {
  const item = document.createElement("article");
  item.className = "history-accordion-item sl-card";

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "history-accordion-trigger sl-pill";
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-controls", `pes6-history-panel-${index}`);
  trigger.innerHTML = `<span>${seasonData.season}</span><span class="history-chevron" aria-hidden="true">⌄</span>`;

  const panel = document.createElement("div");
  panel.className = "history-accordion-panel";
  panel.id = `pes6-history-panel-${index}`;
  panel.hidden = true;
  panel.dataset.expanded = "false";

  const seasonNumber = parseSeasonNumber(seasonData.season);
  const divisionsMeta = getDivisionMetaForSeason(seasonNumber);

  panel.append(
    createHistorySection("Campeones por División", divisionsMeta, seasonData.divisions),
    createHistorySection("Copas", PES6_HISTORY_META.cups, seasonData.cups),
    createHistorySection("Premios Individuales", PES6_HISTORY_META.awards, seasonData.awards)
  );

  trigger.addEventListener("click", () => {
    const isOpen = trigger.getAttribute("aria-expanded") === "true";
    const nextOpen = !isOpen;

    trigger.setAttribute("aria-expanded", String(nextOpen));
    item.classList.toggle("is-open", nextOpen);
    animateHistoryPanel(panel, nextOpen);
  });

  item.append(trigger, panel);
  return item;
}

function getPhaseLabel(phaseKey) {
  const phase = INTERDIVISIONAL_PHASES.find((item) => item.key === phaseKey);
  return phase ? phase.label : phaseKey;
}

function getInterdivisionalHistorySeasonsSource(historyBySeason, legacyHistorySeasons) {
  if (historyBySeason && typeof historyBySeason === "object" && !Array.isArray(historyBySeason)) {
    return Object.entries(historyBySeason).map(([seasonKey, seasonData = {}]) => {
      const phases = seasonData.phases && typeof seasonData.phases === "object" ? seasonData.phases : {
        octavos_playoffs: seasonData.fase1,
        cuartos_playoffs: seasonData.fase2,
        semifinal_playoffs: seasonData.fase3,
        final_playoffs: seasonData.fase4,
        final_copa_interdivisional: seasonData.fase5
      };

      return {
        season: seasonData.season || seasonKey,
        status: seasonData.status || "completed",
        champion: seasonData.champion || "",
        phases
      };
    });
  }

  return Array.isArray(legacyHistorySeasons) ? legacyHistorySeasons : [];
}

function cloneInterdivisionalData(data) {
  return JSON.parse(JSON.stringify(data));
}

function normalizeWinnerValue(value) {
  if (value == null || typeof value !== "string") return null;

  const normalizedWinner = value.trim().toLowerCase();
  return normalizedWinner === "home" || normalizedWinner === "away" ? normalizedWinner : null;
}

function normalizeMatchResult(result) {
  if (!result || typeof result !== "object") return null;

  if (result.home == null || result.away == null) return null;

  const home = Number(result.home);
  const away = Number(result.away);

  if (!Number.isFinite(home) || !Number.isFinite(away)) return null;

  const hasPensHome = result.pensHome != null && Number.isFinite(Number(result.pensHome));
  const hasPensAway = result.pensAway != null && Number.isFinite(Number(result.pensAway));
  const hasPens = home === away && hasPensHome && hasPensAway;

  return {
    home,
    away,
    pensHome: hasPens ? Number(result.pensHome) : null,
    pensAway: hasPens ? Number(result.pensAway) : null
  };
}

function normalizeMatchPens(match) {
  const pens = match?.pens ?? match?.penalties ?? null;
  if (!pens || typeof pens !== "object") return null;

  if (pens.home == null || pens.away == null) return null;

  const home = Number(pens.home);
  const away = Number(pens.away);

  if (!Number.isFinite(home) || !Number.isFinite(away)) return null;

  return { home, away };
}

function formatScore(match) {
  const r = match?.result;
  if (!r || typeof r.home !== "number" || typeof r.away !== "number") return "";
  const p = match?.pens ?? match?.penalties ?? null;
  const hasPens = p && typeof p.home === "number" && typeof p.away === "number";
  return `${r.home}-${r.away}${hasPens ? ` (Pen ${p.home}-${p.away})` : ""}`;
}

function hasMatchResult(match) {
  return !!match?.result
    && typeof match.result.home === "number"
    && typeof match.result.away === "number";
}

function hasMatchPens(match) {
  return !!(match?.pens ?? match?.penalties)
    && typeof (match.pens ?? match.penalties).home === "number"
    && typeof (match.pens ?? match.penalties).away === "number";
}

function isMatchPlayed(match, seasonStatus = "active") {
  if (!match || typeof match !== "object") return false;

  if (match.played === true || match.finalized === true) {
    return true;
  }

  if (typeof match.status === "string") {
    const normalizedStatus = match.status.trim().toLowerCase();
    if (["played", "jugado", "finalizado", "completed"].includes(normalizedStatus)) {
      return true;
    }
  }

  return !!normalizeMatchResult(match.result) || normalizeWinnerValue(match.winner) != null;
}

function normalizeMatchData(match, seasonStatus = "active") {
  const winner = normalizeWinnerValue(match.winner);
  const result = normalizeMatchResult(match.result);
  const pens = normalizeMatchPens(match);
  const played = isMatchPlayed(match, seasonStatus);

  if (!played) {
    return {
      ...match,
      played: false,
      winner: null,
      result: null,
      pens: null
    };
  }

  return {
    ...match,
    played: true,
    winner,
    result,
    pens
  };
}

function normalizeActiveOctavos(data) {
  if (!Array.isArray(data)) return [];

  return data.map((match, index) => ({
    label: match.label || `Octavos Play-offs ${index + 1}`,
    home: match.home,
    away: match.away,
    ...normalizeMatchData(match, "active")
  }));
}

function createPlaceholderSide(label) {
  return {
    player: label,
    club: "",
    division: "Primera"
  };
}

function normalizeDivisionName(value = "") {
  const normalized = String(value || "").trim().toLowerCase();

  if (["1ra", "1ra div", "primera", "primera div", "1ra division"].includes(normalized)) {
    return "Primera";
  }

  if (["2da", "2da div", "segunda", "segunda div", "2da division"].includes(normalized)) {
    return "Segunda";
  }

  if (["3ra", "3ra div", "tercera", "tercera div", "3ra division"].includes(normalized)) {
    return "Tercera";
  }

  if (["4ta", "4ta div", "cuarta", "cuarta div", "4ta division"].includes(normalized)) {
    return "Cuarta";
  }

  return value || "Primera";
}

function normalizeCuartosSide(side) {
  if (!side || typeof side !== "object") {
    return createPlaceholderSide("Por definir");
  }

  return {
    club: side.teamKey || side.club || side.name || "",
    player: side.user || side.player || side.name || "Por definir",
    division: normalizeDivisionName(side.division),
    shield: side.shield || ""
  };
}

function normalizeCuartosResult(result) {
  if (!result || typeof result !== "object") return null;

  if (result.home == null || result.away == null) return null;

  const home = Number(result.home);
  const away = Number(result.away);

  if (!Number.isFinite(home) || !Number.isFinite(away)) return null;

  return { home, away };
}

function getInterdivisionalResultPhaseKey(phaseKey) {
  if (phaseKey === "octavos_playoffs" || phaseKey === "octavos") return "octavos";
  if (phaseKey === "cuartos_playoffs" || phaseKey === "cuartos") return "cuartos";
  if (phaseKey === "semifinal_playoffs" || phaseKey === "semis") return "semis";
  if (phaseKey === "final_playoffs" || phaseKey === "finalpo") return "final_playoffs";
  if (phaseKey === "final_copa_interdivisional" || phaseKey === "final") return "final";
  return null;
}

function getInterdivisionalMatchResult(phaseKey, matchId) {
  const phaseResultKey = getInterdivisionalResultPhaseKey(phaseKey);
  if (!phaseResultKey) return null;

  const phaseResults = INTERDIVISIONAL_RESULTS_SOURCE?.[phaseResultKey];
  if (!phaseResults || typeof phaseResults !== "object") return null;

  const normalizedMatchId = String(matchId || "").trim();
  if (!normalizedMatchId) return null;

  const resultKey = normalizedMatchId.includes("-")
    ? normalizedMatchId
    : `${phaseResultKey === "final_playoffs" ? "finalpo" : phaseResultKey}-${normalizedMatchId}`;

  const sourceResult = phaseResults?.[resultKey];
  if (!sourceResult || typeof sourceResult !== "object") return null;

  return {
    winner: normalizeWinnerValue(sourceResult.winner),
    result: normalizeCuartosResult(sourceResult.score),
    pens: normalizeCuartosResult(sourceResult.pens)
  };
}

function normalizeCuartosMatches(matches) {
  if (!Array.isArray(matches)) return [];

  return matches.map((match, index) => ({
    id: match?.id || `cuartos-${index + 1}`,
    label: match?.label || `Cuartos Play-offs ${index + 1}`,
    home: normalizeCuartosSide(match?.home),
    away: normalizeCuartosSide(match?.away),
    winner: normalizeWinnerValue(match?.winner),
    result: normalizeCuartosResult(match?.score ?? match?.result),
    pens: normalizeCuartosResult(match?.pens)
  }));
}

function hasLoadedCuartosData(matches) {
  if (!Array.isArray(matches) || matches.length === 0) return false;

  return matches.some((match) => {
    const winner = normalizeWinnerValue(match?.winner);
    const result = normalizeCuartosResult(match?.score ?? match?.result);
    const homeUser = typeof match?.home?.user === "string" ? match.home.user.trim() : "";
    const awayUser = typeof match?.away?.user === "string" ? match.away.user.trim() : "";
    const homeTeam = typeof match?.home?.teamKey === "string" ? match.home.teamKey.trim() : "";
    const awayTeam = typeof match?.away?.teamKey === "string" ? match.away.teamKey.trim() : "";

    return !!winner || !!result || !!homeUser || !!awayUser || !!homeTeam || !!awayTeam;
  });
}

function formatSide(side, fallbackLabel = "") {
  if (!side) {
    return createPlaceholderSide(fallbackLabel || "Por definir");
  }

  if (typeof side === "string") {
    return createPlaceholderSide(side);
  }

  return {
    ...side,
    club: side.club || side.name || "",
    player: side.player || side.name || fallbackLabel || side.club || "Por definir",
    shield: side.shield || side.escudo || ""
  };
}

function getWinner(match, fallbackLabel) {
  const normalizedWinner = normalizeWinnerValue(match?.winner);

  if (normalizedWinner === "home") {
    return formatSide(match?.home, fallbackLabel);
  }

  if (normalizedWinner === "away") {
    return formatSide(match?.away, fallbackLabel);
  }

  return createPlaceholderSide(fallbackLabel);
}


function isWinnerReference(side) {
  return !!side && typeof side === "object" && typeof side.winnerOf === "string" && side.winnerOf.trim() !== "";
}

function resolvePhaseSide(sourceSide, resolvedWinnerSide, fallbackLabel) {
  if (isWinnerReference(sourceSide)) {
    const referenceLabel = typeof sourceSide.placeholder === "string" && sourceSide.placeholder.trim() !== ""
      ? sourceSide.placeholder.trim()
      : fallbackLabel;

    if (resolvedWinnerSide) {
      return formatSide(resolvedWinnerSide, referenceLabel);
    }

    return createPlaceholderSide(referenceLabel);
  }

  return formatSide(sourceSide || resolvedWinnerSide, fallbackLabel);
}

function buildPhaseMatches(sourceMatches, sourceWinners, phaseKey) {
  const next = [];
  const totalMatches = Math.ceil((sourceWinners?.length || 0) / 2);
  const phaseLabel = getPhaseLabel(phaseKey);
  const matches = Array.isArray(sourceMatches) ? sourceMatches : [];

  for (let index = 0; index < totalMatches; index += 1) {
    const sourceMatch = matches[index] || null;
    const matchId = sourceMatch?.id || `${index + 1}`;
    const sourceHome = sourceWinners[index * 2];
    const sourceAway = sourceWinners[index * 2 + 1];

    const sourceResult = getInterdivisionalMatchResult(phaseKey, matchId);
    const normalizedSourceMatch = normalizeMatchData(sourceResult || sourceMatch || {}, "active");

    next.push({
      ...normalizedSourceMatch,
      id: matchId,
      label: sourceMatch?.label || `${phaseLabel} ${index + 1}`,
      home: resolvePhaseSide(sourceMatch?.home, sourceHome, sourceHome?.player || `Ganador ${phaseLabel} ${index * 2 + 1}`),
      away: resolvePhaseSide(sourceMatch?.away, sourceAway, sourceAway?.player || `Ganador ${phaseLabel} ${index * 2 + 2}`)
    });
  }

  return next;
}

function buildInterdivisionalActiveSeason(source) {
  if (!source) return null;

  const octavos = Array.isArray(source.octavos_playoffs)
    ? source.octavos_playoffs
    : Array.isArray(source.octavos)
      ? source.octavos
      : null;

  if (!octavos) return null;

  const season = {
    season: source.season || `T${SITE_CUP_SEASON}`,
    status: "active",
    champion: null,
    phases: {
      octavos_playoffs: normalizeActiveOctavos(octavos).map((match, index) => {
        const matchId = match.id || `${index + 1}`;
        const sourceResult = getInterdivisionalMatchResult("octavos", matchId);
        const normalizedMatch = normalizeMatchData(sourceResult || match, "active");

        return {
          ...match,
          ...normalizedMatch,
          id: matchId
        };
      }),
      cuartos_playoffs: [],
      semifinal_playoffs: [],
      final_playoffs: [],
      final_copa_interdivisional: []
    },
    metadata: {
      cuartosLoaded: true
    }
  };

  const sourcePhases = source.phases || {};
  const sourceCuartos = Array.isArray(source.cuartos_playoffs)
    ? source.cuartos_playoffs
    : sourcePhases.cuartos_playoffs;
  const sourceSemis = Array.isArray(source.semifinal_playoffs) ? source.semifinal_playoffs : sourcePhases.semifinal_playoffs;
  const sourceFinalPlayoffs = Array.isArray(source.final_playoffs) ? source.final_playoffs : sourcePhases.final_playoffs;
  const sourceFinalCopa = Array.isArray(source.final_copa_interdivisional) ? source.final_copa_interdivisional : sourcePhases.final_copa_interdivisional;

  const winnersOctavos = season.phases.octavos_playoffs.map((match, index) => getWinner(match, `Ganador Octavos ${index + 1}`));
  season.phases.cuartos_playoffs = buildPhaseMatches(sourceCuartos, winnersOctavos, "cuartos_playoffs");

  const winnersCuartos = season.phases.cuartos_playoffs.map((match, index) => getWinner(match, `Ganador Cuartos ${index + 1}`));
  season.phases.semifinal_playoffs = buildPhaseMatches(sourceSemis, winnersCuartos, "semifinal_playoffs");

  const winnersSemis = season.phases.semifinal_playoffs.map((match, index) => getWinner(match, `Ganador Semi ${index + 1}`));
  season.phases.final_playoffs = buildPhaseMatches(sourceFinalPlayoffs, winnersSemis, "final_playoffs");

  const finalPlayoffsMatch = season.phases.final_playoffs[0] || null;
  const directQualified = {
    club: "Universitario",
    player: "H09",
    division: "2da Div",
    shield: "assets/escudos/universitario.png"
  };

  const finalCopaSourceMatch = Array.isArray(sourceFinalCopa) ? sourceFinalCopa[0] : null;
  const rival = finalPlayoffsMatch?.winner === "home"
    ? formatSide(finalPlayoffsMatch.home, "Ganador Final Play-offs")
    : finalPlayoffsMatch?.winner === "away"
      ? formatSide(finalPlayoffsMatch.away, "Ganador Final Play-offs")
      : createPlaceholderSide("Ganador Final Play-offs");

  const finalCopaResult = getInterdivisionalMatchResult("final", finalCopaSourceMatch?.id || "1");
  const normalizedFinalCopaMatch = normalizeMatchData(finalCopaResult || finalCopaSourceMatch || {}, "active");

  const finalCopaMatch = {
    ...normalizedFinalCopaMatch,
    id: finalCopaSourceMatch?.id || "1",
    label: finalCopaSourceMatch?.label || "Final Copa Interdivisional",
    home: resolvePhaseSide(finalCopaSourceMatch?.home, directQualified, directQualified.player),
    away: resolvePhaseSide(finalCopaSourceMatch?.away, rival, "Ganador Final Play-offs")
  };

  season.phases.final_copa_interdivisional = [finalCopaMatch];

  return season;
}

function buildInterdivisionalStateFromDataFiles() {
  const seasons = [];
  const activeSeason = buildInterdivisionalActiveSeason(INTERDIVISIONAL_ACTIVE_SOURCE);

  if (activeSeason) {
    seasons.push(activeSeason);
  }

  INTERDIVISIONAL_HISTORY_SOURCE.forEach((season) => {
    const normalizedSeason = {
      ...cloneInterdivisionalData(season),
      status: "completed"
    };
    seasons.push(normalizedSeason);
  });

  return normalizeInterdivisionalState({ seasons });
}

function normalizeInterdivisionalState(data) {
  const cloned = cloneInterdivisionalData(data);
  cloned.seasons = Array.isArray(cloned.seasons) ? cloned.seasons : [];

  cloned.seasons.forEach((season) => {
    season.status = season.status === "completed" ? "completed" : "active";
    season.phases = season.phases || {};

    INTERDIVISIONAL_PHASES.forEach((phase) => {
      if (!Array.isArray(season.phases[phase.key])) {
        season.phases[phase.key] = [];
      }

      season.phases[phase.key].forEach((match, index) => {
        const normalizedMatch = normalizeMatchData(match, season.status);
        normalizedMatch.label = normalizedMatch.label || `${phase.label} ${index + 1}`;
        season.phases[phase.key][index] = normalizedMatch;
      });
    });
  });

  return cloned;
}

function getCurrentInterdivisionalSeason() {
  if (!interdivisionalState || !Array.isArray(interdivisionalState.seasons)) return null;

  const active = interdivisionalState.seasons.find((season) => season.status === "active");
  return active || interdivisionalState.seasons[interdivisionalState.seasons.length - 1] || null;
}

function isPhaseComplete(matches = []) {
  return Array.isArray(matches) && matches.length > 0 && matches.every((match) => !!match.winner);
}

function ensureInterdivisionalProgression(season) {
  if (!season || !season.phases) return;

  const finalMatches = season.phases.final_copa_interdivisional || [];
  if (isPhaseComplete(finalMatches)) {
    season.status = "completed";
    const finalMatch = finalMatches[0];
    season.champion = finalMatch.winner === "away" ? finalMatch.away.player : finalMatch.home.player;
  }
}

function getVisiblePhaseKeysForSeason(season) {
  return INTERDIVISIONAL_PHASES
    .map((phase) => phase.key)
    .filter((phaseKey) => (season.phases[phaseKey] || []).length > 0);
}

function getFinalCopaInterdivisionalMatch(season) {
  const finalPlayoffsMatch = season?.phases?.final_playoffs?.[0] || null;
  const directQualified = {
    club: "Universitario",
    player: "H09",
    division: "2da Div",
    shield: "assets/escudos/universitario.png"
  };

  const rival = finalPlayoffsMatch?.winner === "home"
    ? formatSide(finalPlayoffsMatch.home, "Ganador Final Play-offs")
    : finalPlayoffsMatch?.winner === "away"
      ? formatSide(finalPlayoffsMatch.away, "Ganador Final Play-offs")
      : createPlaceholderSide("Ganador Final Play-offs");

  const sourceMatch = season?.phases?.final_copa_interdivisional?.[0] || null;
  const result = normalizeMatchData(sourceMatch || {}, "active");

  return {
    ...result,
    id: sourceMatch?.id || "1",
    label: sourceMatch?.label || "Final Copa Interdivisional",
    home: resolvePhaseSide(sourceMatch?.home, directQualified, directQualified.player),
    away: resolvePhaseSide(sourceMatch?.away, rival, "Ganador Final Play-offs")
  };
}

function createCupCrossingTeamNode(teamData, context = {}) {
  const { editable = false, side = "home", matchData = null } = context;
  const team = document.createElement(editable ? "button" : "div");
  team.className = "cup-crossing-team";
  if (editable) {
    team.type = "button";
    team.classList.add("is-selectable");
  }

  if (matchData) {
    const isPlayed = matchData.played === true;
    const winner = normalizeWinnerValue(matchData.winner);
    const isHomeWinner = winner === "home";
    const isAwayWinner = winner === "away";
    const isWinner = (side === "home" && isHomeWinner) || (side === "away" && isAwayWinner);

    if (isPlayed && winner) {
      team.classList.toggle("is-winner", isWinner);
      team.classList.toggle("is-loser", !isWinner);
      team.classList.toggle("cup-crossing--winner", isWinner);
    }
  }

  const logoPath = getCupCrossingTeamLogoPath(teamData);
  if (logoPath) {
    const shield = document.createElement("img");
    shield.className = "cup-crossing-shield";
    shield.src = logoPath;
    shield.alt = `Escudo de ${teamData.club}`;
    shield.loading = "lazy";
    shield.decoding = "async";
    shield.addEventListener("error", () => {
      shield.style.display = "none";
    });
    team.appendChild(shield);
  }

  const content = document.createElement("div");
  content.className = "cup-crossing-content";

  const player = document.createElement("p");
  player.className = "cup-crossing-player";
  player.textContent = teamData.player;

  const division = document.createElement("span");
  division.className = "cup-crossing-division";
  division.textContent = getCupCrossingDivisionLabel(teamData.division);

  content.append(player, division);
  team.appendChild(content);

  const hasResult = hasMatchResult(matchData);
  const hasPens =
    matchData?.pens
    && typeof matchData.pens.home === "number"
    && typeof matchData.pens.away === "number";

  if (matchData?.played && hasResult) {
    const scoreBox = document.createElement("div");
    scoreBox.className = "cup-crossing-score";
    scoreBox.style.display = "flex";
    scoreBox.style.flexDirection = "column";
    scoreBox.style.alignItems = "center";
    scoreBox.style.gap = "0.3rem";

    const winner = normalizeWinnerValue(matchData.winner);
    const isWinner = (side === "home" && winner === "home") || (side === "away" && winner === "away");
    scoreBox.classList.toggle("is-winner", isWinner);

    const goals = document.createElement("span");
    goals.className = "cup-crossing-score-main";
    goals.textContent = side === "home" ? String(matchData.result.home) : String(matchData.result.away);
    scoreBox.appendChild(goals);

    if (hasPens) {
      const penWrapper = document.createElement("div");
      penWrapper.className = "pen-wrapper";
      penWrapper.style.display = "flex";
      penWrapper.style.flexDirection = "column";
      penWrapper.style.alignItems = "center";
      penWrapper.style.gap = "0.12rem";
      penWrapper.style.width = "100%";

      const penLabel = document.createElement("span");
      penLabel.className = "pen-label";
      penLabel.textContent = "Pen";
      penLabel.style.fontSize = "0.62rem";
      penLabel.style.lineHeight = "1";
      penLabel.style.letterSpacing = "0.08em";
      penLabel.style.textTransform = "uppercase";
      penLabel.style.color = "rgba(240, 255, 255, 0.85)";

      const penScore = document.createElement("span");
      penScore.className = "pen-score";
      penScore.textContent = side === "home" ? String(matchData.pens.home) : String(matchData.pens.away);
      penScore.style.minWidth = "1.75rem";
      penScore.style.height = "1.35rem";
      penScore.style.padding = "0 0.45rem";
      penScore.style.borderRadius = "0.45rem";
      penScore.style.display = "inline-flex";
      penScore.style.alignItems = "center";
      penScore.style.justifyContent = "center";
      penScore.style.fontSize = "0.82rem";
      penScore.style.fontWeight = "700";
      penScore.style.color = "#f3ffff";
      penScore.style.border = "1px solid rgba(168, 239, 255, 0.55)";
      penScore.style.background = "linear-gradient(180deg, rgba(20, 48, 66, 0.92), rgba(10, 27, 39, 0.9))";
      penScore.style.boxShadow = "0 0 8px rgba(102, 220, 255, 0.3), inset 0 0 8px rgba(130, 225, 255, 0.15)";

      penWrapper.append(penLabel, penScore);
      scoreBox.appendChild(penWrapper);
    }

    team.appendChild(scoreBox);
  }

  return team;
}

function createCupCrossingCard(matchData, options = {}) {
  const { editable = false, season = null } = options;
  const card = document.createElement("article");
  card.className = "cup-match-card";

  const label = document.createElement("p");
  label.className = "cup-match-label";
  label.textContent = matchData.label;

  const body = document.createElement("div");
  body.className = "cup-crossing-body";

  const versus = document.createElement("p");
  versus.className = "cup-match-versus";
  versus.textContent = "VS";

  body.append(
    createCupCrossingTeamNode(matchData.home, { editable, side: "home", matchData }),
    versus,
    createCupCrossingTeamNode(matchData.away, { editable, side: "away", matchData })
  );

  card.append(label, body);

  return card;
}

function createCupPhaseSection(phaseKey, matches, options = {}) {
  const {
    skipDivisionFilter = false,
    emptyMessage = ""
  } = options;
  const seasonNumber = parseSeasonNumber(options.season?.season);
  const filteredMatches = (matches || []).filter((match) => {
    if (skipDivisionFilter) return true;

    const homeDivision = match?.home?.division;
    const awayDivision = match?.away?.division;

    if (!homeDivision || !awayDivision) return true;

    return isDivisionEnabledForSeason(homeDivision, seasonNumber)
      && isDivisionEnabledForSeason(awayDivision, seasonNumber);
  });

  if (!filteredMatches.length) {
    if (!emptyMessage) return null;

    const emptySection = document.createElement("section");
    emptySection.className = "cup-round-section";

    const title = document.createElement("h4");
    title.className = "cup-round-title";
    title.textContent = getPhaseLabel(phaseKey);

    const message = document.createElement("p");
    message.className = "cup-round-empty-note";
    message.textContent = emptyMessage;

    emptySection.append(title, message);
    return emptySection;
  }

  const section = document.createElement("section");
  section.className = "cup-round-section";

  const title = document.createElement("h4");
  title.className = "cup-round-title";
  title.textContent = getPhaseLabel(phaseKey);

  const grid = document.createElement("div");
  grid.className = "cup-round-grid";

  filteredMatches.forEach((match) => {
    grid.appendChild(createCupCrossingCard(match, options));
  });

  section.append(title, grid);
  return section;
}

function updateCupCardHeader() {
  const currentSeason = getCurrentInterdivisionalSeason();
  if (!currentSeason) return;

  const activePhase = getCurrentCupHeaderPhase();

  const displaySeason = currentSeason.season;

  if (cupCurrentSeason) cupCurrentSeason.textContent = `Temporada ${displaySeason}`;
  if (cupCurrentPhase) {
    cupCurrentPhase.textContent = `Fase: ${getPhaseLabel(activePhase)}`;
  }

  if (cupStatus) {
    cupStatus.textContent = "COPA";
  }

  updateCupRemaining();
}

function setCupActivePhase(phaseId) {
  cupActivePhase = phaseId;
  renderCupActiveTab();
  updateCupCardHeader();
}

function createCupPhaseTabs() {
  const tabs = document.createElement("div");
  tabs.className = "cup-card-tabs";
  tabs.setAttribute("role", "tablist");
  tabs.setAttribute("aria-label", "Fases Copa Interdivisional");

  CUP_PHASE_BUTTONS.forEach((phase) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "cup-tab-btn sl-tab neon-box";
    button.textContent = phase.label;
    button.dataset.phase = phase.id;
    button.classList.toggle("is-active", cupActivePhase === phase.id);
    button.setAttribute("aria-selected", String(cupActivePhase === phase.id));
    button.addEventListener("click", () => {
      setCupActivePhase(button.dataset.phase || phase.id);
    });

    tabs.appendChild(button);
  });

  return tabs;
}

function renderCupPhaseContent(container, season, phaseKey, options = {}) {
  if (!container || !season) return;

  const {
    emptyMessage = "No hay cruces cargados para esta fase",
    cuartosEmptyMessage = "Cuartos aún no cargados"
  } = options;

  if (phaseKey === "final_copa_interdivisional") {
    const section = createCupPhaseSection(phaseKey, [getFinalCopaInterdivisionalMatch(season)], {
      editable: false,
      season,
      skipDivisionFilter: true,
      emptyMessage: "FASE 5: todavía no hay datos cargados para esta fase."
    });

    if (section) {
      container.appendChild(section);
    }
    return;
  }

  const matches = season.phases[phaseKey] || [];
  const isCuartosPhase = phaseKey === "cuartos_playoffs";
  const phaseEmptyMessage = isCuartosPhase && season?.metadata?.cuartosLoaded === false
    ? cuartosEmptyMessage
    : emptyMessage;

  const section = createCupPhaseSection(phaseKey, matches, {
    editable: false,
    season,
    emptyMessage: phaseEmptyMessage
  });

  if (section) {
    container.appendChild(section);
  }
}

function renderCupActiveTab() {
  if (!cupCrossingsList || !interdivisionalState) return;

  cupCrossingsList.replaceChildren();
  const currentSeason = getCurrentInterdivisionalSeason();
  if (!currentSeason) return;

  ensureInterdivisionalProgression(currentSeason);
  const selectedPhase = CUP_PHASE_BUTTONS.find((phase) => phase.id === cupActivePhase)?.key;
  const visiblePhases = getVisiblePhaseKeysForSeason(currentSeason);
  const phaseToRender = selectedPhase || visiblePhases[visiblePhases.length - 1] || INTERDIVISIONAL_PHASES[0].key;

  cupCrossingsList.appendChild(createCupPhaseTabs());
  renderCupPhaseContent(cupCrossingsList, currentSeason, phaseToRender);
}

function getValidCupHistorySeasons() {
  if (!interdivisionalState || !Array.isArray(interdivisionalState.seasons)) return [];

  return [...interdivisionalState.seasons]
    .filter((season) => parseSeasonNumber(season?.season) >= CUP_HISTORY_MIN_SEASON_NUMBER)
    .sort((a, b) => parseSeasonNumber(a.season) - parseSeasonNumber(b.season));
}

function getCupHistoryDefaultSeason(seasons) {
  if (!Array.isArray(seasons) || !seasons.length) return null;

  const explicitT23 = seasons.find((season) => String(season.season).toUpperCase() === "T23");
  if (explicitT23) return explicitT23;

  return seasons[0];
}

function renderCupHistoryTab() {
  if (!cupHistorySeasonSelect || !cupHistoryList || !interdivisionalState) return;

  const seasons = getValidCupHistorySeasons();
  const defaultSeason = getCupHistoryDefaultSeason(seasons);

  cupHistorySeasonSelect.replaceChildren();

  seasons.forEach((season) => {
    const option = document.createElement("option");
    option.value = season.season;
    option.textContent = season.status === "completed" && season.champion
      ? `${season.season} — Campeón: ${season.champion}`
      : season.season;
    cupHistorySeasonSelect.appendChild(option);
  });

  cupHistoryList.replaceChildren();
  if (!defaultSeason) return;

  const selectedSeasonByKey = seasons.find((season) => season.season === cupHistorySeasonSelect.value);
  const selectedSeason = selectedSeasonByKey || defaultSeason;

  if (!selectedSeasonByKey) {
    cupHistorySeasonSelect.value = defaultSeason.season;
  }

  ensureInterdivisionalProgression(selectedSeason);

  const isSeasonChange = cupHistorySeasonKey !== selectedSeason.season;
  cupHistorySeasonKey = selectedSeason.season;
  if (isSeasonChange) {
    cupHistorySelectedPhase = CUP_HISTORY_PHASES[0].key;
  }

  const selectedPhase = getCupHistorySelectedPhaseKey();
  cupHistoryList.appendChild(createCupHistoryPhaseTabs(selectedSeason, selectedPhase));
  renderCupPhaseContent(cupHistoryList, selectedSeason, selectedPhase, {
    emptyMessage: "Sin datos para esta fase"
  });
}

function getCupHistorySelectedPhaseKey() {
  if (cupHistorySelectedPhase && CUP_HISTORY_PHASES.some((phase) => phase.key === cupHistorySelectedPhase)) {
    return cupHistorySelectedPhase;
  }

  cupHistorySelectedPhase = CUP_HISTORY_PHASES[0].key;
  return cupHistorySelectedPhase;
}

function createCupHistoryPhaseTabs(season, selectedPhase) {
  const tabs = document.createElement("div");
  tabs.className = "cup-card-tabs cup-history-phase-tabs";
  tabs.setAttribute("role", "tablist");
  tabs.setAttribute("aria-label", `Fases historial ${season.season}`);

  CUP_HISTORY_PHASES.forEach((phase) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "cup-tab-btn sl-tab neon-box";
    button.textContent = phase.label;
    button.dataset.phase = phase.key;
    button.classList.toggle("is-active", selectedPhase === phase.key);
    button.setAttribute("aria-selected", String(selectedPhase === phase.key));
    button.addEventListener("click", () => {
      cupHistorySelectedPhase = phase.key;
      renderCupHistoryTab();
    });

    tabs.appendChild(button);
  });

  return tabs;
}

function setCupTab(tab) {
  cupPanelTab = tab;

  const isActiveTab = tab === "active";
  if (cupTabActive && cupTabHistory && cupTabPanelActive && cupTabPanelHistory) {
    cupTabActive.classList.toggle("is-active", isActiveTab);
    cupTabHistory.classList.toggle("is-active", !isActiveTab);
    cupTabActive.setAttribute("aria-selected", String(isActiveTab));
    cupTabHistory.setAttribute("aria-selected", String(!isActiveTab));
    cupTabPanelActive.hidden = !isActiveTab;
    cupTabPanelHistory.hidden = isActiveTab;
    cupTabPanelActive.classList.toggle("is-active", isActiveTab);
    cupTabPanelHistory.classList.toggle("is-active", !isActiveTab);
  }
}

function renderInterdivisionalCard() {
  renderCupActiveTab();
  renderCupHistoryTab();
  updateCupCardHeader();
}

function setCupCrossingsExpanded(expanded) {
  if (!cupInterdivisionalCard || !cupCrossingsPanel || !cupToggleLabel) return;

  cupInterdivisionalCard.setAttribute("aria-expanded", String(expanded));
  cupToggleLabel.textContent = expanded ? "Ocultar" : "Ver cruces";

  if (expanded) {
    cupCrossingsPanel.hidden = false;
    cupCrossingsPanel.classList.add("is-open");
    return;
  }

  cupCrossingsPanel.classList.remove("is-open");

  const onTransitionEnd = () => {
    if (!cupCrossingsPanel.classList.contains("is-open")) {
      cupCrossingsPanel.hidden = true;
    }
    cupCrossingsPanel.removeEventListener("transitionend", onTransitionEnd);
  };

  cupCrossingsPanel.addEventListener("transitionend", onTransitionEnd);
}

function setupCupCrossingsAccordion() {
  if (!cupInterdivisionalCard || !cupCrossingsPanel) return;

  const toggleCrossings = () => {
    const isExpanded = cupInterdivisionalCard.getAttribute("aria-expanded") === "true";
    setCupCrossingsExpanded(!isExpanded);
  };

  cupInterdivisionalCard.addEventListener("click", toggleCrossings);
  cupInterdivisionalCard.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCrossings();
    }
  });

  if (cupTabActive && cupTabHistory) {
    cupTabActive.addEventListener("click", () => setCupTab("active"));
    cupTabHistory.addEventListener("click", () => setCupTab("history"));
  }

  if (cupHistorySeasonSelect) {
    cupHistorySeasonSelect.addEventListener("change", () => {
      renderCupHistoryTab();
    });
  }

  setCupTab("active");
}

async function initializeInterdivisionalState() {
  try {
    interdivisionalState = buildInterdivisionalStateFromDataFiles();
  } catch (error) {
    console.error("Error al inicializar Interdivisional", error);
    interdivisionalState = { seasons: [] };
  }

  interdivisionalState.seasons.forEach((season) => ensureInterdivisionalProgression(season));
  renderInterdivisionalCard();
}

function cloneCopaPremierData(data) {
  return JSON.parse(JSON.stringify(data));
}

function normalizeCopaPremierSide(side, fallbackLabel = "Por definir") {
  if (!side || typeof side !== "object") {
    return { pos: "-", glove: "", user: fallbackLabel, division: "Primera" };
  }

  return {
    pos: side.pos ?? "-",
    glove: side.glove || "",
    user: side.user || fallbackLabel,
    division: side.division || "Primera"
  };
}

function normalizeCopaPremierMatch(match, labelFallback) {
  return {
    ...match,
    label: match?.label || labelFallback,
    home: normalizeCopaPremierSide(match?.home, "Ganador por definir"),
    away: normalizeCopaPremierSide(match?.away, "Ganador por definir"),
    ...normalizeMatchData(match || {}, "active")
  };
}

function getCopaPremierWinner(match) {
  const winner = normalizeWinnerValue(match?.winner);
  if (winner === "home") return match?.home || null;
  if (winner === "away") return match?.away || null;
  return null;
}

function buildCopaPremierFromActiveSource(source) {
  const base = {
    season: source?.season || "T24",
    status: source?.status || "active",
    champion: source?.champion || null,
    currentPhase: source?.currentPhase || "cuartos",
    phases: {
      cuartos: [],
      semifinales: [],
      final: []
    }
  };

  const cuartos = Array.isArray(source?.phases?.cuartos) ? source.phases.cuartos : [];
  base.phases.cuartos = cuartos.map((m, i) => normalizeCopaPremierMatch(m, `Cuartos ${i + 1}`));

  const sfSource = Array.isArray(source?.phases?.semifinales) ? source.phases.semifinales : [];
  const qfWinners = base.phases.cuartos.map(getCopaPremierWinner);

  base.phases.semifinales = [
    normalizeCopaPremierMatch({
      ...sfSource[0],
      label: sfSource[0]?.label || "Semifinal 1 (Ganador QF1 vs Ganador QF4)",
      home: normalizeCopaPremierSide(sfSource[0]?.home || qfWinners[0], "Ganador QF1"),
      away: normalizeCopaPremierSide(sfSource[0]?.away || qfWinners[3], "Ganador QF4")
    }, "Semifinal 1"),
    normalizeCopaPremierMatch({
      ...sfSource[1],
      label: sfSource[1]?.label || "Semifinal 2 (Ganador QF2 vs Ganador QF3)",
      home: normalizeCopaPremierSide(sfSource[1]?.home || qfWinners[1], "Ganador QF2"),
      away: normalizeCopaPremierSide(sfSource[1]?.away || qfWinners[2], "Ganador QF3")
    }, "Semifinal 2")
  ];

  const finalSource = Array.isArray(source?.phases?.final) ? source.phases.final : [];
  const sfWinners = base.phases.semifinales.map(getCopaPremierWinner);
  base.phases.final = [
    normalizeCopaPremierMatch({
      ...finalSource[0],
      label: finalSource[0]?.label || "Final (Ganador SF1 vs Ganador SF2)",
      home: normalizeCopaPremierSide(finalSource[0]?.home || sfWinners[0], "Ganador SF1"),
      away: normalizeCopaPremierSide(finalSource[0]?.away || sfWinners[1], "Ganador SF2"),
      banSystem: finalSource[0]?.banSystem || "Sistema de baneos (informativo)"
    }, "Final")
  ];

  return base;
}

function buildCopaPremierStateFromDataFiles() {
  const activeSeason = buildCopaPremierFromActiveSource(COPA_PREMIER_ACTIVE_SOURCE || {});
  const historySeasons = COPA_PREMIER_HISTORY_SOURCE.map((season) => cloneCopaPremierData(season));

  return {
    seasons: [...historySeasons, activeSeason].map((season) => ({
      ...season,
      phases: {
        cuartos: Array.isArray(season?.phases?.cuartos) ? season.phases.cuartos.map((m, i) => normalizeCopaPremierMatch(m, `Cuartos ${i + 1}`)) : [],
        semifinales: Array.isArray(season?.phases?.semifinales) ? season.phases.semifinales.map((m, i) => normalizeCopaPremierMatch(m, `Semifinal ${i + 1}`)) : [],
        final: Array.isArray(season?.phases?.final) ? season.phases.final.map((m, i) => normalizeCopaPremierMatch(m, `Final ${i + 1}`)) : []
      }
    }))
  };
}

function getCurrentCopaPremierSeason() {
  if (!copaPremierState?.seasons?.length) return null;
  return copaPremierState.seasons.find((season) => season.status === "active")
    || copaPremierState.seasons[copaPremierState.seasons.length - 1];
}

function getCopaPremierGlovePath(glove = "") {
  if (!glove) return "";
  return getKofGloveImagePath(glove.startsWith("assets/") ? glove : `assets/${glove}`);
}

function createCopaPremierTeamNode(teamData, side, matchData) {
  const team = document.createElement("div");
  team.className = "cup-crossing-team";

  const winner = normalizeWinnerValue(matchData?.winner);
  if (matchData?.played && winner) {
    const isWinner = (side === "home" && winner === "home") || (side === "away" && winner === "away");
    team.classList.toggle("is-winner", isWinner);
    team.classList.toggle("is-loser", !isWinner);
    team.classList.toggle("cup-crossing--winner", isWinner);
  }

  const shield = document.createElement("img");
  shield.className = "cup-crossing-shield";
  shield.src = getCopaPremierGlovePath(teamData.glove);
  shield.alt = `Guante ${teamData.user}`;
  shield.loading = "lazy";
  shield.decoding = "async";
  shield.addEventListener("error", () => { shield.style.display = "none"; });
  team.appendChild(shield);

  const content = document.createElement("div");
  content.className = "cup-crossing-content";

  const player = document.createElement("p");
  player.className = "cup-crossing-player";
  player.textContent = `(${teamData.pos}) ${teamData.user}`;

  const division = document.createElement("span");
  division.className = "cup-crossing-division";
  division.textContent = teamData.division;

  content.append(player, division);
  team.appendChild(content);

  if (matchData?.played && hasMatchResult(matchData)) {
    const score = document.createElement("div");
    score.className = "cup-crossing-score";
    score.textContent = side === "home" ? String(matchData.result.home) : String(matchData.result.away);
    const isWinner = (side === "home" && winner === "home") || (side === "away" && winner === "away");
    score.classList.toggle("is-winner", isWinner);

    if (hasMatchPens(matchData)) {
      const pen = document.createElement("span");
      pen.className = "mini-badge";
      const pens = side === "home" ? matchData.pens.home : matchData.pens.away;
      pen.textContent = `Pen ${pens}`;
      score.appendChild(document.createElement("br"));
      score.appendChild(pen);
    }

    team.appendChild(score);
  }

  return team;
}

function createCopaPremierCard(matchData) {
  const card = document.createElement("article");
  card.className = "cup-crossing-item sl-card";

  const label = document.createElement("p");
  label.className = "cup-crossing-label";
  label.textContent = matchData.label;

  const body = document.createElement("div");
  body.className = "cup-crossing-body";

  const versus = document.createElement("p");
  versus.className = "cup-match-versus";
  versus.textContent = "VS";

  body.append(
    createCopaPremierTeamNode(matchData.home, "home", matchData),
    versus,
    createCopaPremierTeamNode(matchData.away, "away", matchData)
  );

  card.append(label, body);

  if (matchData?.banSystem) {
    const note = document.createElement("p");
    note.className = "cup-round-empty-note";
    note.textContent = matchData.banSystem;
    card.appendChild(note);
  }

  return card;
}

function createCopaPremierSection(phaseKey, matches) {
  if (!Array.isArray(matches) || matches.length === 0) return null;

  const section = document.createElement("section");
  section.className = "cup-round-section";

  const title = document.createElement("h4");
  title.className = "cup-round-title";
  title.textContent = COPA_PREMIER_PHASES.find((p) => p.key === phaseKey)?.label || phaseKey;

  const grid = document.createElement("div");
  grid.className = "cup-round-grid";
  matches.forEach((match) => grid.appendChild(createCopaPremierCard(match)));

  section.append(title, grid);
  return section;
}

function renderCopaPremierActiveTab() {
  if (!cupPremierList || !copaPremierState) return;
  cupPremierList.replaceChildren();

  const season = getCurrentCopaPremierSeason();
  if (!season) return;

  const tabs = document.createElement("div");
  tabs.className = "cup-card-tabs";
  tabs.setAttribute("role", "tablist");
  tabs.setAttribute("aria-label", "Fases Copa Premier");

  COPA_PREMIER_PHASES.forEach((phase) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "cup-tab-btn sl-tab neon-box";
    button.classList.toggle("is-active", cupPremierActivePhase === phase.key);
    button.setAttribute("aria-selected", String(cupPremierActivePhase === phase.key));
    button.textContent = phase.label.split(" (")[0];
    button.addEventListener("click", () => {
      cupPremierActivePhase = phase.key;
      renderCopaPremierCard();
    });
    tabs.appendChild(button);
  });

  cupPremierList.appendChild(tabs);
  const section = createCopaPremierSection(cupPremierActivePhase, season.phases[cupPremierActivePhase]);
  if (section) cupPremierList.appendChild(section);
}

function renderCopaPremierHistoryTab() {
  if (!cupPremierHistorySeasonSelect || !cupPremierHistoryList || !copaPremierState) return;

  const seasons = [...copaPremierState.seasons].sort((a, b) => b.season.localeCompare(a.season, undefined, { numeric: true }));
  cupPremierHistorySeasonSelect.replaceChildren();

  seasons.forEach((season) => {
    const option = document.createElement("option");
    option.value = season.season;
    option.textContent = season.status === "completed" && season.champion
      ? `${season.season} — Campeón: ${season.champion}`
      : season.season;
    cupPremierHistorySeasonSelect.appendChild(option);
  });

  if (!cupPremierHistorySeasonSelect.value && seasons[0]) {
    cupPremierHistorySeasonSelect.value = seasons[0].season;
  }

  const selectedSeason = seasons.find((season) => season.season === cupPremierHistorySeasonSelect.value) || seasons[0];
  cupPremierHistoryList.replaceChildren();
  if (!selectedSeason) return;

  COPA_PREMIER_PHASES.forEach((phase) => {
    const section = createCopaPremierSection(phase.key, selectedSeason.phases[phase.key]);
    if (section) cupPremierHistoryList.appendChild(section);
  });
}

function setCopaPremierTab(tab) {
  cupPremierPanelTab = tab;
  const isActiveTab = tab === "active";

  if (cupPremierTabActive && cupPremierTabHistory && cupPremierTabPanelActive && cupPremierTabPanelHistory) {
    cupPremierTabActive.classList.toggle("is-active", isActiveTab);
    cupPremierTabHistory.classList.toggle("is-active", !isActiveTab);
    cupPremierTabActive.setAttribute("aria-selected", String(isActiveTab));
    cupPremierTabHistory.setAttribute("aria-selected", String(!isActiveTab));
    cupPremierTabPanelActive.hidden = !isActiveTab;
    cupPremierTabPanelHistory.hidden = isActiveTab;
    cupPremierTabPanelActive.classList.toggle("is-active", isActiveTab);
    cupPremierTabPanelHistory.classList.toggle("is-active", !isActiveTab);
  }
}

function updateCopaPremierHeader() {
  const season = getCurrentCopaPremierSeason();
  if (!season) return;

  const isActiveSeason = season.status === "active";

  if (cupPremierCurrentSeason) cupPremierCurrentSeason.textContent = `Temporada ${season.season}`;
  if (cupPremierCurrentPhase) {
    const phaseLabel = COPA_PREMIER_PHASES.find((p) => p.key === cupPremierActivePhase)?.label || "Cuartos";
    cupPremierCurrentPhase.textContent = `Fase: ${phaseLabel.split(" (")[0].replace("🔥 ", "").replace("🥊 ", "").replace("👑 ", "")}`;
  }

  if (cupPremierStatus) {
    cupPremierStatus.textContent = isActiveSeason ? "ACTIVA" : "INACTIVA";
    cupPremierStatus.classList.toggle("season-badge-active", isActiveSeason);
    cupPremierStatus.classList.toggle("season-badge-wait", !isActiveSeason);
    cupPremierStatus.classList.toggle("neon-box", isActiveSeason);
    cupPremierStatus.classList.toggle("neon-border", !isActiveSeason);
  }

  if (cupPremierSeasonCard) {
    cupPremierSeasonCard.classList.toggle("inactive-card", !isActiveSeason);
    cupPremierSeasonCard.classList.toggle("neon-box", isActiveSeason);
  }
}

function renderCopaPremierCard() {
  renderCopaPremierActiveTab();
  renderCopaPremierHistoryTab();
  updateCopaPremierHeader();
}

function setCupPremierExpanded(expanded) {
  if (!cupPremierCard || !cupPremierPanel || !cupPremierToggleLabel) return;

  cupPremierCard.setAttribute("aria-expanded", String(expanded));
  cupPremierToggleLabel.textContent = expanded ? "Ocultar" : "Ver cruces";

  if (expanded) {
    cupPremierPanel.hidden = false;
    cupPremierPanel.classList.add("is-open");
    return;
  }

  cupPremierPanel.classList.remove("is-open");
  const onTransitionEnd = () => {
    if (!cupPremierPanel.classList.contains("is-open")) cupPremierPanel.hidden = true;
    cupPremierPanel.removeEventListener("transitionend", onTransitionEnd);
  };
  cupPremierPanel.addEventListener("transitionend", onTransitionEnd);
}

function setupCopaPremierAccordion() {
  if (!cupPremierCard || !cupPremierPanel) return;

  const toggle = () => {
    const isExpanded = cupPremierCard.getAttribute("aria-expanded") === "true";
    setCupPremierExpanded(!isExpanded);
  };

  cupPremierCard.addEventListener("click", toggle);
  cupPremierCard.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  });

  if (cupPremierTabActive && cupPremierTabHistory) {
    cupPremierTabActive.addEventListener("click", () => setCopaPremierTab("active"));
    cupPremierTabHistory.addEventListener("click", () => setCopaPremierTab("history"));
  }

  if (cupPremierHistorySeasonSelect) {
    cupPremierHistorySeasonSelect.addEventListener("change", renderCopaPremierHistoryTab);
  }

  setCopaPremierTab("active");
}

async function initializeCopaPremierState() {
  try {
    copaPremierState = buildCopaPremierStateFromDataFiles();
  } catch (error) {
    console.error("Error al inicializar Copa Premier", error);
    copaPremierState = { seasons: [] };
  }

  renderCopaPremierCard();
}

function initPes6RotatingBg() {
  const card = document.getElementById("pes6-season-card");
  if (!card) return;

  const a = card.querySelector(".rot-bg-a");
  const b = card.querySelector(".rot-bg-b");
  if (!a || !b) return;

  const urls = [
    "./assets/pes6-bg-1.png",
    "./assets/pes6-bg-2.png",
    "./assets/pes6-bg-3.png"
  ];

  let idx = 0;
  let showingA = true;

  a.style.backgroundImage = `url("${urls[idx]}")`;
  a.style.opacity = "0.55";

  setInterval(() => {
    idx = (idx + 1) % urls.length;
    const nextUrl = urls[idx];

    const show = showingA ? b : a;
    const hide = showingA ? a : b;

    show.style.backgroundImage = `url("${nextUrl}")`;
    show.style.opacity = "0.55";
    hide.style.opacity = "0";

    showingA = !showingA;
  }, 6000);
}

function renderPes6History() {
  const container = document.getElementById("pes6-history");
  if (!container) return;

  container.replaceChildren();

  PES6_HISTORY.forEach((seasonData, index) => {
    container.appendChild(createHistoryAccordionItem(seasonData, index));
  });
}

async function initializeApp() {
  setupTabs();
  setupAccordionGroups();
  renderPalmares();
  renderPes6Ranking();
  setupCupCrossingsAccordion();
  setupCopaPremierAccordion();
  await initializeInterdivisionalState();
  await initializeCopaPremierState();
  await loadPes6Leaders();
  await renderKofTop3();
  renderBountyWeek();
  applyKofLeagueContent();
  applyWhatsAppLinks();
  updateSeasonStatus();
  updateMainSeasonCountdowns();
  updateCupRemaining();
  updateSlotsStatus();
  updateDonationGoal();
  initPes6RotatingBg();
  handlePes6HashRoute();
  setInterval(updateSeasonStatus, 60000);
  setInterval(updateMainSeasonCountdowns, 60000);
}

document.addEventListener("DOMContentLoaded", iniciarContador);

initializeApp();
