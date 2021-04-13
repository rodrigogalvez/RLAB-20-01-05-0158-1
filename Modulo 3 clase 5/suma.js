"use strict";

function suma() {
    let numero = Number(document.getElementById("numero").value);
    let acumulador = 0;
    for (var i = 1; i <= numero; i++) {
        acumulador += i;
    }
    document.getElementById("resultado").innerText = acumulador;
}