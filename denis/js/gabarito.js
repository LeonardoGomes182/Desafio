//-----------Matematica-------------
//mat01 inputs
//var mat01 = document.querySelector("#mat01");
var mat02 = document.querySelector("#mat02");
var mat03 = document.querySelector("#mat03");
//mat02 inputs
var mat04 = document.querySelector("#mat04");
var mat05 = document.querySelector("#mat05");
//var mat06 = document.querySelector("#mat06");
//mat03 inputs
var mat07 = document.querySelector("#mat07");
var mat08 = document.querySelector("#mat08");
//var mat09 = document.querySelector("#mat09");


var respostasUsuario = JSON.parse(sessionStorage.getItem('respostasUsuario'));
//respostasUsuario.mat01 =  pergunta 1
if (respostasUsuario.mat01 == mat02.value) {
    mat02.checked = true;
}
if (respostasUsuario.mat01 == mat03.value) {
    mat03.checked = true;
}
//respostasUsuario.mat02 =  pergunta 2
if (respostasUsuario.mat02 == mat04.value) {
    mat04.checked = true;
}
if (respostasUsuario.mat02 == mat05.value) {
    mat04.checked = true;
}

//respostasUsuario.mat03 =  pergunta 3
if (respostasUsuario.mat03 == mat07.value) {
    mat07.checked = true;
}
if (respostasUsuario.mat03 == mat08.value) {
    mat08.checked = true;
}

//-----------Historia-------------
//var hist01 = document.querySelector("#hist01");
var hist02 = document.querySelector("#hist02");
var hist03 = document.querySelector("#hist03");
//var hist04 = document.querySelector("#hist04");
var hist05 = document.querySelector("#hist05");
var hist06 = document.querySelector("#hist06");
var hist07 = document.querySelector("#hist07");
//var hist08 = document.querySelector("#hist08");
var hist09 = document.querySelector("#hist09");

//respostasUsuario.hist01 =  pergunta 1
if (respostasUsuario.hist01 == hist02.value) {
    hist02.checked = true;
}
if (respostasUsuario.hist01 == hist03.value) {
    hist03.checked = true;
}
//respostasUsuario.hist02 =  pergunta 2
if (respostasUsuario.hist02 == hist05.value) {
    hist05.checked = true;
}
if (respostasUsuario.hist02 == hist06.value) {
    hist06.checked = true;
}

//respostasUsuario.hist03 =  pergunta 3
if (respostasUsuario.hist03 == hist07.value) {
    hist07.checked = true;
}
if (respostasUsuario.hist03 == hist09.value) {
    hist09.checked = true;
}

//-----------Geografia-------------

//var geo01 = document.querySelector("#geo01");
var geo02 = document.querySelector("#geo02");
var geo03 = document.querySelector("#geo03");
var geo04 = document.querySelector("#geo04");
var geo05 = document.querySelector("#geo05");
//var geo06 = document.querySelector("#geo06");
var geo07 = document.querySelector("#geo07");
//var geo08 = document.querySelector("#geo08");
var geo09 = document.querySelector("#geo09");

//respostasUsuario.hist01 =  pergunta 1
if (respostasUsuario.geo01 == geo02.value) {
    geo02.checked = true;
}
if (respostasUsuario.geo01 == geo03.value) {
    geo03.checked = true;
}

//respostasUsuario.hist02 =  pergunta 2
if (respostasUsuario.geo02 == geo04.value) {
    geo04.checked = true;
}
if (respostasUsuario.geo02 == geo05.value) {
    geo05.checked = true;
}

//respostasUsuario.hist03 =  pergunta 3
if (respostasUsuario.geo03 == geo07.value) {
    geo07.checked = true;
}
if (respostasUsuario.geo03 == geo09.value) {
    geo09.checked = true;
}