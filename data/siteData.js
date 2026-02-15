(function (globalScope) {
  const leagueSeason = 24;
  const cupSeason = leagueSeason - 1;

  globalScope.SUDAKA_SITE_DATA = {
    pes6CuposLibres: 20,
    kofCuposLibres: ,3,
    leagueSeason,
    cupSeason
  };
})(typeof window !== "undefined" ? window : globalThis);
