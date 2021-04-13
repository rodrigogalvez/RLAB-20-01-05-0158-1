"use strict";

function crearPelota(evento) {
    console.log(evento)
    let pantalla = document.getElementById("pantalla");
    let pelota = document.createElement("div");
    pelota.classList.add("pelota");
    if (evento) {
        pelota.style.left = (evento.x - 8) + "px";
        pelota.style.top = (evento.y - 8) + "px";
    } else  {
        pelota.style.left = Math.trunc(Math.random() * pantalla.clientWidth) + "px";
        pelota.style.top = Math.trunc(Math.random() * pantalla.clientHeight ) + "px";
    }
    pantalla.appendChild(pelota);
}

function moverPelotas() {
    let pelotas = document.querySelectorAll("div.pelota");
    pelotas.forEach(moverPelota);
}

function moverPelota(pelota) {
    let x = parseFloat(pelota.style.left) || 0;
    let y = parseFloat(pelota.style.top) || 0;
    x += Math.random() * 4 - 2;
    y += Math.random() * 4 - 2;
    pelota.style.left = x + "px";
    pelota.style.top = y + "px";
}

document.getElementById("pantalla").addEventListener("click", crearPelota);

setInterval(moverPelotas, 10);

let totalPelotas = Math.trunc(Math.random() * 10) + 1;
for (let i = 0; i < totalPelotas; i++) {
    crearPelota();
}

