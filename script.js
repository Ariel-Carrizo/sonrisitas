//Contador de visitas de la pagina por usuario (para avisarle a la lavada 180 que debe cambiarlo)
var counterContainer = document.querySelector(".website-counter");
var reseteoButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
  if (visitCount == 5) {
    Swal.fire({
      title: "¡Es hora de cambiar el cepillo!",
      imageUrl: "./assets/cepilloViejo.jpg",
      imageWidth: 600,
      imageHeight: 400,
    });
  }
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

//Boton para resetear cuando se compre cepillo nuevo con toast.
reseteoButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title:
      "¡Muy bien! No te olvides lavar los dientes por lo menos dos veces al día.",
  });
});

//ingreso de datos

//ingreso de nombre
document.getElementById("nombre").onclick = function () {
  Swal.fire({
    title: "¿Como te llamás?",
    input: "text",
    inputValidator: (value) => {
      if (!value) {
        return "Por favor ingresa tu nombre para continuar...";
      }
    },
  });
};

//ingreso de edad
document.getElementById("edad").onclick = function () {
  Swal.fire({
    title: "¿Cuantos años tienes?",
    icon: "question",
    input: "range",
    inputLabel: "Mi edad es: ",
    inputAttributes: {
      min: 2,
      max: 18,
      step: 1,
    },
    inputValue: 9,
  });
};

// seleccion de dia o noche
function darkMode() {
  var element = document.body;
  element.className = "dark-mode";
  var audio = new Audio("http://soundbible.com/grab.php?id=295&type=mp3");
  audio.play();
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 3000);
}

function lightMode() {
  var element = document.body;
  element.className = "light-mode";
  var audio = new Audio("http://soundbible.com/grab.php?id=1218&type=mp3");
  audio.play();
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 3000);
}
// seleccion de dia o noche

//personajes
document.getElementById("pipo").onclick = function () {
  Swal.fire({
    text: "Yo soy Pipo el Hipo, me gusta desayunar frutas y siempre lavarme los dientes despues de cada comida. ¡No dudes en elegirme para acompañarte a lavar los dientes esta vez!",
    imageUrl: "./assets/hipo_azul.png",
    imageHeight: 200,
    imageAlt: "A tall image",
  });
};
document.getElementById("pipa").onclick = function () {
  Swal.fire({
    text: "¡Mi nombre es Pipa la Hipa! Soy muy curiosa y me encanta comer los vegetales que me prepara mi mama. Seria un placer acompañarte a lavarte los dientes en esta oportunidad.",
    imageUrl: "./assets/hipo_rosado.png",
    imageHeight: 200,
    imageAlt: "A tall image",
  });
};

//timer de 30 segundos con boton de cepillar

const countContainer = document.getElementById("countdown-number");
const startButton = document.getElementById("start");
const timeoutAudio = document.getElementById("timeout_audio");
var remainingTime = 30;
var timer;
var isStopped = true;

// Comenzar timer
const inicioContador = () => {
  if (isStopped) {
    isStopped = false;
    countContainer.innerHTML = remainingTime;
    timer = setInterval(renderTime, 1000);
  }
};

// Sonido de finalizacion de zona (me marca algun error de cookies o 3rd party)
timeoutAudio.src = "http://soundbible.com/grab.php?id=1003&type=mp3";
timeoutAudio.load();
startButton.onclick = inicioContador;

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
  "./assets/lavado_dientes-02.png",
  "./assets/lavado_dientes-03.png",
  "./assets/lavado_dientes-04.png",
  "./assets/lavado_dientes-05.png"
);
var imagenVisible = 0;

// Función que cambia la imagen actual por la siguiente
function cambiar(img) {
  imagenVisible++;
  if (imagenVisible >= imagenes.length) {
    Swal.fire({
      title: "¡Hemos terminado,que sonrisa mas brillante!",
      imageUrl:
        "https://img.freepik.com/free-vector/happy-tooth-cute-tooth-brush-your-teeth-with-toothpaste_115990-605.jpg?w=740",
      imageWidth: 350,
      imageHeight: 350,
      imageAlt: "Custom image",
    });
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
