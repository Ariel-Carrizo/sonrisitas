//ingreso de datos del usuario
class usuario{                               
  constructor (nombre , edad){
    this.nombre = nombre;
    this.edad = edad;
  }
}

let persona = (prompt('Ingrese su nombre '));
let anios = (prompt('Ingrese su edad '));

const usuario1 = new usuario (persona, anios);

const arrayPersona = [];
arrayPersona.push (usuario1);
console.log(arrayPersona);
//ingreso de datos del usuario


// seleccion de dia o noche
function darkMode() {
  var element = document.body;
  var content = document.getElementById("DarkModetext");
  element.className = "dark-mode";
  content.innerText = "Noche";
}
function lightMode() {
  var element = document.body;
  var content = document.getElementById("DarkModetext");
  element.className = "light-mode";
  content.innerText = "Día";
}
// seleccion de dia o noche

// seleccion de personaje
  //FALTA COMPLETAR QUE CUANDO SE ELIJA UN PERSONAJE SE HAGA UN POP UP DEL METODO DE LAVADO CON EL PERSONAJE SELECCIONADO

// seleccion de personaje

//metodo de lavado de los dientes cada 30 segundos
setTimeout(tiempo1, 30000) 
setTimeout(tiempo2, 60000) 
setTimeout(tiempo3, 90000)
setTimeout(tiempo4, 120000) 

function tiempo1() {
  document.getElementById("lavado").innerHTML = "Vamos a lavar los dientes de arriba";
}
function tiempo2() {
  document.getElementById("lavado").innerHTML = "Vamos a lavar los dientes de abajo";
}
function tiempo3() {
  document.getElementById("lavado").innerHTML = "Vamos a lavar la parte de atras de los dientes";
}
function tiempo4() {
  document.getElementById("lavado").innerHTML = "Hemos terminado, que sonrisa más brillante!!";
}
//metodo de lavado de los dientes cada 30 segundos

//timer para cada zona
var timeLeft = 30;
var elem = document.getElementById('Timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    alert("Pasemos a la siguiente parte!!");
  } else {
    elem.innerHTML = 'Quedan ' + timeLeft + ' segundos para avanzar a la siguiente parte';
    timeLeft--;
  }
}
//timer para cada zona
