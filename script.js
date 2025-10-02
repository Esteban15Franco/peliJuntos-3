// Mensajes de amor en orden secuencial
const loveMessages = [
  "mi sol 🌻: incluso en medio de mares embravecidos, tu risa es mi ancla.",
  "Cada momento contigo es una aventura más emocionante que navegar en el Perla Negra 💚",
  "Eres mi tesoro más valioso, más que todo el oro maldito de Cortés 💖",
  "Si fueras una película, serías mi saga favorita: siempre querría verte una y otra vez 🎬💚",
  "Eres mi final feliz, incluso en una historia de piratas 🌻💚",
  "Como Will con Elizabeth, no puedo imaginar mi vida sin ti ⚔️💖",
  "Tu amor es mi brújula, siempre me guía al rumbo correcto 💚✨",
  "Eres la melodía de mi corazón, más dulce que cualquier canción de marineros 🎵💚",
  "Contigo, hasta los mares más oscuros se llenan de color 🌈💚",
  "Si el amor fuera un viaje, contigo cruzaría todos los océanos 🚢💖",
  "Eres mi puerto seguro, mi hogar en cualquier tormenta 🏝️💚",
  "No necesito ron ni tesoros, tu sonrisa es suficiente ☕💖",
  "Si los abrazos fueran estrellas, contigo tendría todo el cielo sobre el mar 🌌💚",
  "Cada mensaje tuyo es como una carta de amor en una botella ✍️💖",
  "Eres la razón por la que creo en los milagros, como escapar de la maldición 💚✨",
  "Mi corazón baila como Jack Sparrow cada vez que pienso en ti 💃💖",
  "Si fueras una canción de taberna, sería mi favorita para siempre 🎶💚",
  "Eres mi sol en altamar y mi luna en las noches de navegación 🌞🌙💖",
  "Contigo aprendí que amar es tan emocionante como ser un pirata 💚😄",
  "Tu risa es la melodía más hermosa de los siete mares 🎵💖",
  "Si el mundo se hundiera como un barco, aún así te elegiría 💚🌍",
  "Cada pensamiento sobre ti me hace sentir mariposas como velas al viento 🦋💖",
  "Eres mi verde esperanza en medio de mares malditos 💚🌿",
  "Si el amor tuviera sabor, contigo sería ron dulce 🍹💖",
  "Mi corazón tiene tu nombre grabado como en la proa de un barco 💚❤️",
  "Eres la inspiración detrás de mis mejores travesías 😄💖",
  "Si fueras un paisaje, serías un atardecer en altamar 🌅💚",
  "Cada día contigo es una aventura pirata 💖📖",
  "Eres la chispa que enciende mi brújula hacia ti 💚✨",
  "Contigo, cada instante se siente eterno como una leyenda de mar 💖⏳",
  "Si pudiera dibujar mi amor, llenaría el mapa entero con tu nombre 🎨💚",
  "Eres mi flor favorita, más preciosa que cualquier tesoro escondido 🌻💖",
  "Cada abrazo tuyo es mi refugio en una tormenta marina 💚🤗",
  "Si los besos fueran estrellas, contigo tendría toda la constelación pirata 🌌💖",
  "Eres mi poema favorito, escrito como un diario de capitán 💚✍️",
  "Mi corazón canta tu nombre como las sirenas del mar 🎵💖",
  "Contigo aprendí que el amor verdadero no necesita brújula 💚✨",
  "Eres mi arcoíris tras una tormenta en el Caribe 🌈💖",
  "Si fueras un sueño, nunca querría despertar de este viaje pirata 💚💤",
  "Tu amor me hace sentir invencible, como Jack enfrentando maldiciones 💖🛡️",
  "Eres la magia que transforma cada viaje en aventura 💚✨",
  "Cada mirada tuya es un universo, más vasto que los siete mares 🌌💖",
  "Eres mi tripulación favorita en cada travesía 💚🤍",
  "Si el tiempo se detuviera, lo haría solo para quedarme navegando contigo ⏳💖",
  "Mi corazón late solo para ti, como tambores de abordaje 💚❤️",
  "Eres más dulce que cualquier tesoro pirata 🍬💖",
  "Cada día contigo es una expedición al paraíso 💚🌟",
  "Si fueras un color, serías el verde de la esmeralda del mar 💚🌿",
  "Eres la canción de mar que quiero en repeat toda mi vida 🎵💖",
  "Mi amor por ti crece como las olas en alta mar 💚😄",
  "Si el cielo tuviera un nombre, sería tuyo 💖☁️",
  "Eres la razón por la que creo en las leyendas piratas 💚✨",
  "Cada mensaje tuyo ilumina mi viaje 💖🌞",
  "Eres el abrazo que calma cualquier tormenta marina 💚🌧️🤗",
  "Si fueras un perfume, serías el aire salado del Caribe 🌸💖",
  "Mi mundo es más bonito porque navegas en él conmigo 💚🌎",
  "Eres la chispa de mi corazón de corsario 💖🔥",
  "Cada palabra tuya es un tesoro enterrado en mi alma 💚💎",
  "Si el amor tuviera forma, serías tú, mi sirena 💖❤️",
  "Eres mi mejor pensamiento al amanecer en cubierta 💚🌅",
  "Cada día contigo es un botín que agradezco 💖🎁",
  "Eres mi refugio seguro en cualquier isla perdida 💚⛅",
  "Si fueras un dulce, te saborearía como un ron con miel 🍭💖",
  "Mi corazón sonríe como Jack cada vez que piensa en ti 💚😄",
  "Eres el sol que ilumina mi travesía 🌞💖",
  "Cada instante contigo es un tesoro de los mares 💚💎",
  "Si el mundo tuviera música, tú serías mi balada pirata favorita 🎶💖",
  "Eres mi razón de sonreír incluso en naufragios 💚😌",
  "Cada beso tuyo es un capítulo en mi diario de abordo 💖💋",
  "Si pudiera atraparte en palabras, nunca dejaría de escribir tu leyenda 💚✍️",
  "Eres mi calma en medio del rugido del mar 💖🌿",
  "Cada abrazo tuyo es un viaje en galeón a la felicidad 💚⛵",
  "Si el amor fuera un idioma, contigo sería jerga pirata 💖📖",
  "Eres mi pensamiento feliz en cada amanecer en cubierta 💚🌞",
  "Cada latido de mi corazón te pertenece como un juramento pirata 💖❤️",
  "Si fueras un paisaje, serías el mar Caribe al atardecer 🌄💚",
  "Eres el sueño pirata del que nunca quiero despertar 💖💤",
  "Cada mensaje tuyo ilumina mi brújula al amor 💚✨",
  "Si el universo tuviera un centro, estaría en tu mirada 🌌💖",
  "Eres mi felicidad hecha tesoro 💚😄",
  "Cada momento contigo vale más que todo el oro de Cortés 💖🏆",
  "Si el amor tuviera sabor, contigo sería ron y miel 🍫💚",
  "Eres mi aventura favorita en altamar 💖🗺️",
  "Cada día contigo es un poema marinero 💚✍️",
  "Si pudiera elegir mil vidas, todas serían contigo en cubierta 💖❤️",
  "Eres la luz que guía mi navío 💚✨",
  "Cada mirada tuya derrite mi alma como fuego en la pólvora 💖💚",
  "Si fueras un regalo, serías mi tesoro más preciado 💝💖",
  "Eres mi pensamiento constante como el vaivén de las olas 💚😄",
  "Cada instante sin ti es como perder el rumbo 💖💚",
  "Si el amor fuera un viaje, contigo iría más allá de los siete mares 🚀💖",
  "Eres mi inspiración de pirata enamorado 💚✨",
  "Cada abrazo tuyo es un refugio en islas secretas 💖🤗",
  "Si fueras un día, serías el más hermoso del calendario pirata 📅💚",
  "Eres mi razón para creer en lo imposible 💖🌟",
  "Cada segundo contigo es un regalo del mar 💚🎁",
  "Si el corazón hablara, gritaría tu nombre como un capitán 💖❤️",
  "Eres mi paz en medio de los cañonazos 💚🌿",
  "Cada sonrisa tuya ilumina mi cubierta 🌞💖",
  "Si fueras una estrella, guiarías mi barco 🌌💚",
  "Eres mi todo y más, incluso más que el Perla Negra 💖💚",
  "Cada palabra tuya es un tesoro escondido 💎💖",
  "Si el mundo fuera un mapa, tú serías mi X marcada 🎨💚",
  "Eres mi razón de soñar despierto en alta mar 💖✨",
  "Cada mensaje tuyo hace latir mi corazón como tambores de abordaje 💚❤️",
  "Si fueras una canción, serías la balada de mi vida 🎵💖",
  "Eres mi alegría constante, más que un cofre de oro 💚😄",
  "Cada instante contigo es eterno como las leyendas del mar 💖⏳",
  "Si el amor tuviera un color, sería el verde de tus ojos 💚💖",
  "Eres mi sueño pirata hecho realidad 💚💤",
  "Cada beso tuyo es fuego más fuerte que la pólvora 🔥💖",
  "Si el universo tuviera un corazón, sería el tuyo 🌌💚",
  "Eres mi canción favorita que nunca se acaba 🎶💖",
  "Cada día contigo es una aventura de película 💚✍️",
  "Si fueras un perfume, serías la brisa marina 🌸💖",
  "Eres la sonrisa que alegra mis días como sol en cubierta 💚😄",
  "Cada instante sin ti me recuerda que eres mi tesoro 💖❤️",
  "Si pudiera dibujarte, haría un mapa del tesoro solo para ti 🎨💚",
  "Eres mi razón de ser feliz en cualquier puerto 💖😌",
  "Cada abrazo tuyo me llena de paz como el mar en calma 💚🤗",
  "Si fueras una película, serías Piratas del Caribe, mi favorita 🎬💖",
  "Eres la luz que ilumina mi brújula 💚✨",
  "Cada pensamiento sobre ti es dulce como ron con miel 🍯💖",
  "Eres mi refugio en cualquier tormenta pirata 🌧️💖",
  "Cada mensaje tuyo hace que mi corazón baile como Jack 💃💚",
  "Si fueras un sueño, no querría despertar de esta travesía 💖💤",
  "Eres mi tesoro más preciado en todos los mares 💎💚",
  "Cada mirada tuya derrite mi alma como oro fundido 💖💚",
  "Si el mundo se hundiera, aún así te elegiría 💖🌎",
  "Eres la melodía de mis viajes 🎵💚",
  "Cada instante contigo vale más que un cofre de oro 💖🏆",
  "Si pudiera darte una estrella, llenaría el mar de ellas 🌟💚",
  "Eres mi alegría constante 💖😄",
  "Cada día contigo es un regalo del destino marino 💚🎁",
  "Si el amor fuera un viaje, contigo iría al fin del mundo 🚀💖",
  "Eres mi pensamiento feliz en cada amanecer 🌞💚",
  "Cada abrazo tuyo es un refugio en altamar 💖🤗",
  "Si fueras un dulce, serías más dulce que el ron con miel 🍭💚",
  "Eres mi paz en medio de la marea 💖🌿",
  "Cada beso tuyo es una aventura pirata 💋💚",
  "Si el universo tuviera un centro, estaría en tu mirada 🌌💖",
  "Eres la razón por la que creo en la magia de los mares 💚✨",
  "Cada palabra tuya ilumina mi brújula 💖🌞",
  "Si el cielo tuviera un nombre, sería el tuyo ☁️💚",
  "Eres mi compañía favorita en todos los viajes 💖🤍",
  "Cada pensamiento sobre ti me hace sonreír como marinero feliz 😄💚",
  "Si el mundo tuviera música, tú serías mi balada pirata 🎶💖",
  "Eres mi todo y más allá de los mares 💚❤️",
  "Cada día contigo es un capítulo de aventuras piratas 💖📖",
  "Si fueras un color, serías el verde esmeralda del Caribe 💚🌿",
  "Eres la chispa que enciende mi corazón como pólvora 💖🔥",
  "Cada instante contigo es eterno como la leyenda del Perla Negra ⏳💚",
  "Si pudiera atraparte en palabras, escribiría todo un mapa pirata ✍️💖",
  "Eres mi alegría constante 💚😄",
  "Cada abrazo tuyo es un viaje al paraíso marino 💖⛵",
  "Si el amor fuera un idioma, contigo sería jerga de corsario 📖💚",
  "Eres mi refugio seguro en cualquier isla secreta 💖🌿",
  "Cada beso tuyo me lleva directo al cielo pirata 💋💚",
  "Si fueras un día, serías la aurora en cubierta 📅💖",
  "Eres mi inspiración diaria en alta mar 💚✨",
  "Cada instante sin ti me recuerda que eres mi tesoro 💖❤️",
  "Si el corazón hablara, solo diría tu nombre como juramento 💚💖",
  "Eres mi felicidad hecha aventura 😄💚",
  "Cada sonrisa tuya ilumina mi cubierta 🌞💖",
  "Si fueras una estrella, guiarías mis noches de navegación 🌌💚",
  "Eres mi pensamiento feliz en cada tormenta 💖😌",
  "Cada segundo contigo es un regalo de los mares 🎁💚",
  "Si el amor tuviera forma, sería la tuya, mi sirena 💖❤️",
  "Eres mi calma en medio del estruendo de cañones 🌿💚",
  "Cada palabra tuya es un tesoro pirata 💎💖",
  "Si el mundo fuera un mapa, tú serías mi X marcada 🎨💚",
  "Eres mi razón de soñar con mares infinitos ✨💖",
  "Cada mensaje tuyo hace latir más fuerte mi corazón 💚❤️",
  "Si fueras una canción, serías mi balada de amor pirata 🎵💖",
  "Eres mi alegría constante 💚😄",
  "Cada instante contigo es eterno como el Caribe ⏳💖",
  "Si el amor tuviera un color, sería el verde de tu mirada 💚💖",
  "Eres mi sueño hecho realidad en altamar 💤💚",
  "Cada beso tuyo es fuego más fuerte que un cañón 🔥💖"
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