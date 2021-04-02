function validarn(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function venta1() {
    var valor = document.formulario.V1.value;
    var resultado = parseInt(valor);
    var total = resultado * 0.1;
    document.formulario.cantidadventas1.value = "$" + total;
}

function venta2() {
    var valor = document.formulario.V2.value;
    var resultado = parseInt(valor);
    var total = resultado * 0.1;
    document.formulario.cantidadventas2.value = "$" + total;
}

function venta3() {
    var valor = document.formulario.V3.value;
    var resultado = parseInt(valor);
    var total = resultado * 0.1;
    document.formulario.cantidadventas3.value = "$" + total;
}

function total() {
    var sueldo = document.formulario.sueldoB.value;
    var sint = parseInt(sueldo);
    var valor = document.formulario.V3.value;
    var resultado = parseInt(valor);
    var total3 = resultado * 0.1;
    var valor = document.formulario.V2.value;
    var resultado = parseInt(valor);
    var total2 = resultado * 0.1;
    var valor = document.formulario.V1.value;
    var resultado = parseInt(valor);
    var total = resultado * 0.1;
    var TOTAL = total + total2 + total3 + sint;
    document.formulario.totS.value = "$" + TOTAL;
}

function borrar() {
    document.formulario.totS.value = "";
    document.formulario.sueldoB.value = "";
    document.formulario.cantidadventas1.value= "";
    document.formulario.cantidadventas2.value= "";
    document.formulario.cantidadventas3.value= "";
    document.formulario.V1.value= "";
    document.formulario.V2.value= "";
    document.formulario.V3.value= "";
}

function mostrar() {
    venta1();
    venta2();
    venta3();
    total();
}