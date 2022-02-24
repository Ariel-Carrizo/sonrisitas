//ingreso de datos del usuario
class usuario {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

let persona = prompt("Ingrese su nombre ");
let anios = prompt("Ingrese su edad ");

const usuario1 = new usuario(persona, anios);

const arrayPersona = [];
arrayPersona.push(usuario1);
console.log(arrayPersona);
//ingreso de datos del usuario

// seleccion de dia o noche
function darkMode() {
  var element = document.body;
  element.className = "dark-mode";
}
function lightMode() {
  var element = document.body;
  element.className = "light-mode";
}
// seleccion de dia o noche

// seleccion de personaje

// seleccion de personaje

//timer de 30 segundos
// Select Countdown container
const countContainer = document.getElementById("countdown-number");

// Select action buttons
const startButton = document.getElementById("start");

// Select timeout Audio element
const timeoutAudio = document.getElementById("timeout_audio");

// variable to store count
var remainingTime = 30;

// variable to store time interval
var timer;

// Variable to track whether timer is running or not
var isStopped = true;

// Function to start Timer
const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    countContainer.innerHTML = remainingTime;
    timer = setInterval(renderTime, 1000);
  }
};

// Initialize timeout sound
timeoutAudio.src = "http://soundbible.com/grab.php?id=1252&type=mp3";
timeoutAudio.load();

// Attach onclick event to buttons
startButton.onclick = startTimer;

// function to display time
const renderTime = () => {
  // decement time
  remainingTime -= 1;
  // render count on the screen
  countContainer.innerHTML = remainingTime;
  // timeout on zero
  if (remainingTime === 0) {
    isStopped = true;
    clearInterval(timer);
    // Play audio on timeout
    timeoutAudio.play();
    remainingTime = 30;
  }
};

//Agregando imagenes de metodo de lavado por zona con array con todas las imágenes que deseamos que se vayan cambiando a cada clic
var imagenes = Array(
  "./assets/lavado_dientes-01.png",
  "./assets/lavado_dientes-02.png",
  "./assets/lavado_dientes-03.png",
  "./assets/lavado_dientes-04.png",
  "./assets/lavado_dientes-05.png",
  "./assets/lavado_dientes-06.png"
);
var imagenVisible = 0;

// Función que cambia la imagen actual por la siguiente
function cambiar(img) {
  imagenVisible++;
  if (imagenVisible >= imagenes.length) {
    alert("Hemos terminado! que sonrisa mas brillante!!!");
    imagenVisible = 0;
  }
  img.src = imagenes[imagenVisible];
  cargarSiguienteImagen();
}

//Esta función carga la siguiente imagen para no tener que esperar su carga en el momento de mostrarla.
function cargarSiguienteImagen() {
  if (imagenVisible + 1 < imagenes.length) {
    var imgTmp = new Image();
    imgTmp.src = imagenes[imagenVisible + 1];
  }
}

window.onload = function () {
  cargarSiguienteImagen();
};

//Contador de visitas de la pagina por usuario (para avisarle a la lavada 180 que debe cambiarlo)
var counterContainer = document.querySelector(".website-counter");
var reseteoButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");


if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

//Boton para resetear cuando se compre cepillo nuevo.
reseteoButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});




