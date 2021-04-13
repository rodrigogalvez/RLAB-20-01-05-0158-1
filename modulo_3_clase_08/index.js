"use strict";

/* 
    * Juego del Ahorcado

    Adivinar una palabra usando una pista y ejecutando 6 intentos como máximo.

    TODO: Definir las palabras y las pistas -> LISTO.
    TODO: Elegir una palabra y pista al azar. -> LISTO.
    TODO: Marcar las letras usadas
    TODO: El dibujo
    TODO: Mensajes de éxito o fracaso (triunfo)
    TODO: Borrar partes del dibujo
    TODO: Tablero aciertos/errores => puntaje
    TODO: Recuadro para escribir la palabra si la sabe

*/

/* 
    Materia necesaria nueva:
    * arreglos
    * objeto
*/

// situación actual: Variables escalares
// tengo que anotar 200 palabras con 200 pistas.
// ? ¿Cuántas variables necesito?
// ! ¡¡¡Son 400 variables!!!
let palabra1 = "MANZANA";
let pista1 = "Fruta, color rojo, culpable del primer pecado";
let palabra2 = "PERA";
let pista2 = "Fruta, color amarillo, la llaman del agua";

// situación nueva 1: Variables objetos (objetos implícitos)
// tengo que anotar 200 objetos.
// ? ¿Cuántas variables necesito?
// ! ¡¡¡Son 200 variables!!!
let objetopalabra1 = { palabra: "MANZANA", pista: "Fruta, color rojo, culpable del primer pecado" };
let objetopalabra2 = { palabra: "PERA", pista: "Fruta, color amarillo, la llaman del agua" }

// situación nueva 2: Arreglos
// tengo que anotar 200 pares palabra-pista.
// ? ¿Cuántas variables necesito?
// ! Solo una. ¡FLOP!
let palabras = [
    { palabra: "MANZANA", pista: "Fruta, color rojo, culpable del primer pecado" },
    { palabra: "PERA", pista: "Fruta, color amarillo, la llaman del agua" },
    { palabra: "PLATANO", pista: "Pistilo de una flor, amarillo, comestible" }
];

function mostrarPalabras() {
    for (let indice = 0; indice < palabras.length; indice++) {
        console.log(palabras[indice].palabra, palabras[indice].pista)
    }
}

function mostrarPalabras2() {
    palabras.forEach(
        function (palabra) { //<- esto se llama "iterador"
            console.log(palabra.palabra, palabra.pista);
        }
    )
}
function mostrarPalabras3() {
    palabras.forEach(mostrarUno);
    function mostrarUno(palabra) { //<- esto se llama "iterador"
        console.log(palabra.palabra, palabra.pista);
    };
}

function mostrarPalabrasHTML() {
    let listadoPalabras = document.getElementById("listadoPalabras");
    palabras.forEach(
        function (palabra) { //<- esto se llama "iterador"
            let nuevo = document.createElement("li");
            nuevo.innerText = "Palabra: " + palabra.palabra + " pista: " + palabra.pista;
            listadoPalabras.appendChild(nuevo);
        }
    )
}

function elegirPalabraAzar() {
    let indice = Math.trunc(Math.random() * palabras.length);
    return palabras[indice];
}

function mostrarPalabraAzarHTML() {
    let palabraAzar = document.getElementById("palabraAzar");
    palabraAzar.innerText = elegirPalabraAzar().palabra;
}

//    if (edad>25) contar++;