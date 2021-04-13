"use strict";

let cantidad = 0;
let acumulador = 0;
let cuenta = 0;

function ingresar() {

    if (cantidad==0) {
        cantidad = Number(document.getElementById("cantidadempleados").value);
        if (!isNaN(cantidad)&&cantidad>0) {
            document.getElementById("cantidadempleados").setAttribute("disabled", "true");
            document.getElementById("sueldoempleado").setAttribute("placeholder", "Sueldo 1");
        }
    }

    let sueldo = Number( document.getElementById("sueldoempleado").value );
    
    if (!isNaN(sueldo)&&sueldo>0) {
        cuenta++;
        acumulador+=sueldo;
        document.getElementById("sueldoempleado").value = "";
        document.getElementById("sueldoempleado").setAttribute("placeholder", "Sueldo "+(cuenta+1));
    }

    if (cuenta==cantidad) {
        let promedio = acumulador / cantidad;
        document.getElementById("resultado").innerText = promedio;
        document.getElementById("cantidadempleados").removeAttribute("disabled");
        cantidad= 0;
        document.getElementById("cantidadempleados").value="";
    }

}