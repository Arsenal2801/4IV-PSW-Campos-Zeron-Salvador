// problema1
function problema1() {

    var p1_input = document.querySelector('#p1-input').value;
    var p1_array = p1_input.split(' ').reverse();
    var p1_res = '';
    p1_array.forEach(function (palabra, i) {
        if (i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });
    document.querySelector('#p1-output').textContent = p1_res;

}

//problema 2
function problema2() {

    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];
    v1 = v1.sort(function (a, b) {
        return b - a;
    });
    v2 = v2.sort(function (a, b) {
        return b - a;
    });
    v2 = v2.reverse();
    var p2_producto = 0;
    for (var i = 0; i < v1.length; i++) {
        p2_producto += v1[i] * v2[i];
    }
    document.querySelector('#p2-output').textContent = 'Producto escalar minimo : ' + p2_producto;
}

// tarea problema3
function caracteresUnicos(texto) {
    let CaracterU = ""
    for (let i = 0; i < texto.length; i++) {
        if (CaracterU.indexOf(texto.charAt(i)) == -1) {
            CaracterU += texto[i]
        }
    }
    return CaracterU
}
function problema3() {
    var p3_input = document.querySelector('#p3-input').value

    var keyboard = "QWERTYUIOPASDFGHJKLÑZXCVBNMÁÍÚÉÓ,"
    if (p3_input.length <= 46) {
        var next = true
        for (var i = 0; i < p3_input.length; i++) {
            var console = p3_input.charAt(i)
            for (var j = 0; j < keyboard.length; j++) {
                if (console == keyboard.charAt(j))
                    break;
                if (j == keyboard.length - 1) {
                    next = false;
                    break;
                }
            }
        }
        if (next == true) {
            var words = p3_input.split(',')
            var p3A = []
            words.forEach(function (words) {
                var p3A_2 = [];
                for (var i = 0; i < words.length; i++) {
                    p3A_2.push(words.charAt(i))
                }
                for (var i = p3A_2.length - 1; i >= 0; i--) {
                    if (p3A_2.indexOf(p3A_2[i]) !== i) p3A_2.splice(i, 1)
                }
                p3A.push(p3A_2.length)
            });
            var p3_grande = Math.max.apply(null, p3A)
            var p3_res = "";
            for (var i = 0; i < p3A.length; i++) {
                if (p3A[i] == p3_grande) {
                    p3_res += words[i] + ","
                }
            }
            p3_res_acortada = caracteresUnicos(p3_res)
            document.querySelector('#p3-output').textContent = 'Las palabra con mayor numero de caracteres es ' + p3_res + ' Con ' + p3_grande + ' numero de caracteres y con los caracteres unicos queda ' + p3_res_acortada

        }
        else {
            alert("Los carácteres son inválidos.")
        }
    } else {
        alert("No se permiten palabras muchos carácteres")
    }
}