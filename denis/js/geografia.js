
function geo01Ecosistema() {
    var geo01 = document.querySelector("#geo01");
    var geo02 = document.querySelector("#geo02");
    var geo03 = document.querySelector("#geo03");

    var geoEcosistema = [];

    if (geo01.checked) {
        geoEcosistema.push(geo01.value);
    }
    if (geo02.checked) {
        geoEcosistema.push(geo02.value);
    }
    if (geo03.checked) {
        geoEcosistema.push(geo03.value);
    }

    return geoEcosistema;
}

function geo02America() {
    var geo04 = document.querySelector("#geo04");
    var geo05 = document.querySelector("#geo05");
    var geo06 = document.querySelector("#geo06");

    var geoAmerica = [];

    if (geo04.checked) {
        geoAmerica.push(geo04.value);
    }
    if (geo05.checked) {
        geoAmerica.push(geo05.value);
    }
    if (geo06.checked) {
        geoAmerica.push(geo06.value);
    }
    return geoAmerica;
}

function geo03polos() {
    var geo07 = document.querySelector("#geo07");
    var geo08 = document.querySelector("#geo08");
    var geo09 = document.querySelector("#geo09");

    var geoPolos = [];

    if (geo07.checked) {
        geoPolos.push(geo07.value);
    }
    if (geo08.checked) {
        geoPolos.push(geo08.value);
    }
    if (geo09.checked) {
        geoPolos.push(geo09.value);
    }
    return geoPolos;
}