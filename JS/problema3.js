function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    var patron =/[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function compra(){
    var valor = document.formulario.tcompra.value;
    var resultado = parseInt(valor);
    var total = resultado - resultado*.15;
    document.formulario.descuento.value="$"+total;
}

function borrar(){
    document.formulario.cantidad.value="";
    document.formulario.sueldoti.value="";
}
