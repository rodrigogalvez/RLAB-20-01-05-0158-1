"use strict";

let app = new Vue({
    el: "#app",
    data: {
        colores: [
            "red", "green", "blue", "cyan", "yellow", "purple", "black"
        ],
        celdas: [],
        timeHandler: 0,
        cantidadCeldas: 100
    },
    methods: {
        actualizarCeldas() {
            // while (this.celdas.length < this.cantidadCeldas) {
            //     this.crearCelda();
            // }
            // while (this.cantidadCeldas < this.celdas.length) {
            //     this.celdas.pop();
            // }
            for (let i = this.celdas.length; i < this.cantidadCeldas; i++) {
                this.crearCelda();
            }
            for (let i = this.celdas.length; i > this.cantidadCeldas; i--) {
                this.celdas.pop();
            }
        },
        crearCelda() {
            this.celdas.push({
                color: this.colorAzar()
            })
        },
        colorAzar() {
            return this.colores[Math.trunc(Math.random() * this.colores.length)];
        },
        cambiarColores() {
            this.celdas.forEach((celda) => { celda.color = this.colorAzar(); });
        },
        iniciarCambio() {
            if (this.timeHandler == 0)
                this.timeHandler = setInterval(() => { this.cambiarColores() }, 100);
        },
        pararCambio() {
            if (this.timeHandler) {
                clearInterval(this.timeHandler);
                this.timeHandler = 0;
            }
        }


    },
    mounted() {
        this.actualizarCeldas();
    }
})