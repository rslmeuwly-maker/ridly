// js/pwa.js — enregistrement du service worker RIDLY
// Charge sur toutes les pages. Ne demande aucune permission.
(function () {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/service-worker.js")
      .then(function (reg) {
        // Si une nouvelle version est dispo, on l'active sans attendre
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

  // Recharge une seule fois quand le nouveau SW prend la main
  var reloaded = false;
  navigator.serviceWorker.addEventListener("controllerchange", function () {
    if (reloaded) return;
    reloaded = true;
    window.location.reload();
  });
})();
