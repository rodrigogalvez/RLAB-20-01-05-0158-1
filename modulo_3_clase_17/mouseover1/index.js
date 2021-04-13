"use strict";

let fotogrande = document.querySelector("div.fotoampliada > img");
let fotos = document.querySelectorAll("div.galeria > img");
let tamano = 0;

function ampliar(event) {
    // console.log(event);
    fotogrande.src = event.target.src;
}

document.querySelector("div.visor").addEventListener("mouseleave", (event)=>{
    // console.log(event)
    fotogrande.src="";
})

window.addEventListener("load", () => {

    fotos.forEach(
        (foto) => {
            foto.addEventListener("mouseover", ampliar);
            tamano += foto.clientHeight;
        }
    )

    document.querySelector("div.fotoampliada").style.height = tamano + 'px';
});