function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    var patron =/[0-9\d.]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular(){
    var años = parseInt(document.formulario.años.value);
    var Salario = parseInt(document.formulario.salarioBase.value);
    var salarioT
    if(años==1){
        salarioT = Salario + (0.05*Salario);
        document.formulario.salario.value ="$" + salarioT;
    }else if(años==2){
        salarioT = Salario + (0.07*Salario);
        document.formulario.salario.value ="$" + salarioT;
    }else if(años==3){
        salarioT = Salario + (0.1*Salario);
        document.formulario.salario.value ="$" + salarioT;
    }else if(años==4){
        salarioT = Salario + (0.15*Salario);
        document.formulario.salario.value ="$" + salarioT;
    }else{
        salarioT = Salario + (0.20*Salario);
        document.formulario.salario.value ="$" + salarioT;
    }
}

function borrar(){
    document.formulario.horas.value="";
    document.formulario.pago.value="";
    document.formulario.salario.value="";
}