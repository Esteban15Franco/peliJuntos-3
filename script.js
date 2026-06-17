// Mensajes de amor en orden secuencial
const loveMessages = [
  "Eres mi pensamiento favorito cuando cierro los ojos 🌸",
  "Tu sonrisa tiene un efecto mágico en mi día 💖",
  "Cada mensaje tuyo hace que mi corazón se quede un rato más contigo 💚",
  "Me encanta cómo llenas de luz hasta los días grises ☀️",
  "Tu voz es el refugio donde quiero escucharme siempre 🎵",
  "Contigo todo se siente más ligero y hermoso 🌷",
  "Tu alegría es contagiosa y me hace sonreír sin razón 😄",
  "Cada vez que pienso en ti, siento que todo está bien 💛",
  "Eres un regalo que la vida decidió darme 💝",
  "Me gusta cómo tu presencia hace que todo se sienta en paz 🌿",
  "Cada palabra tuya se queda grabada en mi corazón ✨",
  "Tu ternura tiene la capacidad de suavizar cualquier día duro 💕",
  "Eres la calma que llega después de la tormenta 🌈",
  "Me encanta cuidarte y verte brillar desde cerca 💚",
  "Tu risa es una melodía que quiero escuchar siempre 🎶",
  "Eres más especial de lo que las palabras pueden decir 🌸",
  "Cada día contigo es un recuerdo que quiero atesorar 💖",
  "Me haces sentir afortunado solo por existir en tu mundo 💛",
  "Tu bondad ilumina todo a tu alrededor 🌷",
  "Eres mi lugar seguro aunque no estés a mi lado 💚",
  "Me encanta cómo todo se vuelve más dulce cuando estás cerca 🍯",
  "Cada gesto tuyo me hace admirarte más 💖",
  "Tu mirada tiene un efecto que calma y alegra a la vez 🌸",
  "Eres un pequeño milagro que me hace sonreír todos los días 💛",
  "Me gusta cómo haces que lo cotidiano se sienta especial 💚",
  "Cada detalle tuyo es un tesoro que guardo en mi corazón 💖",
  "Eres la razón por la que creo en cosas hermosas 🌷",
  "Me encanta cómo tu presencia llena de calma cualquier espacio 💛",
  "Tu cariño tiene un efecto que nunca quiero perder 💚",
  "Cada instante contigo es un recuerdo que quiero repetir siempre 💖",
  "Eres como un rayo de sol en un día nublado ☀️",
  "Me hace feliz solo imaginar tu sonrisa 💛",
  "Tu voz es como un abrazo que tranquiliza el alma 💚",
  "Cada palabra tuya se queda en mi corazón como un suspiro 💖",
  "Eres una chispa de alegría en mi vida diaria 🌸",
  "Me gusta cómo haces que todo sea más ligero y dulce 💛",
  "Tu ternura es un regalo que me hace querer ser mejor 💚",
  "Cada momento contigo me recuerda lo afortunado que soy 💖",
  "Eres la calma que siempre quiero tener cerca 🌷",
  "Me encanta cómo tu presencia transforma todo a su alrededor 💛",
  "Tu risa es el sonido que quiero escuchar en cada día 💚",
  "Eres un motivo para sonreír incluso sin razón aparente 💖",
  "Cada gesto tuyo provoca que mi corazón se derrita 🌸",
  "Me encanta cuidarte y protegerte en cada instante 💛",
  "Tu dulzura es un refugio al que siempre quiero volver 💚",
  "Eres mi pensamiento más bonito en cualquier momento 💖",
  "Cada mensaje tuyo ilumina mi día 🌷",
  "Me gusta cómo llenas de cariño hasta lo más simple 💛",
  "Tu presencia tiene un efecto que hace todo mejor 💚",
  "Eres mi pequeño refugio de ternura 💖",
  "Cada detalle tuyo provoca que mi corazón se quede contigo 🌸",
  "Me encanta la manera en que me haces sentir especial 💛",
  "Tu cuidado y cariño son un regalo que valoro cada día 💚",
  "Eres un soplo de calma en medio del mundo 💖",
  "Cada instante contigo me recuerda lo afortunado que soy 🌷",
  "Me encanta la dulzura que traes a mi vida 💛",
  "Tu sonrisa es la chispa que alegra cualquier día 💚",
  "Eres mi pensamiento más tierno y querido 💖",
  "Cada gesto tuyo me hace sentir un cariño profundo 🌸",
  "Me gusta cómo tu presencia convierte todo en algo bonito 💛",
  "Tu voz es mi refugio favorito 💚",
  "Eres la calma y la alegría que siempre quiero cerca 💖",
  "Cada palabra tuya provoca un suspiro de ternura 🌷",
  "Me encanta cuidarte y acompañarte en cada momento 💛",
  "Tu dulzura es el regalo más bonito de mi día 💚",
  "Eres mi pensamiento feliz incluso en días difíciles 💖",
  "Cada instante contigo es un pequeño milagro 🌸",
  "Me encanta cómo haces que todo se sienta más ligero 💛",
  "Tu cariño es un refugio donde siempre quiero estar 💚",
  "Eres la razón por la que sonrío sin razón aparente 💖",
  "Cada mensaje tuyo deja una huella dulce en mi corazón 🌷",
  "Me encanta cómo tu presencia transforma mi día 💛",
  "Tu ternura provoca que todo se vuelva más bonito 💚",
  "Eres mi pensamiento constante lleno de cuidado 💖",
  "Cada gesto tuyo me hace sentir que todo está bien 🌸",
  "Me encanta la manera en que me haces sentir especial 💛",
  "Tu sonrisa tiene un efecto que nunca quiero perder 💚",
  "Eres mi refugio de ternura y cariño 💖",
  "Cada instante contigo provoca un suspiro de felicidad 🌷",
  "Me encanta cómo me llenas de calma y alegría 💛",
  "Tu presencia convierte todo en algo dulce 💚",
  "Eres mi pensamiento más bonito y querido 💖"
];



const loveBtn = document.getElementById('loveBtn');
const loveNote = document.getElementById('loveNote');
const yearSpan = document.querySelector('.year');
let currentMessageIndex = 0;
let messageTimeout = null;

// Mostrar año actual
yearSpan.textContent = new Date().getFullYear();

// Función para mostrar el siguiente mensaje
function showNextMessage() {
  // Cancelar timer anterior si existe
  if (messageTimeout) {
    clearTimeout(messageTimeout);
    messageTimeout = null;
  }

  // Obtener mensaje actual
  loveNote.textContent = loveMessages[currentMessageIndex];
  loveNote.hidden = false;

  // Avanzar al siguiente mensaje (circular)
  currentMessageIndex = (currentMessageIndex + 1) % loveMessages.length;
}

// Función para ocultar el mensaje
function hideMessage() {
  loveNote.hidden = true;
}

// Mostrar/Ocultar mensaje al hacer clic
loveBtn.addEventListener('click', () => {
  if (loveNote.hidden) {
    showNextMessage();
    // Ocultar después de 5 segundos (5000ms)
    messageTimeout = setTimeout(hideMessage, 5000);
  } else {
    hideMessage();
    if (messageTimeout) {
      clearTimeout(messageTimeout);
      messageTimeout = null;
    }
  }
});

// Atajo de teclado (L para amor)
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'l') {
    loveBtn.click();
  }
});