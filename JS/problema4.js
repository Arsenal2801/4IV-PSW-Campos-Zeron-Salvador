function validarn(e) {
    var n = document.formulario.input.value;
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
function validar(){
    if (formulario.p1.value.length > 2 || formulario.p2.value.length > 2 || formulario.p3.value.length > 2 || formulario.examen.value.length > 2 || formulario.trabajo.value.length > 2) {
        alert('Solo puedes poner 2 numeros')
        return false;
    }
    else{
        caliFinal()
    }
}

function caliFinal() {
    var p1 = document.formulario.p1.value;
    var p1int = parseInt(p1);
    var p2 = document.formulario.p2.value;
    var p2int = parseInt(p2);
    var p3 = document.formulario.p3.value;
    var p3int = parseInt(p3);
    var exam = document.formulario.examen.value;
    var examint = parseInt(exam);
    var tf = document.formulario.trabajo.value;
    var tfint = parseInt(tf);
    // 
    var pf = ((p1int + p2int + p3int) / 3) * (.55);
    // 
    var ef = examint * 0.3;
    // 
    var trafin = tfint * 0.15;
    var fin = pf + trafin + ef;

    document.formulario.califFinal.value = fin;
}

function borrar() {
    document.formulario.p1.value = "";
    document.formulario.p2.value = "";
    document.formulario.p3.value = "";
    document.formulario.examen.value = "";
    document.formulario.trabajo.value = "";
    document.formulario.califFinal.value = "";
}