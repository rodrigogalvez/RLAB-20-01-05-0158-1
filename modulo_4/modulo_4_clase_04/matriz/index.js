"use strict";

let app = new Vue({
    el: "#app",
    data: {
        colores: [
            "red", "green", "blue", "cyan", "yellow", "purple", "black"
        ],
        matriz: [],
        timeHandler: 0,
        cantidadFilas: 3,
        cantidadColumnas: 3
    },
    methods: {
        actualizarMatriz() {
            while (this.matriz.length < this.cantidadFilas) {
                this.matriz.push([]);
            }
            while (this.cantidadFilas < this.matriz.length) {
                this.matriz.pop();
            }
            this.matriz.forEach((fila) => {
                while (fila.length < this.cantidadColumnas) {
                    fila.push(this.nuevaCelda());
                }
                while (this.cantidadColumnas < fila.length) {
                    fila.pop();
                }
            })
        },
        nuevaCelda() {
            return {
                color: this.colorAzar()
            };
        },
        colorAzar() {
            return this.colores[Math.trunc(Math.random() * this.colores.length)];
        },
        cambiarColores() {
            this.matriz.forEach((fila) => {
                fila.forEach((celda) => {
                    celda.color = this.colorAzar();
                })
            });
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
        this.actualizarMatriz();
    }
})