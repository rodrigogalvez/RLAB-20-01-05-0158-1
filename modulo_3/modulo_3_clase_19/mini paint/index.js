"use strict";
// https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D

class PaintTD {
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
    terminar = (event)=> {
        this.dibujando = false;
    }
    rayar = (event)=> {
        if (this.dibujando) {
            this.contexto.beginPath();
            this.contexto.lineWidth = 10;
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
}

let lienzos = document.querySelectorAll("canvas.lienzo");
lienzos.forEach(
    (lienzo) => {
        let paint = new PaintTD(lienzo);
    }
)
