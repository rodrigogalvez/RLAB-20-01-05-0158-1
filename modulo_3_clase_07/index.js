"use strict";

// // con FOR:
// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

// // con WHILE:
// let i = 10;
// while (i > 0) {
//     console.log(i);
//     i--;
// }

// // Arbolito con FOR:
// for (let linea = 1; linea <= 9; linea++) {
//     let texto = "";
//     for (let columna = 1; columna <= linea; columna++) {
//         texto += "#";
//     }
//     console.log(texto);
// }
// // Arbolito con WHILE:
// let linea = 1;
// while (linea <= 9) {
//     let texto = "";
//     let columna = 1;
//     while (columna <= linea) {
//         texto += "#";
//         columna++;
//     }
//     console.log(texto);
//     linea++;
// }

// // Fibonacci:
// let limite = Number(prompt("Último número"));
// let f0 = 0;
// let f1 = 1;
// let f2 = f0 + f1;
// console.log(f0);
// console.log(f1);
// while (f2 < limite) {
//     console.log(f2);
//     f0 = f1;
//     f1 = f2;
//     f2 = f0 + f1;
// };

// // sueldos:
// {
//     let contador = 0;
//     let acumulado = 0;
//     let entrada = prompt("sueldo");
//     while (entrada != "") {
//         let sueldo = Number(entrada);
//         contador++;
//         acumulado += sueldo;
//         entrada = prompt("sueldo");
//     }
//     let promedio = acumulado / contador;
//     console.log(promedio);
// }

// Edades mayores a 25:
{
    let contador = 0;
    let entrada = prompt("edad");
    while (entrada != "") {
        let edad = Number(entrada);
        if (edad > 25)
            contador++;
        entrada = prompt("edad");
    }
    console.log(contador);
}

