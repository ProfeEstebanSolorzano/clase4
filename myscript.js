const boton = document.querySelector('#boton1');

boton.onclick = () => {
    persona.procesar();
}

const procesarFormulario = () => {
    //inputs de texto
    const textos = document.querySelectorAll('input[type=text]');
    persona[textos[0].name] = textos[0].value;
    persona['apellido'] = textos[1].value;

    persona.pais = document.querySelector('#country').value;

    //radio buttons
    // const lenguajes = document.querySelectorAll('input[name="fav_language"]');
    // lenguajes.forEach(lenguaje => {
    //     if (lenguaje.checked) persona.lenguajeFavorito = lenguaje.value;
    //     //persona.lenguajeFavorito = lenguaje.checked ?  lenguaje.value : '';       
    // });

    //persona.lenguajeFavorito = document.querySelector('input[name="fav_language"]:checked') ? document.querySelector('input[name="fav_language"]:checked').value : 'no selecciono';

    try {
        persona.lenguajeFavorito = document.querySelector('input[name="fav_language"]:checked').value;
    } catch (error) {
        console.log(`Se produjo un error: ${error}`);
        persona.lenguajeFavorito = 'no selecciona';
    }

    persona.rangoDeEdad = document.querySelector('input[name="age"]:checked').value;

    //checkbox
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(vehiculo => {
        persona.modoDeTransporte.push(vehiculo.value);
    });

    if (persona.pais === '') {
        alert('Por favor seleccione un pais');
    } else {
        document.querySelector('#pizarra').textContent = JSON.stringify(persona, null, 4);
    }
    return false;
}

const persona = {
    apellido: '',
    pais: '',
    lenguajeFavorito: '',
    rangoDeEdad: '',
    modoDeTransporte: [],
    procesar: procesarFormulario
}