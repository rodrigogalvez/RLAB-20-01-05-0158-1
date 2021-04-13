"use strict";

function mostrarPares() {
    let pares = [];
    for (let i = 0; i <= 49; i++) {
        if (i % 2 == 0) {
            pares.push(i);
        }
    }
    for (let par of pares) {
        console.log(par)
    }
}

function mostrarParesAlAzar() {
    let tope = Math.trunc(Math.random() * 21);
    let pares = [];
    for (let i = 0; i <= tope; i++) {
        if (i % 2 == 0) {
            pares.push(i);
        }
    }
    for (let par of pares) {
        console.log(par)
    }
}

function mostrarParesAlAzarHTML() {
    let tope = Math.trunc(Math.random() * 21);
    let pares = [];
    for (let i = 0; i <= tope; i++) {
        if (i % 2 == 0) {
            pares.push(i);
        }
    }
    for (let par of pares) {
        let nuevo = document.createElement("p");
        nuevo.innerText = par;
        document.body.appendChild(nuevo);
    }
}



function cambiarColorSpan() {
    let colores = ['red', 'blue', 'green', 'yellow', 'aqua', 'brown', "violet", "salmon"];

    function colorAzar() {
        let indice = Math.trunc(Math.random() * colores.length);
        return colores[indice];
    }

    let elementos = document.querySelectorAll('span');

    for (let indice = 0; indice < elementos.length; indice++) {
        elementos[indice].style.backgroundColor = colorAzar();
    }
}

cambiarColorSpan()

function generarTablero() {
    let color = false;
    for (let fila = 0; fila < 8; fila++) {
        for (let columna = 0; columna < 8; columna++) {
            let cuadrito = document.createElement("span");
            cuadrito.innerText = "X";
            cuadrito.style.backgroundColor = color ? "white" : "black";
            color = !color;
            document.body.appendChild(cuadrito);
        }
        color = !color;
        document.body.appendChild(document.createElement("br"));
    }
}

function generarTablero2() {
    let color = ["white", "black"];
    let indice = 0;
    for (let fila = 0; fila < 8; fila++) {
        for (let columna = 0; columna < 8; columna++) {
            let cuadrito = document.createElement("span");
            cuadrito.style.backgroundColor = color[indice % 2];
            cuadrito.style.width = "20px";
            cuadrito.style.height = "20px";
            cuadrito.style.display = "inline-block";
            cuadrito.innerHTML = "&nbsp;";
            document.body.appendChild(cuadrito);
            indice++;
        }
        document.body.appendChild(document.createElement("br"));
        indice++;
    }
}