"use strict";

let app = new Vue({
    el: "#app",
    data: {
        colores: [
            "red", "green", "blue", "cyan", "yellow", "purple", "black"
        ],
        celdas: [
        ],
        timeHandler:0
    },
    methods: {
        colorAzar() {
            return this.colores[Math.trunc(Math.random() * this.colores.length)];
        },
        cambiarColores() {
            this.celdas.forEach((celda) => { celda.color = this.colorAzar(); });
        },
        iniciarCambio() {
            if (this.timeHandler==0)
                this.timeHandler= setInterval(()=>{this.cambiarColores()},100);
        },
        pararCambio(){
            if (this.timeHandler) {
                clearInterval(this.timeHandler);
                this.timeHandler=0;
            }
        }

    },
    mounted() {
        for (let i = 0 ; i<100;i++) {
            this.celdas.push({
                color: this.colorAzar()
            })
        }
    }
})