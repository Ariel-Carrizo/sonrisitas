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

// seleccion de personaje

//Agregando imagenes de metodo de lavado por zona
   
  function subirFoto() {
      var img = new Image();
      document.getElementById('lavado').appendChild(img);
      img.src = 
'file:///C:/Users/carri/Desktop/SONRISITAS_JAVASCRPIT/assets/primer_paso_lavado.png'; 
  }
//Agregando imagenes de metodo de lavado por zona  



