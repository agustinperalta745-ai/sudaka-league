// === CONFIGURACIÓN DE CUPOS (EDITAR SOLO ESTO) ===
const PES6_CUPOS_LIBRES = 8; // 4ta división
const SF_CUPOS_LIBRES = 3;   // Street Fighter II

const WHATSAPP_COMUNIDAD = "https://chat.whatsapp.com/DvRyA2bxAC67x0ulPQYvCa?mode=gi_t";
const PES6_SEASON_NAME = "Temporada 23";
const PES6_SEASON_END = "2026-02-07T23:59:00-03:00";
const SF_SEASON_NAME = "Temporada 1";
const SF_SEASON_STATUS = "EN ESPERA";
const SF_SEASON_NOTE = "En espera hasta completar cupos.";

const PES6_PALMARES = {
  divisiones: [
    {
      nombre: "División 1",
      trofeo: "assets/trofeo_div1.png",
      campeones: ["A confirmar"]
    },
    {
      nombre: "División 2",
      trofeo: "assets/trofeo_div2.png",
      campeones: ["A confirmar"]
    },
    {
      nombre: "División 3",
      trofeo: "assets/trofeo_div3.png",
      campeones: ["A confirmar"]
    },
    {
      nombre: "División 4",
      trofeo: "assets/trofeo_div4.png",
      campeones: ["A confirmar"]
    }
  ],
  copas: [
    {
      nombre: "Copa Interdivisional",
      trofeo: "assets/trofeo_interdiv.png",
      campeones: ["A confirmar"]
    },
    {
      nombre: "Superfinal",
      trofeo: "assets/trofeo_superfinal.png",
      campeones: ["A confirmar"]
    },
    {
      nombre: "Interliga",
      trofeo: "assets/trofeo_interliga.png",
      campeones: ["A confirmar"]
    }
  ],
  individuales: [
    {
      nombre: "Balón de Oro",
      trofeo: "assets/trofeo_balon_oro.png",
      ganadores: ["A confirmar"]
    },
    {
      nombre: "Premio Puskás",
      trofeo: "assets/trofeo_puskas.png",
      ganadores: ["A confirmar"]
    }
  ]
};

const overlay = document.getElementById("modal-overlay");
const modals = [...document.querySelectorAll(".league-modal")];
const triggers = [...document.querySelectorAll(".modal-trigger")];
const closeButtons = [...document.querySelectorAll(".close-btn")];
const copyButtons = [...document.querySelectorAll(".copy-btn")];
const backToTopButton = document.getElementById("back-to-top");
const pes6Status = document.getElementById("pes6Status");
const pes6Countdown = document.getElementById("pes6Countdown");
const pes6SeasonName = document.getElementById("pes6SeasonName");
const sfStatus = document.getElementById("sfStatus");
const sfSeasonName = document.getElementById("sfSeasonName");
const sfSeasonNote = document.getElementById("sfSeasonNote");
const pes6SlotsValue = document.getElementById("pes6-slots");
const pes6SlotsBadge = document.getElementById("pes6-slots-badge");
const sfSlotsValue = document.getElementById("sf-slots");
const sfSlotsBadge = document.getElementById("sf-slots-badge");


let activeModal = null;
let lastFocusedElement = null;

// Asignación centralizada de links editables.

function setPes6EndedState() {
  pes6Status.textContent = "FINALIZADA";
  pes6Status.classList.remove("season-badge-active");
  pes6Status.classList.add("season-badge-ended");
  pes6Countdown.textContent = "Temporada finalizada";
}

function getCountdownText() {
  const msRemaining = new Date(PES6_SEASON_END).getTime() - Date.now();

  if (msRemaining <= 0) {
    return null;
  }

  const totalMinutes = Math.floor(msRemaining / (1000 * 60));
  const totalHours = Math.floor(msRemaining / (1000 * 60 * 60));
  const totalDays = Math.floor(msRemaining / (1000 * 60 * 60 * 24));

  if (msRemaining >= 1000 * 60 * 60 * 48) {
    return `${totalDays} días`;
  }

  if (msRemaining >= 1000 * 60 * 60 * 2) {
    return `${totalHours} horas`;
  }

  return `${Math.max(totalMinutes, 0)} min`;
}

function updateSeasonStatus() {
  if (!pes6Status || !pes6Countdown || !pes6SeasonName || !sfStatus || !sfSeasonName || !sfSeasonNote) {
    return;
  }

  pes6SeasonName.textContent = PES6_SEASON_NAME;
  sfSeasonName.textContent = SF_SEASON_NAME;
  sfStatus.textContent = SF_SEASON_STATUS;
  sfSeasonNote.textContent = SF_SEASON_NOTE;

  const countdownText = getCountdownText();

  if (!countdownText) {
    setPes6EndedState();
    return;
  }

  pes6Status.textContent = "ACTIVA";
  pes6Status.classList.add("season-badge-active");
  pes6Status.classList.remove("season-badge-ended");
  pes6Countdown.textContent = countdownText;
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
      slots: SF_CUPOS_LIBRES,
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

function applyWhatsAppLinks() {
  const links = {
    "cta-comunidad": WHATSAPP_COMUNIDAD,
    "wa-pes6-modal": WHATSAPP_COMUNIDAD,
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

  item[winnersKey].forEach((winner) => {
    const winnerItem = document.createElement("li");
    winnerItem.textContent = `${winnerLabel}: ${winner}`;
    winners.appendChild(winnerItem);
  });

  card.append(title, trophy, winners);
  return card;
}

function renderPalmares() {
  const container = document.getElementById("pes6-palmares-content");
  if (!container) return;

  const sections = [
    {
      title: "Últimos campeones por División (Temporada 22)",
      items: PES6_PALMARES.divisiones,
      winnersKey: "campeones",
      winnerLabel: "Último campeón"
    },
    {
      title: "Últimos campeones de Copas (Temporada 22)",
      items: PES6_PALMARES.copas,
      winnersKey: "campeones",
      winnerLabel: "Último campeón"
    },
    {
      title: "Últimos ganadores de Premios (Temporada 22)",
      items: PES6_PALMARES.individuales,
      winnersKey: "ganadores",
      winnerLabel: "Último ganador"
    }
  ];

  container.replaceChildren();

  sections.forEach((section) => {
    const block = document.createElement("section");
    block.className = "palmares-block";

    const heading = document.createElement("h3");
    heading.textContent = section.title;

    const grid = document.createElement("div");
    grid.className = "palmares-grid";

    section.items.forEach((item) => {
      grid.appendChild(createPalmaresCard(item, section.winnersKey, section.winnerLabel));
    });

    block.append(heading, grid);
    container.appendChild(block);
  });
}

setupTabs();
renderPalmares();
applyWhatsAppLinks();
updateSeasonStatus();
updateSlotsStatus();
setInterval(updateSeasonStatus, 30000);
