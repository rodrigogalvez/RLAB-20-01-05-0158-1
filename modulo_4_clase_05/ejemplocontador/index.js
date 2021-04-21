"use strict";

let app = new Vue({
    el: "#otroapp",
    data: {
        contador: 0
    },
    methods: {
        incrementar() {
            this.contador++;
        }
    }
})