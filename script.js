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
    title: "Ingresa tu nombre para comenzar",
    input: "text",
    showCancelButton: true,
  }).then((userName) => {
    if (userName.value) {
      usuarioNombre = userName.value;
      nombre = [];
      nombre.push(usuarioNombre);
      }
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
  }).then((userAge) => {
    if (userAge.value) {
      usuarioEdad = userAge.value;
      edad = [];
      edad.push(usuarioEdad);
      }
  });
};

// seleccion de dia o noche
document.getElementById("dia").addEventListener("click", lightMode);
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

document.getElementById("noche").addEventListener("click", darkMode);
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

//personajes
document.getElementById("pipo").onclick = function () {
  Swal.fire({
    text: "Yo soy Pipo el Hipo celeste, me gusta desayunar frutas y siempre lavarme los dientes despues de cada comida. ¡No dudes en elegirme para acompañarte a lavar los dientes esta vez!",
    imageUrl: "./assets/hipo_azul_2.png",
    imageHeight: 400,
    imageAlt: "Bienvenida Pipo",
  });
};
document.getElementById("pipa").onclick = function () {
  Swal.fire({
    text: "¡Mi nombre es Pipa la Hipa Rosada! Soy muy curiosa y me encanta comer los vegetales que me prepara mi mama. Seria un placer acompañarte a lavarte los dientes en esta oportunidad.",
    imageUrl: "./assets/hipo_rosado_2.png",
    imageHeight: 400,
    imageAlt: "Bienvenida Pipa",
  });
};
document.getElementById("pepe").onclick = function () {
  Swal.fire({
    text: "Yo soy Pepe el Hipo Verde, Me encanta pasar tiempo en la naturaleza, escuchar aves y ver flores. ¡No dudes en elegirme para acompañarte a lavar los dientes esta vez!",
    imageUrl: "./assets/hipo_verde.png",
    imageHeight: 400,
    imageAlt: "Bienvenida Pipo",
  });
};

document.getElementById("pepo").onclick = function () {
  Swal.fire({
    text: "Yo soy Pepo el Hipo Gris, Soy el mayor de mis hermanos y me toca hacer los trabajos pesados ¡Vamos a comenzar lavandonos los dientes para fortalecer sus defensas!",
    imageUrl: "./assets/hipo_gris.png",
    imageHeight: 400,
    imageAlt: "Bienvenida Pipo",
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
  var audio = document.getElementById("audio");
audio.play();
  if (remainingTime === 0) {
    isStopped = true;
    clearInterval(timer);
    timeoutAudio.play();
    audio.pause();
    audio.currentTime = 0;
    Swal.fire({
      imageUrl: "./assets/queHago.png",
      imageHeight: 400,
      imageWidth: 400,
      imageAlt: "siguiente paso",
    });
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
        "./assets/finLavado.jpg",
      imageWidth: 350,
      imageHeight: 350,
      imageAlt: "mensaje de finalizacion",
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

//FETCH
function sendData () {
  
  var data = new FormData();
  data.append("name", document.getElementById("name").value);
  data.append("email", document.getElementById("email").value);
 
  fetch("2-dummy.php", {
  method: "POST",
    body: data
  })
 
  .then((result) => {
    if (result.status != 200) { throw new Error("Error de respuesta de servidor"); }
    return result.text();
  })
 
  return true;
}


