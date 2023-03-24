import {KEPLISTA} from "./adat.js"

let lista = [];

$(function(){
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
                $($(KEPEK[lista[0]]).css("display", "none"));
                $($(KEPEK[lista[1]]).css("display", "none"));
                lista = [];
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

