"use strict";

function ejecutarSuma() {
    let x = document.getElementById("numero1");
    let y = document.getElementById("numero2");

    let suma = Number(x.value)+Number(y.value);

    document.getElementById("resultado").innerText=suma;
}