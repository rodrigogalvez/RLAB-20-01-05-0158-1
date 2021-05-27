"use strict";

let app = new Vue({
    el: "#app",
    data: {
        nombre: "",
        estado: 1
    },
    methods: {
        validar() {
            if (this.nombre == "") {
                this.estado = 3;
            } else {
                this.estado = 2;
            }
        }
    }

})