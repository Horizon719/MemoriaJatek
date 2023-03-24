import {KEPLISTA} from "./adat.js"

let lista = [];

$(function(){
    kever(KEPLISTA);

    const ARTICLE = $(`article`);
    ARTICLE.html(osszeallit(KEPLISTA));
    const KEPEK = $(`article img`);
    KEPEK.on(`click`, function (event){
        let idNev = $(event.target).attr("id");
        lista.push(idNev);
        $(event.target).attr(`src`, KEPLISTA[idNev]);
        if (lista.length>1){
            if (KEPLISTA[lista[0]] != KEPLISTA[lista[1]]) {
                setTimeout(visszaFor, 1000);
            } else{
                setTimeout(eltuntet, 1000, KEPEK);
            }
        }
    });
})

function osszeallit(KEPLISTA){
    let txt = "";
    for (const index in KEPLISTA) {
        txt += `<div><img src="kepek/hatter.jpg" alt="kép" id="${index}"></div>`;

    }
    return txt;
}

function visszaFor(){
    $($("img").attr("src", "kepek/hatter.jpg"));
    lista = [];
}

function eltuntet(KEPEK){
    $($(KEPEK[lista[0]]).css("display", "none"));
    $($(KEPEK[lista[1]]).css("display", "none"));
    lista = [];
}

function kever(KEPEK){
    for (let i = 0; i < 100; i++) {
        let indEgy = Math.floor(Math.random() * KEPEK.length);
        let indKetto = Math.floor(Math.random() * KEPEK.length);
        let z = "";
        z = KEPEK[indEgy];
        KEPEK[indEgy] = KEPEK[indKetto];
        KEPEK[indKetto] = z;
    }
}
