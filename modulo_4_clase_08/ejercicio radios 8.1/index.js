"use strict";

let app = new Vue({
    el: "#app",
    data: {
        figuras: [
            {
                foto: "img/amanita.png",
                descripcion: "Amanita"
            },
            {
                foto: "img/auto.png",
                descripcion: "Auto"
            },
            {
                foto: "img/flor.png",
                descripcion: "Flor"
            },
            {
                foto: "img/gato.png",
                descripcion: "Gato"
            },
            {
                foto: "img/sol.png",
                descripcion: "Sol"
            }
        ],
        elegida: undefined
    },
    mounted() {
        this.elegida = this.figuras[1];
    }
})