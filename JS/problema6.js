function validarn(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron =/[0-9\d.]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function Edad(){
    var añoCumple = parseInt(document.formulario.Fecha.value);
    var hoy = new Date();
    const hoy2 = parseInt(hoy.getFullYear());
    var edad1 = hoy2-añoCumple;
    document.formulario.edad.value = edad1 + " años";
}

function borrar() {
    document.formulario.edad.value = "";
    document.formulario.Fecha.value = "";
}

