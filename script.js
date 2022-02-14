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
// Array con todas las imágenes que deseamos que se vayan cambiando a
        // cada clic
        var imagenes=Array("./assets/lavado_dientes-01.png","./assets/lavado_dientes-02.png","./assets/lavado_dientes-03.png","./assets/lavado_dientes-04.png","./assets/lavado_dientes-05.png","./assets/lavado_dientes-06.png");
        var imagenVisible=0;
     
        // Función que cambia la imagen actual por la siguiente
        function cambiar(img)
        {
            imagenVisible++;
            if(imagenVisible>=imagenes.length)
            {
                alert("Hemos terminado! que sonrisa mas brillante!!!");
                imagenVisible=0;
            }
            img.src=imagenes[imagenVisible];
            cargarSiguienteImagen();
        }
     
        /**
         * Esta función carga la siguiente imagen para no tener que esperar su carga
         * en el momento de mostrarla.
         */
        function cargarSiguienteImagen()
        {
            if((imagenVisible+1)<imagenes.length)
            {
                var imgTmp=new Image();
                imgTmp.src=imagenes[imagenVisible+1];
            }
        }
     
        window.onload=function() {
            cargarSiguienteImagen();
        }
        