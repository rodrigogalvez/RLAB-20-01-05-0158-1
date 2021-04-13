"use strict";

for (var i = 0; i < 10; i++) {
    document.getElementById("resultado").innerText += " " + i;
    // document.getElementById("resultado").innerText = document.getElementById("resultado").innerText + i;
    // console.log(i);
}

// 1. Un programa que muestre los números del 100 al 1.
// solución inicial:
for (var i = 100; i > 0; i--) {
    document.getElementById("resultado").innerText += " " + i;
}
// solución mejorada:
for (var i = 100; i > 0; i--) {
    let nuevo = document.createElement("p");
    nuevo.innerText = i;
    document.getElementById("resultado").appendChild(nuevo);
}
// otra solución mejorada
for (var i = 100; i > 0; i--) {
    let nuevo = document.createElement("p");
    let texto = document.createTextNode(i);
    nuevo.appendChild(texto);
    document.getElementById("resultado").appendChild(nuevo);
}
