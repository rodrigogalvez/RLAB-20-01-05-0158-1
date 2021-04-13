"use strict";

function multiplicar() {
    let numero = Number( document.getElementById("numero").value );
    let resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.innerText="Ingrese solo números";
    } else {
        resultado.innerText=numero**numero;
    }
}

function multiplicar2() {
    let numero = Number( prompt("Ingrese un número") );
    let resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.innerText="Ingrese solo números";
    } else {
        resultado.innerText=numero**numero;
    }
}