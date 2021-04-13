"use strict";

let frutas = ["sandia", "platano", "melon"];
let verduras = ["papas", "cebollas", "tomates"];

console.log("frutas ", frutas);
console.log("verduras ", verduras);

let mercaderia = frutas.concat(verduras);

console.log("mercaderia ", mercaderia);

let mercaderia2 = [...frutas, ...verduras];
// let mercaderia2 = ["sandia", "platano", "melon", "papas", "cebollas", "tomates"];
console.log("mercaderia2 ", mercaderia2);

let nuevasfrutas = ["naranja", "manzana", "kiwi", "pera"];
// quiero que las nuevasfrutas queden entre el melon y las papas en el arreglo mercaderia2.
mercaderia2.splice(3, 0, ...nuevasfrutas);
console.log("Mercaderia actualizada", mercaderia2);

console.log("SUMAS");
function suma(a, b) {
    return a + b;
}

console.log(suma(3, 5));
let datos = [3, 5];
console.log(suma(datos[0], datos[1]));
console.log(suma(...datos));

function multiplica(a, b) {
    return a * b;
}

console.log("resultado= ", 3 + 5 * 6 + 9);
console.log("resultado= ", suma(suma(3, multiplica(5, 6)), 9))


// patrón MODULE:
// Contador:

let contador = ( ()=>{
    let cuenta = 0;
    return () =>{ return cuenta++; }
} )();

