const respostasUsuario = {
    mat01: "",
    mat02: "",
    mat03: "",
    hist01: "",
    hist02: "",
    hist03: "",
    geo01: "",
    get02: "",
    geo03: ""
};

const gabarito = {
    mat01: 4,
    mat02: 3,
    mat03: 4,
    hist01: "Pedro Alvares Cabral",
    hist02: "Joaquim Jose da Silva Xavier",
    hist03: "27",
    geo01: "Floresta Amazônia",
    geo02: "America do Sul",
    geo03: "2 polos"
};

const btn = document.querySelector("#enviar");

btn.addEventListener("click", function (e) {

    //e.preventDefault();
    //populando as respostas do usuario
    respostasUsuario.mat01 = mat01Soma();
    respostasUsuario.mat02 = mat02RaizQuadrada();
    respostasUsuario.mat03 = mat03Lados();
    respostasUsuario.hist01 = hist01DescobriuBrasil();
    respostasUsuario.hist02 = hist02Tiradentes();
    respostasUsuario.hist03 = hist03Bandeira();
    respostasUsuario.geo01 = geo01Ecosistema();
    respostasUsuario.geo02 = geo02America();
    respostasUsuario.geo03 = geo03polos();

    const resultado = verificaRespostas(respostasUsuario);

    sessionStorage.setItem('resultado', JSON.stringify(resultado));
    sessionStorage.setItem('respostasUsuario', JSON.stringify(respostasUsuario));
});


function verificaRespostas(respostas) {
    const resultado = {
        matematica: 0,
        historia: 0,
        geografia: 0,
        porcentagem: 0,
        total:0

    }
    //matematica
    if (respostasUsuario.mat01 == gabarito.mat01) {
        resultado.matematica = resultado.matematica + 1;
        resultado.total = resultado.total +1;
    }
    if (respostasUsuario.mat02 == gabarito.mat02) {
        resultado.matematica = resultado.matematica + 1;
        resultado.total = resultado.total +1;
    }
    if (respostasUsuario.mat03 == gabarito.mat03) {
        resultado.matematica = resultado.matematica + 1;
        resultado.total = resultado.total +1;
    }
    //historia
    if (respostasUsuario.hist01 == gabarito.hist01) {
        resultado.historia = resultado.historia + 1;
        resultado.total = resultado.total +1;
    }
    if (respostasUsuario.hist02 == gabarito.hist02) {
        resultado.historia = resultado.historia + 1;
        resultado.total = resultado.total +1;
    }
    if (respostasUsuario.hist03 == gabarito.hist03) {
        resultado.historia = resultado.historia + 1;
        resultado.total = resultado.total +1;
    }
    //geografia
    if (respostasUsuario.geo01 == gabarito.geo01) {
        resultado.geografia = resultado.geografia + 1;
        resultado.total = resultado.total +1;
    }
    if (respostasUsuario.geo02 == gabarito.geo02) {
        resultado.geografia = resultado.geografia + 1;
        resultado.total = resultado.total +1;
    }
    if (respostasUsuario.geo03 == gabarito.geo03) {
        resultado.geografia = resultado.geografia + 1;
        resultado.total = resultado.total +1;
    }

    resultado.porcentagem = Math.round((resultado.total * 100) / 9);

    return resultado;
}


