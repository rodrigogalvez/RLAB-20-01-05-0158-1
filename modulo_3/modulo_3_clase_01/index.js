"use strict";

function calcularimc() {
    let p = document.getElementById("peso");
    let h = document.getElementById("estatura");
    let r = document.getElementById("resultado");

    let valorpeso = Number(p.value);
    let valorestatura = Number(h.value) / 100;

    if (isNaN(valorpeso) || isNaN(valorestatura)) {
        r.innerText = "Error: uno de los dos valores no es numérico";
    } else {
        let imc = valorpeso / (valorestatura * valorestatura);

        r.innerText = imc;

    }

}