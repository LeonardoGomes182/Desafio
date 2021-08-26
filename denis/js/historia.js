function hist01DescobriuBrasil() {
    var hist01 = document.querySelector("#hist01");
    var hist02 = document.querySelector("#hist02");
    var hist03 = document.querySelector("#hist03");

    var descobriuBrasil = [];

    if (hist01.checked) {
        descobriuBrasil.push(hist01.value);
    }
    if (hist02.checked) {
        descobriuBrasil.push(hist02.value);
    }
    if (hist03.checked) {
        descobriuBrasil.push(hist03.value);
    }
    return descobriuBrasil;
}

function hist02Tiradentes() {
    var hist04 = document.querySelector("#hist04");
    var hist05 = document.querySelector("#hist05");
    var hist06 = document.querySelector("#hist06");
    
    var tiradentes = [];
    
    if (hist04.checked) {
        tiradentes.push(hist04.value);
    }
    if (hist05.checked) {
        tiradentes.push(hist05.value);
    }
    if (hist06.checked) {
        tiradentes.push(hist06.value);
    }
    return tiradentes;
}

function hist03Bandeira(params) {
    var hist07 = document.querySelector("#hist07");
    var hist08 = document.querySelector("#hist08");
    var hist09 = document.querySelector("#hist09");
    
    var bandeira = [];
    
    if (hist07.checked) {
        bandeira.push(hist07.value);
    }
    if (hist08.checked) {
        bandeira.push(hist08.value);
    }
    if (hist09.checked) {
        bandeira.push(hist09.value);
    }
    return bandeira;
}