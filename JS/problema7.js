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
    var resultado
    if(valor1==valor2){
        resultado = valor1*valor2;
        document.formulario.Resultado.value = resultado;
    }else if(valor1>valor2){
        resultado = valor1-valor2;
        document.formulario.Resultado.value = resultado;
    }else{
        resultado = valor1+valor2;
        document.formulario.Resultado.value = resultado;
    }
}

function borrar(){
    document.formulario.num1.value="";
    document.formulario.num2.value="";
    document.formulario.Resultado.value="";
}