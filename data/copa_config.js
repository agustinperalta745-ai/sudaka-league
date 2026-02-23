export const copaInterdivisionalConfig = {
  active: true,
  activeSource: "data/copaInterdivisionalActiva.json",
  seasonLabel: "T25",
  deadline: "2026-02-20T23:00:00-03:00"
};

if (typeof window !== "undefined") {
  window.copaInterdivisionalConfig = copaInterdivisionalConfig;
}
