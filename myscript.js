const colors = ['black', 'silver', 'gray', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'orange', 'aliceblue', 'antiquewhite', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon'];

const numbers = [5, 10, 45, 87, 65, 25, 63, 41, 78, 66, 23, 97, 7, 11, 32, 75, 88, 91];

const things = ['HOUSE MD', 'BREAKING BAD', 'THE OFFICE', 'DEXTER', 'RICK AND MORTY'];


const concatenado = `background-color: ${colors[12]}`;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const boton = document.querySelector('#boton1');
const body = document.querySelector('body');


//Saca numeros pares
function cazarPares(lista){
  const listaPares = [];
  lista.forEach(element => {
    if(element%2 === 0){
      listaPares.push(element);
    }
  });  
  return listaPares;
}


//retorna numeros mayores a 50
function mayoresCincuenta(lista){
  const mayores = [];
  lista.forEach(element=>{
    if(element > 50){
      mayores.push(element)
    }
  })
  return mayores;
}

//convierte a minusculas
function minusculas(lista){
  const listaMinusculas = [];
  lista.forEach(element=>{
    const min = element.toLowerCase();
    listaMinusculas.push(min)    
  })
  return listaMinusculas;
}


const nombreUno = 'Micheal';
const apellidoUno = 'Scott';
const direccionUno = 'Scranton, PA';
const ocupacionUno = 'Gerente';

//JSON java script object notation
const personaUno = {
  nombre: nombreUno,
  apellido: apellidoUno,
  direccion: direccionUno,
  ocupacion: ocupacionUno
}

const nombreDos = 'Gregory';
const apellidoDos = 'House';
const direccionDos = 'Scranton, PA';
const ocupacionDos = 'Doctor'


//JSON tiene dos funciones: stringify y parse

function procesarPersonas(persona){
  document.querySelector('textarea').textContent = JSON.stringify(persona, null, 4);
}

boton.onclick = (e) => {
  document.querySelector('textarea').textContent = JSON.stringify(procesarFormulario(), null, 4);
}


function procesarFormulario(){
  const persona = {
    nombre: '',
    apellido: '',
    pais: ''
  }

  const textos = document.querySelectorAll('input[type=text]');
  persona.nombre = textos[0].value;
  persona.apellido = textos[1].value;
  persona.pais = document.querySelector('#country').value;

  return persona;
}

