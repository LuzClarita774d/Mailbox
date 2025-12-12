    document.addEventListener('DOMContentLoaded', () => {
    
    
    // AJUSTA AQUÍ LAS FECHAS DEL BUZÓN
    // Inicio: 12 diciembre 2025
    const startDate = new Date("2025-12-12T00:00:00");
    // Fin: 14 enero 2026
    const endDate   = new Date("2026-01-14T00:00:00");

    //  MENSAJES DEL DÍA (puedes personalizarlos todos)
    // Si hay menos mensajes que días, se reutiliza un mensaje genérico.
    const loveMessages = [
      "Busqué una forma especial de comunicarme contigo y por eso te dejé estas notitas, donde guardé todo lo que siento por nosotros, amor.Y es que hoy lo tengo claro: mi meta eres tú.\nQuiero una familia contigo, quiero todo a tu lado, porque contigo todo se siente mejor, más bonito, más real.\nDeseo de corazón que esta página te guste, porque la pensé para nosotros. Será nuestro espacio, lleno de recuerdos, palabras bonitas y pequeños detalles que hablen de lo que somos. \nVivir cada etapa contigo es algo hermoso… y contigo, uff, todo se siente distinto.\nHoy me permito ser lo más cursi, porque no quiero salir con nadie más.\n\n Quiero ser todo para ti, así como tú lo eres para mí.\n\n Te amo, amor. 💖",
      "Cada día contigo es un regalo que mi corazón nunca se cansa de abrir.",
      "Eres mi lugar seguro, mi abrazo favorito y mi pensamiento constante.",
      "Si el amor tuviera un nombre, llevaría el tuyo. ❤️",
      "No sé qué hice bien para merecerte, pero quiero seguir haciéndolo toda la vida.",
      "Tu sonrisa ilumina incluso mis días más grises.",
      "El mundo es menos pesado cuando pienso en ti.",
      "Quiero una vida entera para seguir encontrando detalles que ame de ti.",
      "Contigo he descubierto que el hogar también puede ser una persona. 🏡",
      "Mi lugar favorito siempre será cualquiera donde estés tú.",
      "Gracias por quedarte incluso cuando yo mismo no sabía cómo quedarme.",
      "Prometo seguir eligiéndote cada día, incluso en los días difíciles. 🤍",
      "Me basta un mensaje tuyo para que todo valga la pena.",
      "Si pudiera volver a empezar, correría otra vez hacia ti sin dudarlo.",
      "Eres el “hoy” más bonito que la vida me ha dado.",
      "Te amo en todos mis tiempos: pasado, presente y todo lo que venga.",
      "Quiero caminar de la mano contigo, aún cuando los caminos se pongan raros.",
      "Tus abrazos son mi recarga de energía favorita.",
      "No eres un capítulo, eres mi historia completa.",
      "Cada latido mío susurra tu nombre muy bajito.",
      "Desde que llegaste, mis días tienen un brillo que antes no conocían.",
      "Quiero seguir construyendo futuros contigo, aunque no sepamos exactamente cómo.",
      "A tu lado, hasta lo cotidiano se siente mágico.",
      "Tú conviertes cualquier momento sencillo en un recuerdo eterno. ✨",
      "Te amo más de lo que las palabras me dejan explicar.",
      "Si el universo es infinito, mi amor por ti también va por ahí.",
      "Gracias por ser mi paz en medio del ruido.",
      "Hoy solo quiero recordarte que te elijo, otra vez y siempre.",
      "Si tengo tu mano, ya no le tengo miedo a nada.",
      "Este mensaje es solo para decirte lo de siempre: te amo muchísimo. 💌",
      "Aunque no lo diga cada minuto, mi corazón está pensando en ti a cada momento.",
      "Gracias por enseñarme que el amor también puede ser tierno y tranquilo.",
      "Contigo aprendí que amar también es estar, escuchar y abrazar el silencio. 🤍",
      "Pase lo que pase, quiero que sepas que mi amor está de tu lado."
    ];

    // GENERAR ARREGLO DE DÍAS ENTRE DOS FECHAS
    function getDaysArray(start, end) {
      const arr = [];
      const dt = new Date(start);
      while (dt <= end) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
      }
      return arr;
    }

    const days = getDaysArray(startDate, endDate);
    const cardsGrid = document.getElementById("cardsGrid");
    const today = new Date();
    today.setHours(0,0,0,0);

// CREAR CARTAS
days.forEach((date, index) => {
  const card = document.createElement("button");
  card.classList.add("card");

  const icon = document.createElement("div");
  icon.className = "card-icon";

  //   usamos <img>
  const iconImg = document.createElement("img");
  iconImg.className = "card-icon-img";
  iconImg.alt = "Icono";

  const number = document.createElement("div");
  number.className = "card-number";

  // Día del mes (ej. 12, 13, 14…)
  const dayOfMonth = date.getDate();
  const month = date.getMonth() + 1; // 0 = enero
  number.textContent = dayOfMonth;

  const isUnlocked = today >= date;

  if (isUnlocked) {
    card.classList.add("card--unlocked");
    iconImg.src = "Img/ico-carta.png"; //  disponible
    card.addEventListener("click", () => openModal(index, date));
  } else {
    card.classList.add("card--locked");
    iconImg.src = "Img/candadito.png"; //  bloqueado
  }

  //  mantenemos tu estructura: icon + number
  icon.appendChild(iconImg);
  card.appendChild(icon);
  card.appendChild(number);



      // Tooltip con la fecha exacta (por si quieres verlo)
      card.title = `Se desbloquea el ${dayOfMonth}/${month}/${
        date.getFullYear()
      }`;

      cardsGrid.appendChild(card);
    });

    // MODAL
    const modalBackdrop = document.getElementById("modalBackdrop");
    const modalDay = document.getElementById("modalDay");
    const modalMessage = document.getElementById("modalMessage");
    const closeModalBtn = document.getElementById("closeModal");

    function openModal(index, date){
      const dayNumber = index + 1;
      modalDay.textContent = `Día ${dayNumber}`;

      // Escoge mensaje (si no hay, usa el último de la lista)
      let message = loveMessages[index];
      if (!message) message = loveMessages[loveMessages.length - 1];
      modalMessage.textContent = message;

      modalBackdrop.classList.add("show");
    }

    function closeModal(){
      modalBackdrop.classList.remove("show");
    }

    closeModalBtn.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", (e)=>{
      if(e.target === modalBackdrop) closeModal();
    });





// Controlador de objetos flotantes
function startFloatingObjects() {
  const container = document.getElementById('floating-objects');
  let count = 0;

  function spawn() {
    let el = document.createElement('div');
    el.className = 'floating-petal';

    // Posición inicial (un poco fuera de la pantalla por abajo)
    el.style.left = `${Math.random() * 90 + 2}%`;
    el.style.top = `${100 + Math.random() * 10}%`;
    el.style.opacity = 0.7 + Math.random() * 0.3;

    container.appendChild(el);

    // Animación flotante
    const duration = 6000 + Math.random() * 4000;
    const drift = (Math.random() - 0.5) * 60;

    setTimeout(() => {
      el.style.transition = `transform ${duration}ms linear, opacity 1.2s`;
      el.style.transform = `translate(${drift}px, -110vh) scale(${0.8 + Math.random() * 0.6}) rotate(${Math.random() * 360}deg)`;
      el.style.opacity = 0.2;
    }, 30);

    // Eliminar después de animar
    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, duration + 2000);

    // Generar más objetos
    if (count++ < 32) {
      setTimeout(spawn, 350 + Math.random() * 500);
    } else {
      setTimeout(spawn, 1200 + Math.random() * 1200);
    }
  }

  spawn();
}
  startFloatingObjects();
});


const phone = "529983959601";

const replyText = document.getElementById("replyText");
const sendWhatsapp = document.getElementById("sendWhatsapp");

let currentDayNumber = 1;

function updateSendState(){
  const hasText = replyText.value.trim().length > 0;
  sendWhatsapp.disabled = !hasText;
}

replyText.addEventListener("input", updateSendState);

// (Opcional) Ctrl + Enter para enviar
replyText.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "Enter" && !sendWhatsapp.disabled) {
    sendWhatsapp.click();
  }
});

// ✅ Tu openModal (solo agrega estas 3 líneas dentro)
function openModal(index, date){
  const dayNumber = index + 1;
  currentDayNumber = dayNumber;

  modalDay.textContent = `Día ${dayNumber}`;

  let message = loveMessages[index];
  if (!message) message = loveMessages[loveMessages.length - 1];
  modalMessage.textContent = message;

  replyText.value = "";       // limpia
  updateSendState();          // desactiva botón

  modalBackdrop.classList.add("show");
}

sendWhatsapp.addEventListener("click", () => {
  const msg = replyText.value.trim();
  if (!msg) return;

  const full = `Respuesta del Día ${currentDayNumber}: ${msg}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(full)}`;

  const prev = sendWhatsapp.textContent;
  sendWhatsapp.textContent = "Abriendo WhatsApp…";
  sendWhatsapp.disabled = true;

  window.open(url, "_blank");

  // vuelve a normal después de un momento
  setTimeout(() => {
    sendWhatsapp.textContent = prev;
    updateSendState();
  }, 1200);
});



// --- Música de fondo ---
function playBackgroundMusic() {
  const audio = document.getElementById('bg-music');
  if (!audio) return;

  // --- Opción archivo local por parámetro 'musica' ---
  let musicaParam = getURLParam('musica');
  if (musicaParam) {
    // Decodifica y previene rutas maliciosas
    musicaParam = decodeURIComponent(musicaParam).replace(/[^\w\d .\-]/g, '');
    audio.src = 'Music/' + musicaParam;
  }

  // --- Opción YouTube (solo mensaje de ayuda) ---
  let youtubeParam = getURLParam('youtube');
  if (youtubeParam) {
    // Muestra mensaje de ayuda para descargar el audio
    let helpMsg = document.getElementById('yt-help-msg');
    if (!helpMsg) {
      helpMsg = document.createElement('div');
      helpMsg.id = 'yt-help-msg';
      helpMsg.style.position = 'fixed';
      helpMsg.style.right = '18px';
      helpMsg.style.bottom = '180px';
      helpMsg.style.background = 'rgba(255,255,255,0.95)';
      helpMsg.style.color = '#e60026';
      helpMsg.style.padding = '10px 16px';
      helpMsg.style.borderRadius = '12px';
      helpMsg.style.boxShadow = '0 2px 8px #e6002633';
      helpMsg.style.fontSize = '1.05em';
      helpMsg.style.zIndex = 100;
      helpMsg.innerHTML = 'Para usar música de YouTube, descarga el audio (por ejemplo, usando y2mate, 4K Video Downloader, etc.), colócalo en la carpeta <b>Music</b> y usa la URL así:<br><br><code>?musica=nombre.mp3</code>';
      document.body.appendChild(helpMsg);
      setTimeout(() => { if(helpMsg) helpMsg.remove(); }, 15000);
    }
  }

  let btn = document.getElementById('music-btn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'music-btn';
    btn.textContent = '🔊 Música';
    btn.style.position = 'fixed';
    btn.style.bottom = '18px';
    btn.style.right = '18px';
    btn.style.zIndex = 99;
    btn.style.background = 'rgba(255,255,255,0.85)';
    btn.style.border = 'none';
    btn.style.borderRadius = '24px';
    btn.style.padding = '10px 18px';
    btn.style.fontSize = '1.1em';
    btn.style.cursor = 'pointer';
    document.body.appendChild(btn);
  }
  audio.volume = 0.7;
  audio.loop = true;
  // Intentar reproducir inmediatamente
  audio.play().then(() => {
    btn.textContent = '🔊 Música';
  }).catch(() => {
    // Si falla el autoplay, esperar click en el botón
    btn.textContent = '▶️ Música';
  });
  btn.onclick = () => {
    if (audio.paused) {
      audio.play();
      btn.textContent = '🔊 Música';
    } else {
      audio.pause();
      btn.textContent = '🔈 Música';
    }
  };
}

// Intentar reproducir la música lo antes posible (al cargar la página)
window.addEventListener('DOMContentLoaded', () => {
  playBackgroundMusic();
});
