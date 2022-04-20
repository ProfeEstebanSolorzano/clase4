const boton = document.querySelector('#boton1');

boton.onclick = () => {

}
const colors = ['black', 'silver', 'gray', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'orange', 'aliceblue', 'antiquewhite', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon'];

const persona = {
    nombre: '',
    apellido: '',
    pais: '',
    lenguaje: '',
    edad: '',
    transporte: []
}

const procesarFormulario = () => {
    persona.nombre = document.querySelector('input[name="firstname"]').value;
    persona.apellido = document.querySelector('input[name="lastname"]').value;
    persona.pais = document.querySelector('#country').value;

    // if (document.querySelector('#html').checked) {
    //     persona.lenguaje = document.querySelector('#html').value;
    // } else if (document.querySelector('#css').checked) {
    //     persona.lenguaje = document.querySelector('#css').value;
    // } else {
    //     persona.lenguaje = document.querySelector('#javascript').value;
    // }

    persona.lenguaje = document.querySelector('input[name="fav_language"]:checked').value;

    persona.edad = document.querySelector('input[name="age"]:checked').value;

    const checkedTransport = document.querySelectorAll('input[type="checkbox"]:checked');

    checkedTransport.forEach(elementoDeLaLista => {
        persona.transporte.push(elementoDeLaLista.value);
    });

    document.querySelector('#pizarra').textContent = JSON.stringify(persona, null, 4);
    return false;
}