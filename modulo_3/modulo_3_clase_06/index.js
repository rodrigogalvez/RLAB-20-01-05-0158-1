"use strict";

// DECLARACIÓN

var x;
let x;

// Inicalización
var y = 0;
let texto = "hola";

// IF

if (condicion) {
    parteverdadera;
}

if (condicion) {
    parteverdadera;
} else {
    partefalsa;
}

if (condicion) {
    parteverdadera;
} else if (condicion2) {
    parteverdadera;
} else {
    partefalsa;
}

// Operador ternario:
let w = (condicion) ? parteverdadera : partefalsa;

// módulo:
let u = 100 % 5; // 100/5 = 20. El resto es 0. Entonces u = 0;
let o = 103 % 5; // 103/5 = 20.6. El resto es 3. Enotnces o = 3;

// for:
for (inicializacion; condición; incremento) {

}

// funcion:
function f1() {

} // return undefined;

function f2(a, b) {

} // return undefined;

function f3(a, b, c) {
    return a + b + c;
}

// función flecha:
(a, b) => a + b;
function f4(a, b) {
    return a + b;
}

(a, b) => { a + b };
function f5(a, b) {
    a + b;
} // return undefined;

(a, b) => { return a + b };
function f5(a, b) {
    return a + b;
}

// HTML: recuperar el valor de un input.
// <input type = "text" id="input1">
// si  es un número:
let x1 = Number(document.getElementById("input1").value);
// si es texto:
let x2 = document.getElementById("input1").value;

// confirmar que x1 es un número:
if (!isNaN(x1)) {
    // es un número.
} else {
    // no es un número. Es un NaN = Not a Number.
}

// mostarr un resultado:
// <span id="resultado1"></span>
document.getElementById("resultado1").innerText = "lo que sea";
// más seguro:
let r1 = document.createTextNode("lo que sea");
document.getElementById("resultado1").appendChild(r1);

// deshabilitar un input.
// <input type = "text" id="input1">
document.getElementById("input1").setAttribute("disabled","disabled");
// habilitar:
document.getElementById("input1").removeAttribute("disabled");

// evitar que un form envíe datos al servidor:
// <form onsubmit="return false;"> ... </form>

// Ejecutar una fucnión cada cierto tiempo:
setInterval(f1, tiempoenmilisegundos);

// for->while.
for( let i = 1 ; i<10 ; i++ ) {
    etc();
}

{
    let i = 1 ;
    while ( i<10 ) {
        etc();

        i++;
    }
}





