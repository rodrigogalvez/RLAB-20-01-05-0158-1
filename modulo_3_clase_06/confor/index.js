"use strict";

function ingresar() {
    let cantidad = Number(document.getElementById("cantidadempleados").value);
    let acumulador = 0;

    for (let i = 1; i <= cantidad; i++) {
        acumulador += Number(prompt("Suedo del empleado " + i));
    }

    let promedio = acumulador / cantidad;
    document.getElementById("resultado").innerText = promedio;

}