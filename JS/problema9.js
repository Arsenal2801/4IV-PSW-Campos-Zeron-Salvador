function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    var patron =/[0-9\d.]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular(){
    var horas = parseInt(document.formulario.horas.value);
    var Salario = parseInt(document.formulario.pago.value);
    var salarioT
    if(horas>=40){
        if(horas<=48){
            var horasExtra = horas-40;
            var salarioExtra = horasExtra*(2*Salario);
            salarioT = salarioExtra + ((horas-horasExtra)*Salario);
            document.formulario.salario.value ="$" + salarioT;
        }else{
            var horasExraExtra = horas - 48;
            var salarioExtra = 8*(2*Salario);
            var salarioExtraE = horasExraExtra*(3*Salario);
            salarioT = salarioExtraE + salarioExtra + ((horas-8-horasExraExtra)*Salario);
            document.formulario.salario.value ="$" + salarioT;
        }
    }else{
        salarioT = horas*Salario;
        document.formulario.salario.value ="$" + salarioT;
    }
}

function borrar(){
    document.formulario.horas.value="";
    document.formulario.pago.value="";
    document.formulario.salario.value="";
}