"use strict";

let app = new Vue({
    el: "#app",
    data: {
        listado: [],
        item: ""
    },
    methods: {
        agregar() {
            if (this.item) {
                this.listado.push(this.item);
                this.item = "";
            }
        },
        eliminar(item) {
            let indice = this.listado.findIndex((i) => i == item);
            if (indice > -1) {
                this.listado.splice(indice, 1);
            }
        }
    }
})