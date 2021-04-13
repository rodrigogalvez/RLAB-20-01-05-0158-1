"use strict";

function crearMatriz(filas, columnas, valorinicial) {
    var matrix = new Array(filas);
    for (var i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(columnas);
        for (var j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = valorinicial;
        }
    }
    return matrix;
}

function crearMatriz2(filas, columnas, valorinicial) {
    var matrix = [];
    for (var i = 0; i < filas; i++) {
        matrix.push([]);
        for (var j = 0; j < columnas; j++) {
            matrix[matrix.length - 1].push(valorinicial);
        }
    }
    return matrix;
}

let m1 = crearMatriz(5, 3, 0);
let m2 = crearMatriz(8, 8, 10);
let m3 = crearMatriz2(5, 3, 0);
let m4 = crearMatriz2(8, 8, 10);

//2.	
// 1 ) Crear un arreglo de largo 10, 
// 2 ) llenarlo con número aleatorios (1-5),
// 3 ) mostrarlo en la página e 
// 4 ) indicar cuántos 3 hay en el arreglo.

function ejerccio2() {
    let arreglo = new Array(10); // Crear un arreglo de largo 10

    // llenarlo con número aleatorios (1-5),
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = Math.trunc(Math.random() * 5) + 1;
    }

    // mostrarlo en la página
    for (let i = 0; i < arreglo.length; i++) {
        let nuevo = document.createElement("p");
        nuevo.innerText = arreglo[i];
        document.body.appendChild(nuevo);
    }

    // indicar cuántos 3 hay en el arreglo.
    let cuenta = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] == 3) cuenta++;
    }
    let nuevo = document.createElement("p");
    nuevo.innerText = `La cuenta de números tres es: ${cuenta}`; 
    // text interpolation: texto entre comillas oblicuas.
    // Notación: `.... ${variable} blah blah ${variable}.....` 
    // nuevo.innerText = 'La cuenta de números tres es:' + cuenta;
    document.body.appendChild(nuevo);

}















