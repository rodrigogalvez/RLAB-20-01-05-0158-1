"use strict";

let lienzo = document.querySelector("canvas.lienzo");
let x = 0;
let y = 0;
let rayando = false;

let context = lienzo.getContext("2d");

function iniciar(event) {
    x = event.offsetX;
    y = event.offsetY;
    rayando = true;
}

function terminar(event) {
    rayando = false;
}

function rayar(event) {
    if (rayando) {

        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(event.offsetX, event.offsetY);
        context.stroke();

        x = event.offsetX;
        y = event.offsetY;
    }
}

lienzo.addEventListener("mousedown", iniciar);
lienzo.addEventListener("mouseup", terminar);
lienzo.addEventListener("mousemove", rayar)