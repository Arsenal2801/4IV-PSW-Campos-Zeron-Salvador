function vtext() {
    // sólo se aceptan letras mayúsculas y minúsculas. No espacios ni acentos.
    var char = /^[A-Za-z]+$/;
    var vEmail = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    if (document.querySelector('#nombre').value.match(char) && document.querySelector('#appat').value.match(char) &&
            document.querySelector('#appmat').value.match(char) && document.querySelector('#email').value.match(vEmail)) {
        return true;
    }
    if (document.querySelector('#nombre').value == "" || document.querySelector('#appat').value == ""
            || document.querySelector('#appmat').value == "" || document.querySelector('#email').value == "" || document.querySelector('#edad').value == "") {
        alert('Por favor, complete todos los espacios')
        event.preventDefault()
    } else {
        alert('Por favor, ingrese únicamente letras (sin acentos ni espacios)');
        event.preventDefault()
    }
}

function num() {
    // solo se aceptan numeros sin espacios
    var NUM = /^[0-9]+$/;

    if (document.querySelector('#eliminar').value.match(NUM) && document.querySelector('#eliminar').value.trim() !== "") {
        return true;
    }

    if (document.querySelector('#eliminar').value.trim() == "") {
        alert('Por favor, ingrese el ID del usuario')
        event.preventDefault()
    } else {
        alert('Por favor, ingrese únicamente números');
        event.preventDefault()
    }
}

function vTxt() {
    // solo se aceptan numeros sin espacios
    var NUM = /^[0-9]+$/;

    if (document.querySelector('#ID').value.match(NUM) && document.querySelector('#ID').value.trim() !== "") {
        return true;
    }

    if (document.querySelector('#ID').value.trim() == "") {
        alert('Por favor, ingrese el ID del usuario')
        event.preventDefault()
    } else {
        alert('Por favor, ingrese únicamente números');
        event.preventDefault()
    }

}

function vNum() {
    var char = /^[A-Za-z]+$/;
    var vEmail = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    if (document.querySelector('#nombre2').value.match(char) && document.querySelector('#appat2').value.match(char) &&
            document.querySelector('#appmat2').value.match(char) && document.querySelector('#email2').value.match(vEmail)) {
        return true;
    }
    if (document.querySelector('#nombre2').value == "" || document.querySelector('#appat2').value == ""
            || document.querySelector('#appmat2').value == "" || document.querySelector('#edad2').value == "" || document.querySelector('#email2').value == "") {
        alert('Por favor, complete todos los espacios')
        event.preventDefault()
    } else {
        alert('Por favor, ingrese únicamente letras (sin acentos ni espacios)');
        event.preventDefault()
    }
}

function validar(){
    vTxt();
    vNum();
}