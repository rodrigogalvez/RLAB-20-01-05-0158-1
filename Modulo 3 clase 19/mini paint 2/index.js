"use strict";
// https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D

class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        // return "(" + this.x + ", " + this.y + ")";
        return `(${this.x}, ${this.y})`; 
    }
}

class Poligono {
    constructor(Puntos) {
        this.puntos = Puntos || [];
    }
    toString() {
        return this.puntos.join(", ");
    }
}

class Pizarra {
    constructor(lienzo) {
        this.lienzo = lienzo;
        this.dibujando = false;
        this.x = 0;
        this.y = 0;
        this.contexto = this.lienzo.getContext("2d");
        this.lienzo.addEventListener("mousedown", this.iniciar);
        this.lienzo.addEventListener("mouseup", this.terminar);
        this.lienzo.addEventListener("mousemove", this.rayar);
    }
    iniciar = (event) => {
        this.dibujando = true;
        this.x = event.offsetX;
        this.y = event.offsetY;
    }
    terminar = (event) => {
        this.dibujando = false;
    }
    rayar = (event) => {
        if (this.dibujando) {
            this.contexto.beginPath();
            this.contexto.lineWidth = 5;
            this.contexto.lineCap = "round";
            this.contexto.lineJoin = "round";
            this.contexto.strokeStyle = "#990000";
            this.contexto.fillStyle = "#990000";
            this.contexto.moveTo(this.x, this.y);
            this.contexto.lineTo(event.offsetX, event.offsetY);
            this.contexto.stroke();

            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
    dibujar(poligono) {
        this.contexto.beginPath();
        this.contexto.lineWidth = 5;
        this.contexto.lineCap = "round";
        this.contexto.lineJoin = "round";
        this.contexto.strokeStyle = "#990000";
        this.contexto.fillStyle = "#990000";
        for (let i = 0; i < poligono.puntos.length; i++) {
            if (i == 0) {
                this.contexto.moveTo(poligono.puntos[i].x, poligono.puntos[i].y);
            } else {
                this.contexto.lineTo(poligono.puntos[i].x, poligono.puntos[i].y);
            }
        }
        this.contexto.closePath();
        this.contexto.stroke();
    }
}

// Buscar todos los CANVAS con clase lienzo
// y convertirlos en un arreglo (Array.from()).
// Convertir este nuevo arreglo en un arreglo de pizarras con map() 
// y con una función que crea una pizarra nueva por cada lienzo (CANVAS).
let pizarras = Array.from(document.querySelectorAll("canvas.lienzo")).map((lienzo) => {
    return new Pizarra(lienzo);
})

// Crea un polígono de tres vértices (un triángulo)
let triangulo = new Poligono([
    new Punto(10, 10),
    new Punto(100, 10),
    new Punto(70, 90)
])

// Esta función multpilica un punto por 2 creando un punto nuevo.
function coordenadapor2(punto) {
    return new Punto(punto.x*2,punto.y*2);
}

// Crea un polígono con forma de estrella (hecho a mano)
let estrella = new Poligono([
    new Punto(45, 13),
    new Punto(70, 85),
    new Punto(7, 35),
    new Punto(72, 33),
    new Punto(14, 90)
])

// crea otro polígono con forma de estrella multiplicando cada punto por 2.
let estrellagrande = new Poligono(estrella.puntos.map(coordenadapor2));

// Dibuja la etrella original y la estrella grande.
pizarras.forEach(
    (pizarra) => {
        pizarra.dibujar(estrella);
        pizarra.dibujar(estrellagrande);
    }
)

// dibujar un hexágono.
// Es hacer trazos regulares cada 2pi/6 radianes.
let hexagono = new Poligono();
for (let i=0;i<6;i++) {
    let angulo = 2*Math.PI/6*i;
    hexagono.puntos.push(new Punto(Math.cos(angulo)*50+100,Math.sin(angulo)*50+250));
}
// Dibujar el hexágono en todas las pizarras:
pizarras.forEach(
    (pizarra)=>{
        pizarra.dibujar(hexagono);
    }
)

// Función para hacer un polígono regular.
function poligonoRegular(x,y,radio,lados) {
    let poligono = new Poligono();
    for (let i=0;i<lados;i++) {
        let angulo= 2*Math.PI/lados*i;
        poligono.puntos.push(new Punto(Math.cos(angulo)*radio+x,Math.sin(angulo)*radio+y));
    }
    return poligono;
}
// Dibujar octágono en todas las pizarras:
pizarras.forEach(
    (pizarra)=>{
        pizarra.dibujar(poligonoRegular(200,200,10,8));
    }
)

pizarras.forEach(
    (pizarra)=>{
        pizarra.dibujar(poligonoRegular(250,200,80,12));
    }
)