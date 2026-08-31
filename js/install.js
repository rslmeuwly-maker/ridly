// js/install.js — invite d'installation RIDLY
//
// Deux plateformes, deux mecanismes :
//
//   Android / Chrome : l'evenement `beforeinstallprompt` fournit une
//   vraie invite systeme. Un bouton suffit.
//
//   iPhone / Safari : Apple n'implemente PAS cet evenement. Aucune API
//   ne permet de declencher l'installation. La seule option est
//   d'expliquer la manipulation : Partager puis « Sur l'ecran d'accueil ».
//
// Le module s'injecte lui-meme, aucun markup a ajouter dans les pages.
(function () {
  var CLE_REFUS = "ridly_install_refuse";

  function estInstallee() {
    // navigator.standalone est la propriete historique d'iOS,
    // display-mode:standalone la methode standard.
    return (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches)
        || window.navigator.standalone === true;
  }

  function estIOS() {
    var ua = navigator.userAgent || "";
    // iPadOS 13+ s'annonce comme un Mac : on le distingue par l'ecran tactile.
    return /iPhone|iPad|iPod/.test(ua)
        || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  }

  function refuseRecemment() {
    try {
      var t = localStorage.getItem(CLE_REFUS);
      if (!t) return false;
      // On ne represente pas l'invite avant 14 jours.
      return (Date.now() - Number(t)) < 14 * 24 * 3600 * 1000;
    } catch (e) { return false; }
  }

  function memoriserRefus() {
    try { localStorage.setItem(CLE_REFUS, String(Date.now())); } catch (e) {}
  }

  // ---------- styles ----------
  function injecterStyles() {
    if (document.getElementById("ridlyInstallCss")) return;
    var st = document.createElement("style");
    st.id = "ridlyInstallCss";
    st.textContent = [
      ".rdl-install{position:fixed;left:10px;right:10px;z-index:1300;",
      "  bottom:calc(76px + env(safe-area-inset-bottom));max-width:560px;margin:auto;",
      "  background:#101010;border:1px solid rgba(255,255,255,.11);border-radius:18px;",
      "  padding:13px 14px;box-shadow:0 18px 44px rgba(0,0,0,.55);",
      "  font-family:'Barlow Condensed',system-ui,Arial,sans-serif;color:#f2f2f2;",
      "  transform:translateY(140%);transition:transform .28s ease}",
      ".rdl-install.open{transform:translateY(0)}",
      ".rdl-install .top{display:flex;align-items:center;gap:11px}",
      ".rdl-install img{width:40px;height:40px;border-radius:11px;flex:none}",
      ".rdl-install .tx{flex:1;min-width:0}",
      ".rdl-install .ti{font-weight:900;font-size:16px}",
      ".rdl-install .su{color:#9a9a9a;font-size:13px;margin-top:2px;line-height:1.35}",
      ".rdl-install .x{border:0;background:transparent;color:#777;font-size:20px;",
      "  cursor:pointer;padding:2px 4px;flex:none}",
      ".rdl-install .go{display:block;width:100%;margin-top:11px;border:0;border-radius:12px;",
      "  padding:12px;font-weight:900;font-size:15px;cursor:pointer;font-family:inherit;",
      "  background:linear-gradient(#e51010,#b50000);color:#fff}",
      ".rdl-steps{margin:10px 0 0;padding:0;list-style:none;color:#c8c8c8;font-size:14px;line-height:1.6}",
      ".rdl-steps li{display:flex;gap:9px;align-items:flex-start;margin:5px 0}",
      ".rdl-steps b{color:#fff}",
      ".rdl-num{flex:none;width:20px;height:20px;border-radius:50%;background:#cc0000;",
      "  color:#fff;font-size:12px;font-weight:900;display:grid;place-items:center;margin-top:1px}"
    ].join("");
    document.head.appendChild(st);
  }

  function construire(contenu) {
    injecterStyles();
    var d = document.createElement("div");
    d.className = "rdl-install";
    d.id = "rdlInstall";
    d.innerHTML = contenu;
    document.body.appendChild(d);
    requestAnimationFrame(function () { d.classList.add("open"); });

    d.querySelector(".x").addEventListener("click", function () {
      memoriserRefus();
      d.classList.remove("open");
      setTimeout(function () { d.remove(); }, 300);
    });
    return d;
  }

  var entete =
    '<div class="top">' +
    '  <img src="/image/icon-192.png" alt="">' +
    '  <div class="tx">' +
    '    <div class="ti">Installe RIDLY</div>' +
    '    <div class="su">Pour recevoir les notifications de messages.</div>' +
    '  </div>' +
    '  <button class="x" type="button" aria-label="Fermer">✕</button>' +
    '</div>';

  // ---------- Android : invite systeme ----------
  var invite = null;

  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    invite = e;
    if (estInstallee() || refuseRecemment()) return;

    var d = construire(entete + '<button class="go" type="button" id="rdlGo">INSTALLER</button>');
    d.querySelector("#rdlGo").addEventListener("click", async function () {
      d.classList.remove("open");
      // `prompt()` ne peut etre appele qu'une fois par invite. ou_rider.html
      // a son propre bouton d'installation : si le rider l'a deja utilise,
      // l'appel ici leverait une erreur.
      try {
        await invite.prompt();
        await invite.userChoice;
      } catch (err) {
        console.warn("[Install]", err && err.message);
      }
      invite = null;
      setTimeout(function () { d.remove(); }, 300);
    });
  });

  // ---------- iPhone : marche a suivre ----------
  window.addEventListener("load", function () {
    if (!estIOS() || estInstallee() || refuseRecemment()) return;

    // Les notifications web iOS demandent 16.4 minimum. On n'insiste pas
    // en dessous : l'installation ne changerait rien.
    var m = (navigator.userAgent || "").match(/OS (\d+)_(\d+)/);
    if (m) {
      var maj = Number(m[1]), min = Number(m[2]);
      if (maj < 16 || (maj === 16 && min < 4)) return;
    }

    setTimeout(function () {
      construire(
        entete +
        '<ul class="rdl-steps">' +
        '  <li><span class="rdl-num">1</span><span>Touche le bouton <b>Partager</b> en bas de Safari</span></li>' +
        '  <li><span class="rdl-num">2</span><span>Choisis <b>Sur l\'écran d\'accueil</b></span></li>' +
        '  <li><span class="rdl-num">3</span><span>Ouvre RIDLY depuis l\'icône, puis active les notifications dans ton profil</span></li>' +
        '</ul>'
      );
    }, 2500);   // on laisse la page s'afficher avant d'interrompre
  });

  // Expose une relance manuelle, pour un bouton « Installer l'app »
  // place ailleurs dans l'interface.
  window.ridlyProposerInstallation = function () {
    try { localStorage.removeItem(CLE_REFUS); } catch (e) {}
    if (estInstallee()) return "deja-installee";
    if (invite) {
      try { invite.prompt(); } catch (e) { console.warn("[Install]", e && e.message); }
      return "android";
    }
    if (estIOS()) {
      construire(
        entete +
        '<ul class="rdl-steps">' +
        '  <li><span class="rdl-num">1</span><span>Touche le bouton <b>Partager</b> en bas de Safari</span></li>' +
        '  <li><span class="rdl-num">2</span><span>Choisis <b>Sur l\'écran d\'accueil</b></span></li>' +
        '  <li><span class="rdl-num">3</span><span>Ouvre RIDLY depuis l\'icône</span></li>' +
        '</ul>'
      );
      return "ios";
    }
    return "indisponible";
  };
})();
