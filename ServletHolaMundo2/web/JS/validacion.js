function vChar() {
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

function vNum1() {
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

function vValidar() {
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

function vVal() {
    var char = /^[A-Za-z]+$/;
    var vEmail = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    if (document.querySelector('#Nombre').value.match(char) && document.querySelector('#Appat').value.match(char) &&
            document.querySelector('#Appmat').value.match(char) && document.querySelector('#Email').value.match(vEmail)) {
        return true;
    }
    if (document.querySelector('#Nombre').value == "" || document.querySelector('#Appat').value == ""
            || document.querySelector('#Appmat').value == "" || document.querySelector('#Edad').value == "" || document.querySelector('#Email').value == "") {
        alert('Por favor, complete todos los espacios')
        event.preventDefault()
    } else {
        alert('Por favor, ingrese únicamente letras (sin acentos ni espacios)');
        event.preventDefault()
    }
}

function validar(){
    vVal()
    vValidar()
}