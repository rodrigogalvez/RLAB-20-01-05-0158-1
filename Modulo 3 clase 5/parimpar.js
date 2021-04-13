"use strict";

function determinarParImpar() {
    let numero = Number(document.getElementById("numero").value);
    let esImpar = false;
    for (var i = 1; i <= numero; i++) {
        esImpar = !esImpar;
        // Esto: esImpar = !esImpar, es lo mismo que esto:
        // if (esImpar) {
        //     esImpar = false;
        // } else {
        //     esImpar = true;
        // }

        // Operador ternario: condicion ? valorverdadero : valorfalso
        console.log("El número " + i + " es " + (esImpar ? "Es impar" : "Es par"));
        // Forma larga:
        // if (esImpar) {
        //     console.log("El número " + i + " es Es impar");
        // } else {
        //     console.log("El número " + i + " es Es par");
        // }
    }

    document.getElementById("resultado").innerText = (esImpar ? "Es impar" : "Es par");
    // forma larga:
    // if (esImpar) {
    //     document.getElementById("resultado").innerText = "Es impar";
    // } else {
    //     document.getElementById("resultado").innerText = "Es par";
    // }


    // solución corta SIN for:
    // document.getElementById("resultado").innerText = (numero%2)?"Es impar":"Es par";
}