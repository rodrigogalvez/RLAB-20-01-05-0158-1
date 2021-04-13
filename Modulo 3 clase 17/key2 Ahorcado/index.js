"use strict";

let palabraSecreta = "manzana";

function controlTeclado(event) {
    console.log(event.key, event.code, event.shiftKey, event.ctrlKey, event.altKey);
    if (event.code.startsWith("Key")) {
        let letras = document.querySelectorAll("p#secreto > span");
        let ok = false;
        letras.forEach((letra, index) => {
            if (event.key == palabraSecreta[index]) {
                letra.innerText = palabraSecreta[index];
                ok = true;
            }
        })

        if (!ok) {
            let vidas = document.querySelectorAll("p#vidas > span.vivo");
            if (vidas.length>0) {
                vidas[0].classList.remove("vivo");
                vidas[0].classList.add("muerto");
                if (vidas.length==1) {
                    document.querySelector("p#gameover").classList.add("visible");
                }
            }
        }
    }
}

addEventListener("keydown", controlTeclado);

function agregarCeldas() {
    let secreto = document.getElementById("secreto");
    for (let i = 0; i < palabraSecreta.length; i++) {
        let nuevoElemento = document.createElement("span");
        nuevoElemento.innerText = "_";
        secreto.appendChild(nuevoElemento);
    }
}

addEventListener("load", () => {
    agregarCeldas();
})