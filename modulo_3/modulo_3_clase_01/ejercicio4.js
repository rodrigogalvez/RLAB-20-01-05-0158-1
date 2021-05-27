"use strict";

// 4)	Crear otra página web con código JavaScript que permita mostrar un número aleatorio por consola cada vez que inicie la página.

// console.log( Math.random()) ;

// console.log(Math.floor(Math.random() * 10) + 1);  // returns a random integer from 1 to 10

// 5)	Crear una página que, dado un número generado al azar, muestre por consola el número multiplicado por 2, luego dividido por 2, luego sumado 2 y finalmente restado 2

let numero = Math.floor(Math.random() * 10) + 1;
console.log('Número generado: '+numero );
console.log(numero+' * 2 = '+(numero*2));
console.log(numero+' / 2 = '+(numero/2));
console.log(numero+' + 2 = '+(numero+2));
console.log(numero+' - 2 = '+(numero-2));