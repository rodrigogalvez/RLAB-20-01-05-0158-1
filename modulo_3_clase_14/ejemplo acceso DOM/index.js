"use strict";

function cambiarLuz() {
    let luzactiva = document.getElementById("luzactiva").value;
    console.log(luzactiva);
    let luzaapagar = document.querySelectorAll(
        luzactiva==""?".luzsemaforo.encendido":".luzsemaforo.encendido:not(."+luzactiva+")"
    );
    luzaapagar.forEach(
        function (luz) {
            luz.classList.remove("encendido");
        }
    )
    if (luzactiva != "") {
        let luzacambiar = document.querySelectorAll(".luzsemaforo." + luzactiva+":not(.encendido)");
        luzacambiar.forEach(
            function (luz) {
                luz.classList.add("encendido");
            }
        )
    }
}