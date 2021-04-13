"use strict";

// 3.	
// 1) 
//   1.a) Crear una matriz de 10
//   1.b) x N, donde N es un número ascendente que va de 3 a 12. 
// 2) Llenar cada arreglo con el índice de su arreglo padre, así el primero arreglo tendrá 0’s, el segundo arreglo solo 1’s, el tercer arreglo solo 2’s y así sucesivamente. 
// 3) Mostrar la matriz por consola.

function ejercicio3() {
    // 1.a) Crear una matriz de 10...
    let matriz = new Array(10);

    // 1.b) ... x N, donde N es un número ascendente que va de 3 a 12
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(i + 3);
    }

    // 2) Llenar cada arreglo con el índice de su arreglo padre, así el primero arreglo tendrá 0’s, el segundo arreglo solo 1’s, el tercer arreglo solo 2’s y así sucesivamente.
    for (let i = 0; i < matriz.length; i++) {
        for(let j = 0; j< matriz[i].length;j++) {
            matriz[i][j]=i;
        }
    }

    // 3) Mostrar la matriz por consola.
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i]);
    }
    console.log(matriz)

}

