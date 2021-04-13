"use strict";

// 3.	
// 1)  
//      1.a) Crear un arreglo
//      1.b) y llenarlo con diferentes valores ingresados por teclado.
// 2) El programa debe permitir ingresar valores hasta que el usuario ingrese la palabra fin.
// 3) Mostrar cada posición del arreglo dentro de un bloque <P>.

function ejercio3() {
    let arreglo = [];
    let ingreso;
    do {
        ingreso = prompt("Ingrese un valor");
        if (ingreso != "fin") {
            let numero = Number(ingreso);
            // la pregunta es: numero NO NO es un Número.
            if (!isNaN(numero)) {
                arreglo.push(numero);
            }
        }
    } while (ingreso != "fin");
    // for (let ii = 0; ii < arreglo.length; ii++) {
    //     let nuevo = document.createElement("p");
    //     nuevo.innerText = arreglo[ii];
    //     document.body.appendChild(nuevo);
    // }
    arreglo.forEach(function (elemento) {
        let nuevo = document.createElement("p");
        nuevo.innerText = elemento;
        document.body.appendChild(nuevo);
    })
}

// Número aleatoreo:
function azar(min, max) {
    return Math.trunc(Math.random() * (max - min + 1)) + min;
}

let presentados = []
function sinRepetir(min, max) {
    let numero;
    if (max - min + 1 != presentados.length) {
        do {
            numero = azar(min, max);
        } while (presentados.indexOf(numero) != -1);
        presentados.push(numero);
    }
    return numero;
}