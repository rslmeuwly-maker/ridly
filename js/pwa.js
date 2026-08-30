// js/pwa.js — enregistrement du service worker RIDLY
// Charge sur toutes les pages. Ne demande aucune permission.
(function () {
  if (!("serviceWorker" in navigator)) return;

  // Le garde-fou doit SURVIVRE au rechargement.
  // Une simple variable repart a false apres reload : le nouveau SW
  // reprend la main, on recharge, la variable est reinitialisee, et la
  // page boucle indefiniment. sessionStorage persiste sur l'onglet.
  var CLE = "ridly_sw_reloaded";

  function dejaRecharge() {
    try { return sessionStorage.getItem(CLE) === "1"; } catch (e) { return false; }
  }
  function marquerRecharge() {
    try { sessionStorage.setItem(CLE, "1"); } catch (e) {}
  }

  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/service-worker.js")
      .then(function (reg) {
        // Nouvelle version disponible : on l'active sans attendre.
        reg.addEventListener("updatefound", function () {
          var sw = reg.installing;
          if (!sw) return;
          sw.addEventListener("statechange", function () {
            if (sw.state === "installed" && navigator.serviceWorker.controller) {
              sw.postMessage({ type: "SKIP_WAITING" });
            }
          });
        });
      })
      .catch(function (err) {
        console.error("[PWA] service worker :", err);
      });
  });

  navigator.serviceWorker.addEventListener("controllerchange", function () {
    if (dejaRecharge()) return;   // un seul rechargement par onglet
    marquerRecharge();
    window.location.reload();
  });
})();
