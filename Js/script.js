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
      "Cada día contigo es un regalo que mi corazón nunca se cansa de abrir. Hoy hablemos de lo mucho que me gusta tu mirada, la forma en que me ves es tan linda y profunda.\nAmo verte y no decir ni una palabra, solo contemplar cómo me miras. Es tan bella que no encuentro formas de describirla. Y si te soy sincera, cuando quise alejarme, miré la foto que te tomé en SITE y me quedé contemplándola, diciéndome:¿Realmente no quiero ver esos ojos tan hermosos?. No podía dejar de verlos.\nY es que si me vuelvo a preguntar, diría que son los ojos que deseo ver todos los días, mientras Dios me preste vida. Sé que nunca será suficiente, pero empecemos por el hoy. Prometo ver siempre tu linda mirada que acompañas con unos lindos ojitos de color verde. ¡Wow, qué hermoso, amor!\n Espero que con el paso del tiempo siempre disfrutemos ver nuestros ojos, que son la puerta del alma.",
      "Hoy viajo bonito, lo único triste es que no estaré contigo y te extrañaré mucho. Creo que es la primera vez que nos separamos por más tiempo, ¡qué triste! Pero amor, el día pasa rápido y estaré esperando verte. Hoy, si nos vemos, dame un abrazo fuerte, y debes prometer que te vas a cuidar mucho, ¿sí? No me gustaría ver a mi novio todo flaco, así con carne estás rico, rico. Bueno, el secreto de hoy es que, cuando escribí esto, andaba llorando. No sé, es que te voy a extrañar mucho. En serio que deseo no viajar sola nunca. ¡Ay, imagínate si un día nos dejamos! Nombre, nooo. Bueno, amor, te amo mucho.",
      "Si el amor tuviera un nombre, llevaría el tuyo. \n      Espero que tengas un hermoso día, como tú, mi cielo. \n      Amor hermoso, te amo muchísimo. Eres el amor de mi vida, eres una persona increíble. \n      Desde que llegaste a mi vida, todo tiene más sentido. Eres mi pilar, mi refugio y la razón principal de mi sonrisa. \n      Contigo, cada momento es una aventura y un sueño hecho realidad. Gracias por ser tan único y por elegir compartir tu camino conmigo. \n      Que este día esté lleno de alegría y de esa luz especial que solo tú tienes. ¡Ya quiero verte!",
      "No sé qué hice bien para merecerte, pero quiero seguir haciéndolo toda la vida. \n      Creo que esta es una frase muy loca, pero te diré lo que pienso realmente: para mí eres completamente valioso y, por lo tanto, no creo ser la mejor. \n      Es que te va a sonar extraño, pero siempre mi madre me ha dicho que cuando uno ama tanto no se cree merecedor del amor de esa persona... a eso yo le llamo amar. \n      Y tú eres mi amor verdadero, te amo, Gabriel, con todo mi ser y siempre lo haré. \n      Solo ámame y quiéreme como yo lo soy contigo. Seamos el amor que deseamos y vivamos enamorados el tiempo que sea necesario.",
      "Tu sonrisa ilumina incluso mis días más grises. No es solo un gesto, ya que me recuerda la belleza que aún existe en el mundo.\n\nCuando la tristeza me alcanza y los problemas de mi vida se vuelven realmente difíciles, cuando siento que el camino es demasiado empinado, eres tú, con esa hermosa y sincera sonrisa, quien aparece en mi mente y me da la fuerza que necesito.\n\nEn los momentos más complicados, tu alegría se convierte en un lugar seguro donde encuentro paz y calma. Es, una promesa silenciosa de que todo estará bien.\n\nEs por eso que te quiero decir que te amo con todo mi ser, con cada fibra de mi alma. Gabrielito, eres lo más hermoso que tengo. Tu linda sonrisa no solo me da mucha calma, sino que me inspira a ser una mejor persona cada día. Gracias por ser mi luz constante.",
      "El mundo es menos pesado cuando pienso en ti. Hoy hablemos de lo estresante que me resulta pensar a veces en el porvenir.\n\nY es que el futuro se ve inmenso, cansado, muy difícil de comprender. Todo me da miedo, saber qué debo hacer. Pero es justo ahí cuando apareces tú y lo veo desde un panorama totalmente diferente. Aunque sé que será difícil, sé que es mucho menos si estamos juntos.",
      "Quiero una vida entera para seguir encontrando detalles que ame de ti \n Quiero una vida entera para seguir encontrando detalles que ame de ti. Hoy hablemos de lo hermoso que es descubrir cosas nuevas de ti: como simples gestos, miradas y acciones que, cuando las noto, son súper geniales.\n\nEn serio, eso es lo más lindo, y no sabes cuánto me emocionan los pequeños detalles que tienes conmigo y con los demás. Así que, sígueme permitiendo conocer todo de ti, hasta lo más mínimo, porque esa es la esencia que he aprendido a amar con toda el alma.",
      "Contigo he descubierto que el hogar también puede ser una persona. Siempre se dice que la familia es todo, y es cierto; lo es.\n\nPero algo que he aprendido es que tu pareja también es tu familia. Mientras los padres se tienen el uno al otro, los hijos eventualmente conocerán a la persona que les robará el aliento, y ahí es donde estamos tú y yo, en el punto donde lo eres todo para mí.\n\nEstar a tu lado es como estar en casa. Y créeme que hablar de 'hogar' es mucho, ya que es un lugar de calma y mucho amor. Eso es lo que eres tú en mi vida: un hogar. Por eso, incluso sin estar casados, te digo ahora que realmente deseo formar, desde hoy, un hogar contigo.",
      "Mi lugar favorito siempre será cualquiera donde estés tú.",
      "Gracias por quedarte incluso cuando yo mismo no sabía cómo quedarme.",
      "Prometo seguir eligiéndote cada día, incluso en los días difíciles.",
      "Hoy es una fecha especial pero para  mi todos los dias son especiales cuando estoy contigo.\n Bonito espero tengas un dia lindo no iporta lo que hagas solo recuerda que hay alguien que se muere de amor por ti incluso si no te tiene cerca eres lo mas precioso y presiado en mi espero el año  que vienes  y los que faltan estemos juntos  y si es posible todos los 24   de diciembre estes conmigo, recuerda soy egoista y  tienes que estar conmigo donde yo este siempre , te amo mi vida  ahora no llegara santa llegare yo jajajajaja\n TE AMO.",
      "Si pudiera volver a empezar, correría otra vez hacia ti sin dudarlo. Y esq se que al principio fue dificil pero realmente nunca cambiare lo que tenemos y volveria hacer todo  solo excluyendo lo malo disculpame de todo corzon y prometo amarte de la forma que te mereces.",
      "Eres el “hoy” más bonito que la vida me ha dado  y espero que no solo sea el hoy si no sea lo de siempre y esq  eres lo mas lindo que tengo en mi vida  eres todo para mi quiero que seas mi presente y mi futuro y que en todo momento estar a tu lado mi vida. Te amo mi tomatito .",
      "Te amo en todos mis tiempos: pasado, presente y todo lo que venga. Ya que si soy sincera te quiero en mi vida pero lo que mas deseo es poder ser parte de tu vida y esq no hy nada que me haga mas felz que ser parte de ti y tu de mi  es por eso que todos los dias decido amarte.Te amo ",
      "Quiero caminar de la mano contigo, aún cuando los caminos se pongan raros y incluso dificiles,no importa que sea lo que acontesca deseo  realmente siempre estar contigo, deseo que podamos ser el sosten de uno del otro  y que nuestra unión fortalezca nuestra noviazgo  ",
      "Tus abrazos son mi recarga de energía favorita.\n No se si te pase a ti pero ami si esq  cuando me abrazas se siente una paz tan hermosa que se siente plena y con calma que relamente es inexplicable lo hermoso que me puedes hacer sentir  y esq en esos momentos deseo quedarme siempre abrazada a ti, por eso te pido que nunca olvides habrazarme  ya que son de lo que mas puedo disfrutar,\n Te amo .",
      "Bonito mi mayor deseo es que crezcamos juntos cada dia en todos los ambitos que existen y que ambos podamos amarnos y respetarnos como deseamos, tengaos experiencias juntos pensando que si no lo hacemos quien mas lo ara si de verdad queremos estar toda la vida no tengamos miedo de ser los mas cursis o los mas enojones seamos nosotros vivamos y a la vez aprendamos de nuestros errores y de las coasas buenas amor quiero que seas tu y tu quieres que sea yo? ",
      "Hoy agardezco a Dios por perimitirme conocerte y esque las coincidencias no existen y tu eres un plan ya desgnado y creeme que para decirte esto te lo dijo desde mi corazon y esq se que eres tu  un ida te pregunte si creeias en el destino y esq pensamos iguales que si existe pero nosotros desidimos si lo tomamos o lo dejamos y esq  tu eres mi destino y mi elección es por eso que hoy al terminar este año puedo decir que haz sido mi mejor rejalo que la vida me dio  y deseo amarte siempre y elegirnos cada mañana  espeor que hoy recuerdes que eres lo mejor y que debemos dar gracias por el amor que se nos permitio mutuamente  te amo y deseo que te la pases super bien mi vida pero recuerda agradecer pitr todo lo bueno yo hoy agradezco por tenerte en mi vida. Te amo feliz año nuevo.",
      "Desde que llegaste, mis días tienen un brillo que antes no conocían. \n y esq ahora tu eres mi motivación de todos los dias como si fueras un pensamiento  con la cual me despierto y me duermo es como decir mama eres y seras mi prioridad mi tesoro hermoso ",
      "Quiero seguir con testruyendo futuros contigo, aunque no sepamos exactamente cómo.",
      "A tu lado, hasta lo cotidiano se siente mágico si es contigo vivamos juntos mi vida. Te amo",
      "Tú conviertes cualquier momento sencillo en un recuerdo eterno. es por eso que quiero que sepas que todo lo que hagamos lo llevare en lo mas profundo de mi ser ",
      "Te amo de una forma que no tiene explicación, solo lo siento por cómo me haces sentir. ¿Sabes cómo me di cuenta? Me imagino que ya tienes una idea de cuál fue la razón: es por tu olor. Juro que, al principio, suena tonto, pero en serio, ¡cómo me encanta! Es extraño pero agradable; no es perfume, es solo ese olor de tu piel o de tu sudor, ¡qué sé yo! Pero es algo que viene de ti y me encanta muchísimo, es tan grato. En serio, por mí, me la pasaría mil años pegada a ti oliéndote, pero la vida es injusta y no puedo ser una garrapata para estar siempre encima de ti (o quién sabe...). Y ya, bonito, me perdí... así como me perdí en tus ojos verdes. ¡Qué precioso, hermoso y jugoso novio tengo yo! Te amo, mi amor.",
      "Dicen que el universo es infinito, pero qué lástima que no lo sea... porque mi amor por ti sí es infinito, es muy grande y verdaderamente precioso..",
      "Gracias por ser mi paz en medio del ruido. Gracias por entenderme y amarme, pero más que nada por respetarme, incluso cuando estoy en desorden total. Eres mi paz en la tormenta y eso lo valoro mucho. Cuando hay problemas en casa, tú te vuelves mi sostén y es un alivio poder confiar en ti. Ya no me siento sola porque estás conmigo, y eso me hace querer y pensar diferente, ahora que tengo una vida contigo, my love.",
      "Hoy solo quiero recordarte que te elijo, otra vez y siempre.",
      "Si tengo tu mano, ya no le tengo miedo a nada.",
      "Este mensaje es solo para decirte lo de siempre: te amo muchísimo. ",
      "Aunque no lo diga cada minuto, mi corazón está pensando en ti a cada momento.",
      "Gracias por enseñarme que el amor también puede ser tierno y tranquilo.",
      "Contigo aprendí que amar también es estar, escuchar y abrazar el silencio. ",
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

//  Tu openModal (solo agrega estas 3 líneas dentro)
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



function getURLParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

function safeMusicFilename(name) {
  if (!name) return null;

  name = decodeURIComponent(name).trim();

  // Quita rutas tipo ../../ o carpetas
  name = name.split('/').pop().split('\\').pop();

  // Permite solo: letras, números, espacio, guion, underscore y punto
  if (!/^[\w .-]+$/.test(name)) return null;

  // Permite solo extensiones de audio comunes
  if (!/\.(mp3|ogg|wav)$/i.test(name)) return null;

  return name;
}

function playBackgroundMusic() {
  const audio = document.getElementById('bg-music');
  if (!audio) return;

  const musicaParamRaw = getURLParam('musica');
  const musicaParam = safeMusicFilename(musicaParamRaw);

  // Si no hay parámetro, usa default
  const src = musicaParam ? `Music/${musicaParam}` : `Music/music1.mp3`;

  audio.src = src;
  audio.volume = 0.7;
  audio.loop = true;

  // Botón
  let btn = document.getElementById('music-btn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'music-btn';
    btn.textContent = '▶️ Música';
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

  // Debug de carga
  audio.addEventListener('error', () => {
    console.error('❌ Error cargando audio:', audio.src, audio.error);
    btn.textContent = '❌ Audio no carga';
  });

  audio.addEventListener('canplaythrough', () => {
    console.log('✅ Audio listo:', audio.src);
  });

  // Intento autoplay
  audio.play()
    .then(() => { btn.textContent = '🔊 Música'; })
    .catch((e) => {
      console.warn('⚠️ Autoplay bloqueado:', e);
      btn.textContent = '▶️ Música';
    });

  // Click para play/pause
  btn.onclick = async () => {
    try {
      if (audio.paused) {
        await audio.play();
        btn.textContent = '🔊 Música';
      } else {
        audio.pause();
        btn.textContent = '🔈 Música';
      }
    } catch (e) {
      console.error('No se pudo reproducir:', e);
    }
  };
}

window.addEventListener('DOMContentLoaded', playBackgroundMusic);
