"use strict";

var palabras = ['Hola', 'como', 'caminar', 'piscina', 'en', 'abajo', 'de'];
var clases = ['clase1', 'clase2', 'clase3'];

function palabraAlAzar() {
    return palabras[Math.trunc(Math.random() * palabras.length)];
}

function claseAlAzar() {
    return clases[Math.trunc(Math.random() * clases.length)];
}

function cambiarMensaje() {
    let divs = document.querySelectorAll("div");
    // tres formas de iterar los divs:
    // forma 1:
    divs.forEach(
        (div) => {
            div.className = "";
            div.innerText = palabraAlAzar();
            div.classList.add(claseAlAzar());
        }
    )
    // // forma2:
    // for (let i = 0; i < divs.length; i++) {
    //     divs[i].innerText = palabraAlAzar();
    //     divs[i].className = "";
    //     divs[i].classList.add(claseAlAzar());
    // }
    // // forma 3:
    // for (let div of divs) {
    //     div.innerText = palabraAlAzar();
    //     div.className = "";
    //     div.classList.add(claseAlAzar());
    // }

}