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

//timer de 30 segundos con boton de cepillar

const countContainer = document.getElementById("countdown-number");
const startButton = document.getElementById("start");
const timeoutAudio = document.getElementById("timeout_audio");
var remainingTime = 30;
var timer;
var isStopped = true;

// Comenzar timer
const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    countContainer.innerHTML = remainingTime;
    timer = setInterval(renderTime, 1000);
  }
};

// Sonido de finalizacion de zona (me marca algun error de cookies o 3rd party)
timeoutAudio.src = "http://soundbible.com/grab.php?id=1252&type=mp3";
timeoutAudio.load();
startButton.onclick = startTimer;

// funcion que muestra el timer
const renderTime = () => {
  remainingTime -= 1;
  countContainer.innerHTML = remainingTime;
  if (remainingTime === 0) {
  isStopped = true;
  clearInterval(timer);
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




