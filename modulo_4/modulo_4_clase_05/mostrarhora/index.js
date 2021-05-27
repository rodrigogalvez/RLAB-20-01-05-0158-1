"use strict";

let app = new Vue({
    el: "#app",
    data: {
        horaActual: "",
        sumaHoras: 0
    },
    methods: {
        actualizarHora() {
            let x = new Date();
            this.horaActual = x.toLocaleTimeString();
            this.sumaHoras = x.getHours() + x.getMinutes() + x.getSeconds();

        }
    }
})