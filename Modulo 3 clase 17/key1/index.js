"use strict";

let Mario = document.querySelector("div.mario");
let MarioX = 0;
let MarioY = 0;

function controlMario(event) {
    console.log(event.key, event.code, event.shiftKey, event.ctrlKey, event.altKey);

    switch (event.code) {
        case 'ArrowUp':
            MarioY--;
            break;
        case 'ArrowDown':
            MarioY++;
            break;
        case 'ArrowLeft':
            MarioX--;
            break;
        case 'ArrowRight':
            MarioX++;
            break;
        case 'F1':
        case 'F5':
            event.preventDefault();
            break;
        default:
    }

    Mario.style.top = MarioY+'rem';
    Mario.style.left = MarioX+'rem';
}

addEventListener("keydown", controlMario);