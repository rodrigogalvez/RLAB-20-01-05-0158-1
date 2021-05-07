"use strict";

let pizarra = document.getElementById("pizarra");
let cursor = document.getElementById("cursor");
let coordenadas = document.getElementById("coordenadas");
let pelota = document.getElementById("pelota");

let coordenadaX = 0;
let coordenadaY = 0;
let movimientoX = 1;
let movimientoY = 1;

pizarra.addEventListener(
    'mousemove',
    mostrarCoordenadas
);

setInterval(rebote,5);

function mostrarCoordenadas(evento) {
    // evento.offsetX
    // evento.offsetY
    coordenadas.innerText =
        evento.offsetX + ',' + evento.offsetY;



    if (evento.offsetY<0) {
        cursor.style.top = "0px";
    } else if (evento.offsetY + cursor.children[0].clientHeight> pizarra.clientHeight) {
        cursor.style.top = pizarra.clientHeight - cursor.children[0].clientHeight +"px"; 
    } else {
        cursor.style.top = evento.offsetY + "px";
    }

    if (evento.offsetX<0) {
        cursor.style.left = "0px";
    } else if (evento.offsetX + cursor.children[0].clientWidth > pizarra.clientWidth) {
        cursor.style.left = pizarra.clientWidth - cursor.children[0].clientWidth + "px";
    } else {
        cursor.style.left = evento.offsetX + "px";
    }

}

function rebote() {

    coordenadaX+=movimientoX;
    coordenadaY+=movimientoY;

    if (coordenadaX<=0) {
        movimientoX = 1;
    } else if (coordenadaX >= pizarra.clientWidth-pelota.children[0].clientWidth) {
        movimientoX = -1;
    } 

    if (coordenadaY<=0) {
        movimientoY = 1;
    } else if (coordenadaY >= pizarra.clientHeight-pelota.children[0].clientHeight) {
        movimientoY = -1;
    } 

    pelota.style.top = coordenadaY+'px';
    pelota.style.left = coordenadaX+'px';
}