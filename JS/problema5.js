function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    var patron =/[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function porcentaje(){
    var valorh = document.formulario.Hombre.value;
    var hombres = parseInt(valorh);
    var valorm = document.formulario.Mujer.value;
    var mujer = parseInt(valorm);
    var total = mujer+hombres;
    var phombre = (hombres*100)/total;
    var pmujer = (mujer*100)/total;
    document.formulario.pMujeres.value=pmujer + "%";
    document.formulario.pHombres.value=phombre+ "%";
}

function borrar(){
    document.formulario.Mujer.value="";
    document.formulario.Hombre.value="";
    document.formulario.pMujeres.value="";
    document.formulario.pHombres.value="";
}
