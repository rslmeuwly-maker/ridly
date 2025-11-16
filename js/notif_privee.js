// js/notif_privee.js

// ⚠️ suppose que "supa" est déjà créé avant (comme sur ta page chat privé)
// ex. const supa = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

// ===== Son de notif =====
const notifAudioGlobal = new Audio('https://ridly.ch/sons/sonsnotif.mp3');

function playNotifSoundGlobal(){
  try{
    notifAudioGlobal.currentTime = 0;
    notifAudioGlobal.play().catch(()=>{});
  }catch(e){}
}

// ===== Toast global =====
let toastDivGlobal = null;
let toastTimeoutGlobal = null;
let toastClickHandlerGlobal = null;

function showToastGlobal(message, onClick){
  if(!toastDivGlobal){
    toastDivGlobal = document.createElement('div');
    toastDivGlobal.className = 'toast';
    document.body.appendChild(toastDivGlobal);
  }
  toastDivGlobal.textContent = message;

  if(toastClickHandlerGlobal){
    toastDivGlobal.removeEventListener('click', toastClickHandlerGlobal);
    toastClickHandlerGlobal = null;
  }
  if(onClick){
    toastClickHandlerGlobal = (e)=>{
      e.preventDefault();
      onClick();
    };
    toastDivGlobal.addEventListener('click', toastClickHandlerGlobal);
  }

  // son à chaque toast
  playNotifSoundGlobal();

  toastDivGlobal.classList.add('show');
  clearTimeout(toastTimeoutGlobal);
  toastTimeoutGlobal = setTimeout(()=>{
    toastDivGlobal.classList.remove('show');
  }, 4000);
}

// ===== Vérifier les messages privés non lus =====
async function checkUnreadPrivateOnce(){
  try{
    if(typeof supa === 'undefined') return;

    const { data:{ user }, error:authErr } = await supa.auth.getUser();
    if(authErr || !user) return;

    // vue : ridly_private_unread_counts (tu l’as déjà sur la page chat privé)
    const { data: unreadData, error } = await supa
      .from('ridly_private_unread_counts')
      .select('unread_count');

    if(error || !unreadData || !unreadData.length) return;

    const totalUnread = unreadData.reduce(
      (sum, u) => sum + (u.unread_count || 0),
      0
    );

    if(totalUnread > 0){
      showToastGlobal(
        `Tu as ${totalUnread} message${totalUnread>1?'s':''} privé${totalUnread>1?'s':''} non lu${totalUnread>1?'s':''}.`,
        () => {
          // si tu veux que le clic sur le toast ouvre directement la page chat privé
          window.location.href = 'chat_prive.html'; // adapte le nom de fichier
        }
      );
    }
  }catch(e){
    console.error('checkUnreadPrivateOnce error', e);
  }
}

// On lance ça quand la page est prête
document.addEventListener('DOMContentLoaded', ()=>{
  checkUnreadPrivateOnce();
});
