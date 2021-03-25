/*
Crear una funcion que se encargue de validar que el formulario deba escribir mas de 5 caracteres en el campo nombre
*/

function validar(formulario) {
    if (formulario.nombre.value.length < 5) {
        alert('Escribe mas de 5 caracteres en el campo nombre')
        formulario.nombre.focus();
        return false;
    }

    //Opcion para que solo se pueda ingresar letras dentro del campo nombrre
    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklñzxcvbnm";
    var checkStr = formulario.nombre.value;
    var allvalid = true;

    for (var i = 0; i < checkStr.length; i++) {
        var ch = checkStr.charAt(i)
        for (var j = 0; j < checkOK.length; j++)
            if (ch == checkOK.charAt(j)) {
                break;
            }
        if (j == checkOK.length) {
            allvalid = false;
            break;
        }
    }
    if (!allvalid) {
        alert("Escribe solo letras en el campo nombre")
        formulario.nombre.focus();
        return false;
    }

    if (formulario.edad.value.length > 2) {
        alert('Escribe maximo 2 caracteres en el campo edad')
        formulario.edad.focus();
        return false;
    }

    var checkOk = "1234567890";
    var checkstr = formulario.edad.value;
    var allValid = true;

    for (var i = 0; i < checkstr.length; i++) {
        var ch = checkstr.charAt(i)
        for (var j = 0; j < checkOk.length; j++)
            if (ch == checkOk.charAt(j)) {
                break;
            }
        if (j == checkOk.length) {
            allValid = false;
            break;
        }
    }
    if (!allValid) {
        alert("Escribe solo numeros en el campo edad")
        formulario.nombre.focus();
        return false;
    }
    //validar la entrada de un correo electronico
    var txt = formulario.email.value;
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email " + (b.test(txt) ? "" : "no ") + "valido");
    return b.test(txt);
}
