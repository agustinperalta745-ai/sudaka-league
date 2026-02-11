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
    awards: { balonOro: "NO SE DISPUTA", puskas: "POR DEFINIR" }
  }
];

// === CONFIGURACIÓN DE CUPOS (EDITAR SOLO ESTO) ===
const PES6_CUPOS_LIBRES = 8; // 4ta división
const KOF_CUPOS_LIBRES = 7;  // King of Fighters 2002

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
      nombre: "Balón de Oro",
      trofeo: "assets/trofeo_balon_oro.png",
      subtitulo: "Ganador (últimas 3 temporadas)",
      ganadores: ["Pelufo"]
    },
    {
      nombre: "Premio Puskás",
      trofeo: "assets/trofeo_puskas.png",
      subtitulo: "Ganador (Temporada 22)",
      ganadores: ["Naxul90"]
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

const PES6_HISTORY_META = {
  divisions: [
    { key: "div1", label: "División 1", trophy: "assets/trofeo_div1.png" },
    { key: "div2", label: "División 2", trophy: "assets/trofeo_div2.png" },
    { key: "div3", label: "División 3", trophy: "assets/trofeo_div3.png" },
    { key: "div4", label: "División 4", trophy: "assets/trofeo_div4.png" }
  ],
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
const INTERDIVISIONAL_HISTORY_SOURCE = Array.isArray(window.INTERDIVISIONAL_HISTORY_SEASONS)
  ? window.INTERDIVISIONAL_HISTORY_SEASONS
  : [];

const INTERDIVISIONAL_PHASES = [
  { key: "octavos_playoffs", label: "Octavos Play-offs" },
  { key: "cuartos_playoffs", label: "Cuartos de final Play-offs" },
  { key: "semifinal_playoffs", label: "Semifinal Play-offs" },
  { key: "final_playoffs", label: "Final Play-offs" },
  { key: "final_copa_interdivisional", label: "Final Copa Interdivisional" }
];

const CUP_CROSSING_DIVISION_SHORT = {
  Primera: "1ra Div",
  Segunda: "2da Div",
  Tercera: "3ra Div",
  Cuarta: "4ta Div"
};

const ASSETS_BASE_PATH = location.pathname.includes("/sudaka-league/") ? "/sudaka-league" : "";

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

function toAssetPath(assetPath = "") {
  if (/^https?:\/\//i.test(assetPath)) return assetPath;

  const normalizedAssetPath = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${ASSETS_BASE_PATH}${normalizedAssetPath}`;
}

function getCupCrossingTeamLogoPath(teamData) {
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
const closeButtons = [...document.querySelectorAll(".close-btn")];
const copyButtons = [...document.querySelectorAll(".copy-btn")];
const backToTopButton = document.getElementById("back-to-top");
const pes6Status = document.getElementById("pes6Status");
const pes6Remaining = document.getElementById("pes6-remaining");
const cupRemaining = document.getElementById("cup-remaining");
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
const sfStatus = document.getElementById("sfStatus");
const sfSeasonName = document.getElementById("sfSeasonName");
const sfSeasonNote = document.getElementById("sfSeasonNote");
const pes6SlotsValue = document.getElementById("pes6-slots");
const pes6SlotsBadge = document.getElementById("pes6-slots-badge");
const sfSlotsValue = document.getElementById("sf-slots");
const sfSlotsBadge = document.getElementById("sf-slots-badge");
const donationProgressText = document.getElementById("donation-progress-text");
const donationProgressBar = document.getElementById("donation-progress-bar");
const donationGoalTrack = document.querySelector(".donation-goal-track");

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
let interdivisionalState = null;
let cupPanelTab = "active";

// Asignación centralizada de links editables.

const PES6_FINAL_TARGET = new Date(2026, 1, 22, 23, 59, 0, 0);
const CUP_INTERDIVISIONAL_FINAL_TARGET = new Date(2026, 1, 13, 23, 59, 0, 0);

function updateCountdown(targetDate, el, options = {}) {
  if (!el) return;

  const now = new Date();
  const ms = targetDate.getTime() - now.getTime();
  const formatDays = options.formatDays ?? ((value) => `Finaliza en: ${value} días`);
  const formatHours = options.formatHours ?? ((value) => `Finaliza en: ${value} horas`);

  if (ms <= 0) {
    el.textContent = formatDays(0);
    return;
  }

  if (ms < 24 * 60 * 60 * 1000 && options.showHoursOnLastDay) {
    const hours = Math.max(1, Math.ceil(ms / (60 * 60 * 1000)));
    el.textContent = formatHours(hours);
    return;
  }

  const days = Math.max(1, Math.ceil(ms / (24 * 60 * 60 * 1000)));
  el.textContent = formatDays(days);
}

function updatePes6Remaining() {
  updateCountdown(PES6_FINAL_TARGET, pes6Remaining, { showHoursOnLastDay: true });
}

function updateCupRemaining() {
  updateCountdown(CUP_INTERDIVISIONAL_FINAL_TARGET, cupRemaining, {
    showHoursOnLastDay: true,
    formatDays: (value) => `${value} días restantes`,
    formatHours: (value) => `${value} horas restantes`
  });
}

function updateSeasonStatus() {
  if (!pes6Status || !pes6SeasonName || !sfStatus || !sfSeasonName || !sfSeasonNote || !pes6Remaining) {
    return;
  }

  pes6SeasonName.textContent = PES6_SEASON_NAME;
  sfSeasonName.textContent = KOF_LEAGUE.temporada.nombre;
  sfStatus.textContent = KOF_LEAGUE.temporada.estado;
  sfSeasonNote.textContent = KOF_LEAGUE.temporada.nota;

  const seasonEnded = PES6_FINAL_TARGET.getTime() - Date.now() <= 0;

  pes6Status.textContent = seasonEnded ? "FINALIZADA" : "ACTIVA";
  pes6Status.classList.toggle("season-badge-active", !seasonEnded);
  pes6Status.classList.toggle("season-badge-ended", seasonEnded);

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

function activateTab(modal, tabButton) {
  const tabButtons = [...modal.querySelectorAll(".tab-btn")];
  const tabPanels = [...modal.querySelectorAll(".tab-panel")];
  const targetPanelId = tabButton.dataset.tab;

  tabButtons.forEach((button) => {
    const isActive = button === tabButton;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  tabPanels.forEach((panel) => {
    const isActive = panel.id === targetPanelId;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });
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

function resetModalToDefaultTab(modal) {
  const defaultTabButton = modal.querySelector(".tab-btn");
  if (defaultTabButton) activateTab(modal, defaultTabButton);
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

function createPalmaresCard(item, winnersKey, winnerLabel) {
  const card = document.createElement("article");
  card.className = "palmares-card";

  const title = document.createElement("h4");
  title.textContent = item.nombre;

  const trophy = document.createElement("img");
  trophy.className = "palmares-trophy";
  trophy.src = item.trofeo;
  trophy.alt = `Trofeo ${item.nombre}`;
  trophy.loading = "lazy";

  const winners = document.createElement("ul");
  winners.className = "palmares-winners";

  const winnersList = item[winnersKey].filter((winner) => winner && winner.trim() !== "");
  const safeWinners = winnersList.length ? winnersList : ["A confirmar"];

  safeWinners.forEach((winner) => {
    const winnerItem = document.createElement("li");
    winnerItem.textContent = `${winnerLabel}: ${winner}`;
    winners.appendChild(winnerItem);
  });

  card.appendChild(title);

  if (item.subtitulo) {
    const subtitle = document.createElement("p");
    subtitle.className = "palmares-subtitle";
    subtitle.textContent = item.subtitulo;
    card.appendChild(subtitle);
  }

  card.append(trophy, winners);
  return card;
}

function renderPalmares() {
  const container = document.getElementById("pes6-palmares-content");
  if (!container) return;

  const sections = [
    {
      title: "Campeones por División",
      subtitle: "Últimos campeones (Temporada 23)",
      items: PES6_PALMARES.divisiones,
      winnersKey: "campeones",
      winnerLabel: "Último campeón"
    },
    {
      title: "Copas",
      subtitle: "Últimos campeones de copas (Temporada 22)",
      items: PES6_PALMARES.copas,
      winnersKey: "campeones",
      winnerLabel: "Último campeón"
    },
    {
      title: "Premios individuales",
      items: PES6_PALMARES.individuales,
      winnersKey: "ganadores",
      winnerLabel: "Ganador"
    }
  ];

  container.replaceChildren();

  sections.forEach((section) => {
    const block = document.createElement("section");
    block.className = "palmares-block";

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
      grid.appendChild(createPalmaresCard(item, section.winnersKey, section.winnerLabel));
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

function getSeasonOrder(seasonLabel = "") {
  const match = seasonLabel.match(/(\d+)/);
  return match ? Number(match[1]) : 0;
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
            items: []
          };
        }

        titleMap[player].total += 1;

        if (groupKey === "divisions") titleMap[player].counts.primera += 1;
        if (groupKey === "cups") titleMap[player].counts.copas += 1;
        if (groupKey === "awards") titleMap[player].counts.individuales += 1;

        titleMap[player].items.push({
          season: seasonData.season,
          type: meta.type,
          title: meta.title,
          order: getSeasonOrder(seasonData.season)
        });
      });
    });
  });

  Object.values(titleMap).forEach((playerData) => {
    playerData.items.sort((a, b) => b.order - a.order || a.title.localeCompare(b.title, "es"));
  });

  return titleMap;
}

function animateRankingPanel(panel, expand) {
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

function createPes6RankingItem(player, playerData, index) {
  const row = document.createElement("article");
  row.className = "pes6-ranking-row";

  const header = document.createElement("div");
  header.className = "pes6-ranking-header";

  const position = document.createElement("span");
  position.className = "pes6-ranking-position";
  position.textContent = `#${index + 1}`;

  const name = document.createElement("span");
  name.className = "pes6-ranking-player";
  name.textContent = player;

  const total = document.createElement("span");
  total.className = "pes6-ranking-total";
  total.textContent = String(playerData.total);

  const totalLabel = document.createElement("span");
  totalLabel.className = "pes6-ranking-total-label";
  totalLabel.textContent = playerData.total === 1 ? "título" : "títulos";

  const stats = document.createElement("div");
  stats.className = "pes6-ranking-stats";
  stats.append(total, totalLabel);

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "pes6-ranking-toggle";
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", `pes6-ranking-panel-${index}`);
  toggle.innerHTML = '<span>Ver detalle</span><span class="pes6-ranking-chevron" aria-hidden="true">⌄</span>';

  header.append(position, name, stats, toggle);

  const panel = document.createElement("div");
  panel.className = "pes6-ranking-panel";
  panel.id = `pes6-ranking-panel-${index}`;
  panel.hidden = true;
  panel.dataset.expanded = "false";

  const breakdown = document.createElement("p");
  breakdown.className = "pes6-ranking-breakdown";
  breakdown.textContent = `Primera División: ${playerData.counts.primera} | Copas: ${playerData.counts.copas} | Individuales: ${playerData.counts.individuales}`;

  const titles = playerData.items.map((item) => `${item.season} ${item.title}`);
  const titlesLine = document.createElement("p");
  titlesLine.className = "pes6-ranking-titles";
  titlesLine.textContent = `Títulos: ${titles.join(" | ")}`;

  panel.append(breakdown, titlesLine);

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    const nextOpen = !isOpen;

    toggle.setAttribute("aria-expanded", String(nextOpen));
    row.classList.toggle("is-open", nextOpen);
    animateRankingPanel(panel, nextOpen);
  });

  row.append(header, panel);
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
  wrapper.className = "pes6-ranking";

  const heading = document.createElement("h3");
  heading.textContent = "RANKING DE TÍTULOS";

  const subtitle = document.createElement("p");
  subtitle.className = "pes6-ranking-subtitle";
  subtitle.textContent = "Solo cuenta Primera División, Copas y Premios individuales.";

  const list = document.createElement("div");
  list.className = "pes6-ranking-list-wrap";

  const visibleRanking = showAllTitlesRanking ? ranking : ranking.slice(0, 5);

  visibleRanking.forEach(([player, data], index) => {
    list.appendChild(createPes6RankingItem(player, data, index));
  });

  const listToggle = document.createElement("button");
  listToggle.type = "button";
  listToggle.className = "pes6-ranking-toggle";
  listToggle.textContent = showAllTitlesRanking ? "Ver top 5" : "Ver todos";
  listToggle.style.margin = "0.85rem auto 0";
  listToggle.style.display = "flex";

  listToggle.addEventListener("click", () => {
    showAllTitlesRanking = !showAllTitlesRanking;
    renderPes6Ranking();
  });

  wrapper.append(heading, subtitle, list, listToggle);
  container.appendChild(wrapper);
}

function createHistoryRow(itemMeta, value) {
  const row = document.createElement("div");
  row.className = "history-row";

  const left = document.createElement("div");
  left.className = "history-row-left";

  const trophy = document.createElement("img");
  trophy.className = "history-trophy";
  trophy.src = itemMeta.trophy;
  trophy.alt = `Trofeo ${itemMeta.label}`;
  trophy.loading = "lazy";

  const label = document.createElement("span");
  label.className = "history-label";
  label.textContent = itemMeta.label;

  left.append(trophy, label);

  const winner = document.createElement("div");
  winner.className = "history-value";
  const safeValue = value && value.trim() !== "" ? value : "POR DEFINIR";
  const isPending = safeValue.toUpperCase() === "POR DEFINIR";
  winner.textContent = safeValue;

  if (isPending) {
    winner.classList.add("is-pending");
    const badge = document.createElement("span");
    badge.className = "history-pending-badge";
    badge.textContent = "Pendiente";
    winner.appendChild(badge);
  }

  row.append(left, winner);
  return row;
}

function createHistorySection(title, itemsMeta, values = {}) {
  const section = document.createElement("section");
  section.className = "history-section";

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
  item.className = "history-accordion-item";

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "history-accordion-trigger";
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-controls", `pes6-history-panel-${index}`);
  trigger.innerHTML = `<span>${seasonData.season}</span><span class="history-chevron" aria-hidden="true">⌄</span>`;

  const panel = document.createElement("div");
  panel.className = "history-accordion-panel";
  panel.id = `pes6-history-panel-${index}`;
  panel.hidden = true;
  panel.dataset.expanded = "false";

  panel.append(
    createHistorySection("Campeones por División", PES6_HISTORY_META.divisions, seasonData.divisions),
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
  const played = isMatchPlayed(match, seasonStatus);

  if (!played) {
    return {
      ...match,
      played: false,
      winner: null,
      result: null
    };
  }

  return {
    ...match,
    played: true,
    winner,
    result
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

function createMatchesFromPreviousWinners(matches, phaseLabel, phaseWinners = []) {
  const winners = matches
    .map((match) => (match.winner === "away" ? match.away : match.winner === "home" ? match.home : null))
    .filter(Boolean);

  const next = [];
  for (let index = 0; index < winners.length; index += 2) {
    const home = winners[index];
    const away = winners[index + 1];
    if (!home || !away) continue;

    next.push({
      label: `${phaseLabel} ${next.length + 1}`,
      home,
      away,
      winner: normalizeWinnerValue(phaseWinners[next.length]),
      result: null
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
    season: source.season || "T24",
    status: "active",
    champion: null,
    phases: {
      octavos_playoffs: normalizeActiveOctavos(octavos),
      cuartos_playoffs: [],
      semifinal_playoffs: [],
      final_playoffs: [],
      final_copa_interdivisional: []
    }
  };

  const winners = source.winners || {};
  season.phases.cuartos_playoffs = createMatchesFromPreviousWinners(
    season.phases.octavos_playoffs,
    getPhaseLabel("cuartos_playoffs"),
    winners.cuartos_playoffs
  );
  season.phases.semifinal_playoffs = createMatchesFromPreviousWinners(
    season.phases.cuartos_playoffs,
    getPhaseLabel("semifinal_playoffs"),
    winners.semifinal_playoffs
  );
  season.phases.final_playoffs = createMatchesFromPreviousWinners(
    season.phases.semifinal_playoffs,
    getPhaseLabel("final_playoffs"),
    winners.final_playoffs
  );
  season.phases.final_copa_interdivisional = createMatchesFromPreviousWinners(
    season.phases.final_playoffs,
    getPhaseLabel("final_copa_interdivisional"),
    winners.final_copa_interdivisional
  );

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

function createNextPhaseMatchesFromWinners(matches, phaseLabel) {
  const winners = matches
    .map((match) => (match.winner === "away" ? match.away : match.winner === "home" ? match.home : null))
    .filter(Boolean);
  const next = [];

  for (let index = 0; index < winners.length; index += 2) {
    const home = winners[index];
    const away = winners[index + 1];
    if (!home || !away) continue;

    next.push({
      label: `${phaseLabel} ${next.length + 1}`,
      home,
      away,
      winner: null,
      result: null
    });
  }

  return next;
}

function ensureInterdivisionalProgression(season) {
  if (!season || !season.phases) return;

  for (let index = 0; index < INTERDIVISIONAL_PHASES.length - 1; index += 1) {
    const currentKey = INTERDIVISIONAL_PHASES[index].key;
    const nextKey = INTERDIVISIONAL_PHASES[index + 1].key;
    const currentMatches = season.phases[currentKey] || [];

    if (!isPhaseComplete(currentMatches)) break;

    const nextMatches = season.phases[nextKey] || [];
    if (nextMatches.length === 0) {
      season.phases[nextKey] = createNextPhaseMatchesFromWinners(currentMatches, getPhaseLabel(nextKey));
    }
  }

  const finalMatches = season.phases.final_copa_interdivisional || [];
  if (isPhaseComplete(finalMatches)) {
    season.status = "completed";
    const finalMatch = finalMatches[0];
    season.champion = finalMatch.winner === "away" ? finalMatch.away.player : finalMatch.home.player;
  }
}

function getVisiblePhaseKeysForSeason(season) {
  const visible = [];

  for (let index = 0; index < INTERDIVISIONAL_PHASES.length; index += 1) {
    const phaseKey = INTERDIVISIONAL_PHASES[index].key;
    const matches = season.phases[phaseKey] || [];

    if (matches.length === 0) break;

    visible.push(phaseKey);

    if (!isPhaseComplete(matches)) break;
  }

  return visible;
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

  if (matchData?.played && matchData?.result) {
    const scoreBox = document.createElement("div");
    scoreBox.className = "cup-crossing-score";

    const winner = normalizeWinnerValue(matchData.winner);
    const isWinner = (side === "home" && winner === "home") || (side === "away" && winner === "away");
    scoreBox.classList.toggle("is-winner", isWinner);

    const goals = document.createElement("span");
    goals.className = "cup-crossing-score-main";
    goals.textContent = String(side === "home" ? matchData.result.home : matchData.result.away);
    scoreBox.appendChild(goals);

    const pensValue = side === "home" ? matchData.result.pensHome : matchData.result.pensAway;
    if (pensValue != null) {
      const pens = document.createElement("span");
      pens.className = "cup-crossing-score-pens";
      pens.textContent = `(${pensValue}) PEN`;
      scoreBox.appendChild(pens);
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
  const section = document.createElement("section");
  section.className = "cup-round-section";

  const title = document.createElement("h4");
  title.className = "cup-round-title";
  title.textContent = getPhaseLabel(phaseKey);

  const grid = document.createElement("div");
  grid.className = "cup-round-grid";

  matches.forEach((match) => {
    grid.appendChild(createCupCrossingCard(match, options));
  });

  section.append(title, grid);
  return section;
}

function updateCupCardHeader() {
  const currentSeason = getCurrentInterdivisionalSeason();
  if (!currentSeason) return;

  const visiblePhases = getVisiblePhaseKeysForSeason(currentSeason);
  const activePhase = visiblePhases[visiblePhases.length - 1] || INTERDIVISIONAL_PHASES[0].key;

  const displaySeason = currentSeason.season === "T24" ? "T23" : currentSeason.season;

  if (cupCurrentSeason) cupCurrentSeason.textContent = `Temporada ${displaySeason}`;
  if (cupCurrentPhase) cupCurrentPhase.textContent = `Fase: ${getPhaseLabel(activePhase)}`;

  if (cupStatus) {
    const isCompleted = currentSeason.status === "completed";
    cupStatus.textContent = isCompleted ? "FINALIZADA" : "ACTIVA";
    cupStatus.classList.toggle("season-badge-active", !isCompleted);
    cupStatus.classList.toggle("season-badge-ended", isCompleted);
  }
}

function renderCupActiveTab() {
  if (!cupCrossingsList || !interdivisionalState) return;

  cupCrossingsList.replaceChildren();
  const currentSeason = getCurrentInterdivisionalSeason();
  if (!currentSeason) return;

  ensureInterdivisionalProgression(currentSeason);
  const visiblePhases = getVisiblePhaseKeysForSeason(currentSeason);

  visiblePhases.forEach((phaseKey) => {
    const matches = currentSeason.phases[phaseKey] || [];
    cupCrossingsList.appendChild(createCupPhaseSection(phaseKey, matches, {
      editable: false,
      season: currentSeason
    }));
  });
}

function renderCupHistoryTab() {
  if (!cupHistorySeasonSelect || !cupHistoryList || !interdivisionalState) return;

  const seasons = [...interdivisionalState.seasons].sort((a, b) => b.season.localeCompare(a.season, undefined, { numeric: true }));
  cupHistorySeasonSelect.replaceChildren();

  seasons.forEach((season) => {
    const option = document.createElement("option");
    option.value = season.season;
    option.textContent = season.status === "completed" && season.champion
      ? `${season.season} — Campeón: ${season.champion}`
      : season.season;
    cupHistorySeasonSelect.appendChild(option);
  });

  if (!cupHistorySeasonSelect.value && seasons[0]) {
    cupHistorySeasonSelect.value = seasons[0].season;
  }

  const selectedSeason = seasons.find((season) => season.season === cupHistorySeasonSelect.value) || seasons[0];
  cupHistoryList.replaceChildren();
  if (!selectedSeason) return;

  INTERDIVISIONAL_PHASES.forEach((phase) => {
    const matches = selectedSeason.phases[phase.key] || [];
    if (matches.length === 0) return;
    cupHistoryList.appendChild(createCupPhaseSection(phase.key, matches, { editable: false }));
  });
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
    cupHistorySeasonSelect.addEventListener("change", renderCupHistoryTab);
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
  renderPalmares();
  renderPes6Ranking();
  renderPes6History();
  setupCupCrossingsAccordion();
  await initializeInterdivisionalState();
  applyKofLeagueContent();
  applyWhatsAppLinks();
  updateSeasonStatus();
  updatePes6Remaining();
  updateCupRemaining();
  updateSlotsStatus();
  updateDonationGoal();
  setInterval(updateSeasonStatus, 60000);
  setInterval(updatePes6Remaining, 60000);
  setInterval(updateCupRemaining, 60000);
}

initializeApp();
