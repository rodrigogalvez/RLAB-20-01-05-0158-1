"use strict";

let World = document.querySelector("div.world");

let Mario = document.querySelector("div.mario");
let MarioX = 0;
let MarioY = 0;

let MarioTomado = false;

let desplazamiento = parseFloat(getComputedStyle(document.documentElement).fontSize);

function controlTeclado(event) {
    // console.log(event.key, event.code, event.shiftKey, event.ctrlKey, event.altKey);

    switch (event.code) {
        case 'ArrowUp':
            MarioY -= desplazamiento;
            break;
        case 'ArrowDown':
            MarioY += desplazamiento;
            break;
        case 'ArrowLeft':
            MarioX -= desplazamiento;
            break;
        case 'ArrowRight':
            MarioX += desplazamiento;
            break;
        case 'F1':
        case 'F5':
            event.preventDefault();
            break;
        default:
    }

    Mario.style.top = MarioY + 'px';
    Mario.style.left = MarioX + 'px';
}

function controlMouse(event) {

    if (MarioTomado) {
        MarioX = event.offsetX;
        MarioY = event.offsetY;
        Mario.style.top = MarioY + 'px';
        Mario.style.left = MarioX + 'px';
    }
}

function tomarMario(event) {
    event.preventDefault();
    console.log(event);
    MarioTomado = true;
    controlMouse(event);
}

function soltarMario(event) {
    controlMouse(event);
    MarioTomado = false;
}

function desactivarEvento(event) {
    event.preventDefault();
}

World.addEventListener("keydown", controlTeclado);
World.addEventListener("mousemove", controlMouse);
World.addEventListener("mousedown", tomarMario);
World.addEventListener("mouseup", soltarMario);

World.addEventListener("contextmenu", desactivarEvento)
