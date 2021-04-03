function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    var patron =/[0-9\d.]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular(){
    var valor1 = parseInt(document.formulario.num1.value);
    var valor2 = parseInt(document.formulario.num2.value);
    var valor3 = parseInt(document.formulario.num3.value);
    if(valor1>valor2 && valor1>valor3){
        document.formulario.Resultado.value = valor1;
    }else if(valor1<valor2 && valor2>valor3){
        document.formulario.Resultado.value = valor2;
    }else{
        document.formulario.Resultado.value = valor3;
    }
}

function borrar(){
    document.formulario.num1.value="";
    document.formulario.num2.value="";
    document.formulario.num3.value="";
    document.formulario.Resultado.value="";
}