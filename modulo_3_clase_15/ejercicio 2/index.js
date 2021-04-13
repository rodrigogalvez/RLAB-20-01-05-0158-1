"use strict";

function verificar() {
    let nombre =document.getElementById("nombre");
    let edad =document.getElementById("edad");
    let mensaje = document.getElementById("mensaje");
    let ok = true;
    mensaje.innerHTML="";

    if (nombre.value=="") {
        let aviso = document.createElement("p");
        aviso.className="rojo";
        aviso.appendChild(document.createTextNode("El nombre está vacío"));
        mensaje.appendChild(aviso);
        ok = false;
    } else if (nombre.value.includes(" ")) {
        let aviso = document.createElement("p");
        aviso.className="rojo";
        aviso.appendChild(document.createTextNode("El nombre no debe contener espacios"));
        mensaje.appendChild(aviso);
        ok = false;
    }

    if (edad.value=="") {
        let aviso = document.createElement("p");
        aviso.className="rojo";
        aviso.appendChild(document.createTextNode("La edad está vacío"));
        mensaje.appendChild(aviso);
        ok = false;
    } else if (isNaN(edad.value))  {
        let aviso = document.createElement("p");
        aviso.className="rojo";
        aviso.appendChild(document.createTextNode("La edad debe ser un número"));
        mensaje.appendChild(aviso);
        ok = false;
    } else if (Number(edad.value)<18||Number(edad.value)>99) {
        let aviso = document.createElement("p");
        aviso.className="rojo";
        aviso.appendChild(document.createTextNode("La edad debe estar entre 18 y 99"));
        mensaje.appendChild(aviso);
        ok = false;
    }

    return ok;
}

