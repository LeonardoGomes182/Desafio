function mat01Soma() {
    var mat01 = document.querySelector("#mat01");
    var mat02 = document.querySelector("#mat02");
    var mat03 = document.querySelector("#mat03");

    var soma = [];

    if (mat01.checked) {
        soma.push(mat01.value);
    }
    if (mat02.checked) {
        soma.push(mat02.value);
    }
    if (mat03.checked) {
        soma.push(mat03.value);
    }

    return soma;
}

function mat02RaizQuadrada() {

    var mat04 = document.querySelector("#mat04");
    var mat05 = document.querySelector("#mat05");
    var mat06 = document.querySelector("#mat06");

    var raizQuadrada = [];

    if (mat04.checked) {
        raizQuadrada.push(mat04.value);
    }
    if (mat05.checked) {
        raizQuadrada.push(mat05.value);
    }
    if (mat06.checked) {
        raizQuadrada.push(mat06.value);
    }
    return raizQuadrada;
}

function mat03Lados(params) {
    //matematica raiz quadrada
    var mat07 = document.querySelector("#mat07");
    var mat08 = document.querySelector("#mat08");
    var mat09 = document.querySelector("#mat09");

    var ladosRetangulo = [];

    if (mat07.checked) {
        ladosRetangulo.push(mat07.value);
    }
    if (mat08.checked) {
        ladosRetangulo.push(mat08.value);
    }
    if (mat09.checked) {
        ladosRetangulo.push(mat09.value);
    }
    return ladosRetangulo;
}
