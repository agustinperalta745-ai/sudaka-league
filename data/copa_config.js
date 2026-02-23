export const copaInterdivisionalConfig = {
  active: true,
  activeSource: "data/copaInterdivisionalActiva.json",
  seasonLabel: "T25",
  firstDeadline: "2026-02-24T23:00:00-03:00",
  secondDeadline: "2026-02-26T23:00:00-03:00"
};

if (typeof window !== "undefined") {
  window.copaInterdivisionalConfig = copaInterdivisionalConfig;
}
