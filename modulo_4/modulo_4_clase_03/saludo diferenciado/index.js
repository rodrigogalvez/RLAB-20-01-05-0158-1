"use strict";

let app = new Vue({
    el: "#app",
    data: {
        nombre: "",
        partedia: 1,
        emociones: [
            "cansado",
            "muy bien",
            "contento",
            "triste",
            "con sueño",
            "con hambre",
            "eufórico"
        ],
        emocion: ""
    },
    methods: {
        elegirEmocion() {
            let indice = Math.trunc(Math.random() * this.emociones.length);
            this.emocion = this.emociones[indice];
        }
    }
})