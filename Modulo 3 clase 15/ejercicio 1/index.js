"use strict";

function verificar() {
    let nombre =document.getElementById("nombre");
    let mensaje = document.getElementById("mensaje");
    if (nombre.value=="") {
        mensaje.className="rojo";
        mensaje.innerHTML="";
        mensaje.appendChild(document.createTextNode("El nombre está vacío"));
    } else {
        mensaje.className="verde";
        mensaje.innerHTML="";
        mensaje.appendChild(document.createTextNode(`Ingresado: ${nombre.value}`));
    }
}

