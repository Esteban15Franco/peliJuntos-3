// Mensajes de amor en orden secuencial
const loveMessages = [
  "Adi, mi sol verde 🌻: incluso cuando el mundo se cae, tu risa me sostiene.",
  "Cada momento contigo es bellísimo, amo ver películas contigo amada mía 💚",
  "Eres mi kryptonita, la única cosa en el universo que puede dejarme sin fuerzas... de tanto amor 💖",
  "Si fueras una película, serías ese clásico que veo una y otra vez y nunca me cansa 🎬💚",
  "Eres el final feliz de todas mis historias 💚🌻",
  "Como Superman con Lois Lane, no puedo imaginar mi vida sin ti 🦸‍♂️💖",
  "Tu amor es mi superpoder 💚✨",
  "Eres la banda sonora de mi corazón 🎵💚",
  "Contigo, hasta los días grises se llenan de color 🌈💚",
  "Si el amor fuera un viaje, contigo llegaría al infinito y más allá 🚀💖",
  "Eres mi lugar seguro, mi hogar donde quiera que esté 🏡💚",
  "No necesito café por las mañanas, tu sonrisa es suficiente ☕💖",
  "Si los abrazos fueran estrellas, contigo tendría todo el cielo 🌌💚",
  "Cada mensaje tuyo es como un poema que me hace sonreír ✍️💖",
  "Eres la razón por la que creo en los milagros 💚✨",
  "Mi corazón late en salsa cada vez que pienso en ti 💃💖",
  "Si fueras canción, serías mi hit favorito del año 🎶💚",
  "Eres mi sol en los días nublados y mi luna en las noches oscuras 🌞🌙💖",
  "Contigo aprendí que amar es fácil y divertido 💚😄",
  "Tu risa es la melodía que quiero escuchar toda mi vida 🎵💖",
  "Si el mundo se acabara mañana, aún así elegiría estar contigo 💚🌍",
  "Cada pensamiento sobre ti me hace sentir mariposas 🦋💖",
  "Eres mi verde esperanza en medio del caos 💚🌿",
  "Si el amor tuviera sabor, contigo sería chocolate 🍫💖",
  "Mi corazón tiene tu nombre escrito en cada latido 💚❤️",
  "Eres la inspiración detrás de mis mejores sonrisas 😄💖",
  "Si fueras un paisaje, serías un atardecer perfecto 🌅💚",
  "Cada día contigo es un capítulo de felicidad 💖📖",
  "Eres la chispa que enciende mi alegría 💚✨",
  "Contigo, cada momento se siente eterno 💖⏳",
  "Si pudiera dibujar mi amor por ti, llenaría todo el universo 🎨💚",
  "Eres mi flor favorita que nunca deja de florecer 🌻💖",
  "Cada abrazo tuyo es un refugio que quiero habitar 💚🤗",
  "Si los besos fueran estrellas, contigo tendría la galaxia entera 🌌💖",
  "Eres mi poema favorito escrito por el destino 💚✍️",
  "Mi corazón canta tu nombre cada segundo 🎵💖",
  "Contigo aprendí que el amor verdadero sí existe 💚✨",
  "Eres mi arcoíris después de la tormenta 🌈💖",
  "Si fueras un sueño, nunca querría despertar 💚💤",
  "Tu amor me hace sentir invencible 💖🛡️",
  "Eres la magia que transforma lo ordinario en extraordinario 💚✨",
  "Cada mirada tuya es un universo en sí mismo 🌌💖",
  "Eres mi compañía favorita en todos los momentos 💚🤍",
  "Si el tiempo se detuviera, lo haría solo para quedarme contigo ⏳💖",
  "Mi corazón late solo para ti 💚❤️",
  "Eres el dulce más dulce que puedo imaginar 🍬💖",
  "Cada día contigo es una aventura que quiero vivir mil veces 💚🌟",
  "Si fueras un color, serías el verde de mi esperanza 💚🌿",
  "Eres la melodía que quiero en repeat toda mi vida 🎵💖",
  "Mi amor por ti crece con cada sonrisa tuya 💚😄",
  "Si el cielo tuviera un nombre, sería el tuyo 💖☁️",
  "Eres la razón por la que creo en los cuentos de hadas 💚✨",
  "Cada mensaje tuyo ilumina mi día 💖🌞",
  "Eres el abrazo que calma todas mis tormentas 💚🌧️🤗",
  "Si fueras un perfume, serías mi aroma favorito 🌸💖",
  "Mi mundo es más bonito porque tú estás en él 💚🌎",
  "Eres la chispa que enciende mi corazón 💖🔥",
  "Cada palabra tuya es un tesoro que guardo en mi corazón 💚💎",
  "Si el amor tuviera forma, sería tú 💖❤️",
  "Eres mi mejor pensamiento al despertar 💚🌅",
  "Cada día contigo es un regalo que agradezco 💖🎁",
  "Eres mi refugio seguro en cualquier tormenta 💚⛅",
  "Si fueras un dulce, te comería todos los días 🍭💖",
  "Mi corazón sonríe cada vez que pienso en ti 💚😄",
  "Eres el sol que ilumina mis días grises 🌞💖",
  "Cada instante contigo es un tesoro 💚💎",
  "Si el mundo tuviera música, tú serías mi canción favorita 🎶💖",
  "Eres mi razón de sonreír incluso en los peores días 💚😌",
  "Cada beso tuyo es un capítulo de amor 💖💋",
  "Si pudiera atraparte en palabras, nunca dejaría de escribir 💚✍️",
  "Eres mi calma en medio del caos 💖🌿",
  "Cada abrazo tuyo es un viaje a la felicidad 💚✈️",
  "Si el amor fuera un idioma, contigo sería poesía 💖📖",
  "Eres mi pensamiento feliz cada mañana 💚🌞",
  "Cada latido de mi corazón te pertenece 💖❤️",
  "Si fueras un paisaje, serías mi lugar favorito 🌄💚",
  "Eres el sueño del que nunca quiero despertar 💖💤",
  "Cada mensaje tuyo ilumina mi corazón 💚✨",
  "Si el universo tuviera un centro, serías tú 🌌💖",
  "Eres mi felicidad hecha persona 💚😄",
  "Cada momento contigo vale más que el oro 💖🏆",
  "Si el amor tuviera un sabor, sería tú 🍫💚",
  "Eres mi aventura favorita 💖🗺️",
  "Cada día contigo es como un poema lleno de amor 💚✍️",
  "Si pudiera elegir mil vidas, todas serían contigo 💖❤️",
  "Eres la luz que guía mis pasos 💚✨",
  "Cada mirada tuya derrite mi corazón 💖💚",
  "Si fueras un regalo, sería mi más preciado 💝💖",
  "Eres mi pensamiento constante y feliz 💚😄",
  "Cada instante sin ti es un recordatorio de cuánto te amo 💖💚",
  "Si el amor fuera un viaje, contigo iría al infinito 🚀💖",
  "Eres mi inspiración diaria 💚✨",
  "Cada abrazo tuyo es un refugio seguro 💖🤗",
  "Si fueras un día, serías el más hermoso del calendario 📅💚",
  "Eres mi razón para creer en la magia 💖🌟",
  "Cada segundo contigo es un regalo del destino 💚🎁",
  "Si el corazón hablara, solo diría tu nombre 💖❤️",
  "Eres mi paz en medio del ruido del mundo 💚🌿",
  "Cada sonrisa tuya ilumina mi vida 💖🌞",
  "Si fueras una estrella, guiarías mis noches 🌌💚",
  "Eres mi todo y más 💖💚",
  "Cada palabra tuya es un tesoro que guardo 💎💖",
  "Si el mundo fuera un lienzo, tú serías mi obra maestra 🎨💚",
  "Eres mi razón de soñar despierto 💖✨",
  "Cada mensaje tuyo hace latir más fuerte mi corazón 💚❤️",
  "Si fueras una canción, nunca querría que termine 🎵💖",
  "Eres mi alegría constante 💚😄",
  "Cada instante contigo es un momento eterno 💖⏳",
  "Si el amor tuviera un color, sería el verde de tu mirada 💚💖",
  "Eres mi sueño hecho realidad 💚💤",
  "Cada beso tuyo es un fuego que nunca quiero apagar 🔥💖",
  "Si el universo tuviera un corazón, sería el tuyo 💚🌌",
  "Eres mi canción favorita en repeat 🎶💖",
  "Cada día contigo es un poema de amor 💚✍️",
  "Si fueras un perfume, llenaría mi mundo de ti 🌸💖",
  "Eres la sonrisa que alegra mis días 💚😄",
  "Cada instante sin ti es un recordatorio de lo mucho que te amo 💖❤️",
  "Si pudiera dibujarte, haría un cielo entero solo para ti 🎨💚",
  "Eres mi razón de ser feliz 💖😌",
  "Cada abrazo tuyo me llena de paz 💚🤗",
  "Si fueras una película, sería mi favorita 🎬💖",
  "Eres la luz que ilumina mi camino 💚✨",
  "Cada pensamiento sobre ti es dulce como miel 🍯💖",
  "Si el amor tuviera forma, serías tú 💚❤️",
  "Eres mi refugio en cualquier tormenta 🌧️💖",
  "Cada mensaje tuyo hace que mi corazón baile 💃💚",
  "Si fueras un sueño, nunca querría despertar 💖💤",
  "Eres mi tesoro más preciado 💎💚",
  "Cada mirada tuya derrite mi alma 💖💚",
  "Si el mundo se acabara, aún así te elegiría 💖🌎",
  "Eres la melodía de mi vida 🎵💚",
  "Cada instante contigo vale más que todo el oro del mundo 💖🏆",
  "Si pudiera darte una estrella, te daría todas 🌟💚",
  "Eres mi alegría constante 💖😄",
  "Cada día contigo es un regalo que agradezco 💚🎁",
  "Si el amor fuera un viaje, contigo iría al infinito 🚀💖",
  "Eres mi pensamiento feliz cada mañana 💚🌞",
  "Cada abrazo tuyo es un refugio seguro 💖🤗",
  "Si fueras un dulce, te comería todos los días 🍭💚",
  "Eres mi paz en medio del caos 💖🌿",
  "Cada beso tuyo es un capítulo de amor 💋💚",
  "Si el universo tuviera un centro, serías tú 🌌💖",
  "Eres la razón por la que creo en la magia 💚✨",
  "Cada palabra tuya ilumina mi corazón 💖🌞",
  "Si el cielo tuviera un nombre, sería el tuyo ☁️💚",
  "Eres mi compañía favorita en todos los momentos 💖🤍",
  "Cada pensamiento sobre ti me hace sonreír 😄💚",
  "Si el mundo tuviera música, tú serías mi canción favorita 🎶💖",
  "Eres mi todo y más 💚❤️",
  "Cada día contigo es un capítulo de felicidad 💖📖",
  "Si fueras un color, serías el verde de mi esperanza 💚🌿",
  "Eres la chispa que enciende mi corazón 💖🔥",
  "Cada instante contigo es eterno ⏳💚",
  "Si pudiera atraparte en palabras, nunca dejaría de escribir ✍️💖",
  "Eres mi alegría constante 💚😄",
  "Cada abrazo tuyo es un viaje a la felicidad 💖✈️",
  "Si el amor fuera un idioma, contigo sería poesía 📖💚",
  "Eres mi refugio seguro 💖🌿",
  "Cada beso tuyo me hace sentir en el cielo 💋💚",
  "Si fueras un día, sería el más hermoso 📅💖",
  "Eres mi inspiración diaria 💚✨",
  "Cada instante sin ti me recuerda cuánto te amo 💖❤️",
  "Si el corazón hablara, solo diría tu nombre 💚💖",
  "Eres mi felicidad hecha persona 😄💚",
  "Cada sonrisa tuya ilumina mi vida 🌞💖",
  "Si fueras una estrella, guiarías mis noches 🌌💚",
  "Eres mi pensamiento feliz 💖😌",
  "Cada segundo contigo es un regalo del destino 🎁💚",
  "Si el amor tuviera forma, sería tú 💖❤️",
  "Eres mi calma en medio del ruido del mundo 🌿💚",
  "Cada palabra tuya es un tesoro 💎💖",
  "Si el mundo fuera un lienzo, tú serías la obra maestra de Dios 🎨💚",
  "Eres mi razón de soñar despierto ✨💖",
  "Cada mensaje tuyo hace latir más fuerte mi corazón 💚❤️",
  "Si fueras una canción, nunca querría que termine 🎵💖",
  "Eres mi alegría constante 💚😄",
  "Cada instante contigo es un momento eterno ⏳💖",
  "Si el amor tuviera un color, sería el verde de tu mirada 💚💖",
  "Eres mi sueño hecho realidad 💤💚",
  "Cada beso tuyo es un fuego que nunca quiero apagar 🔥💖"
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