(function attachKofGlovesUtils(globalScope) {
  const SAFE_FALLBACK_SLUG = "blanco";
  const SAFE_FALLBACK_GLOW = "#7fb3ff";

  const COLOR_ALIASES = {
    black: "negro",
    blanc: "blanco",
    white: "blanco",
    red: "rojo",
    yellow: "amarillo",
    blue: "azul",
    purple: "violeta",
    violet: "violeta",
    orange: "naranja",
    skyblue: "celeste",
    lightblue: "celeste",
    brown: "marron",
    cafe: "marron",
    marron: "marron",
    limon: "lima",
    lima: "lima",
    verdefluo: "lima",
    verdeviejo: "lima",
    green: "verde",
    verde: "verde",
    magenta: "magenta",
    bordo: "bordo",
    burgundy: "bordo",
    grey: "gris",
    gray: "gris",
    gris: "gris",
    dorado: "dorado",
    gold: "dorado"
  };

  const GLOW_BY_COLOR = {
    negro: "#111111",
    violeta: "#a855f7",
    naranja: "#ff7a00",
    rojo: "#ff2a2a",
    amarillo: "#ffd500",
    azul: "#2a6cff",
    blanco: "#f5f5f5",
    celeste: "#2dd4ff",
    marron: "#6b3f1d",
    lima: "#84ff00",
    verde: "#00c853",
    magenta: "#ff00cc",
    bordo: "#7a001c",
    gris: "#9e9e9e",
    dorado: "#d4af37"
  };

  function normalizeColorName(value = "") {
    const cleanedValue = String(value || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\.(png|jpg|jpeg|webp|svg)$/i, "")
      .replace(/^assets\//i, "")
      .replace(/[^a-z0-9]/g, "");

    if (!cleanedValue) return "";

    return COLOR_ALIASES[cleanedValue] || cleanedValue;
  }

  function getGloveImage(colorValue = "") {
    const colorSlug = normalizeColorName(colorValue);
    const resolvedSlug = GLOW_BY_COLOR[colorSlug] ? colorSlug : SAFE_FALLBACK_SLUG;
    return `assets/${resolvedSlug}.png`;
  }

  function getGlowColor(colorValue = "") {
    const colorSlug = normalizeColorName(colorValue);
    return GLOW_BY_COLOR[colorSlug] || SAFE_FALLBACK_GLOW;
  }

  globalScope.KOF_GLOVES_UTILS = {
    normalizeColorName,
    getGloveImage,
    getGlowColor
  };
})(window);
