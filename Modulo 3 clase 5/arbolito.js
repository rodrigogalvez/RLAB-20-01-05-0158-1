"use strict";

// 5.	Un programa que, utilizando el ciclo for, dibuje en la página lo siguiente:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// ########
// #########

for (var linea = 1; linea <= 9; linea++) {
    let salida = "";
    for (var columna = 1; columna <= linea; columna++) {
        salida += "#";
    }
    console.log(salida);
}


for (var linea = 1; linea <= 9; linea++) {
    let salida = "";
    for (var columna = 1; columna <= linea; columna++) {
        salida += "#";
    }
    // console.log(salida);
    let nuevo = document.createElement("li");
    nuevo.innerText = salida;
    document.getElementById("resultado").appendChild(nuevo);
}


