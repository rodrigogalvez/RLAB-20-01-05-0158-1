"use strict";

let app = new Vue({
    el: "#app",
    data: {
        presentacion: 0
    },
    methods: {
        cambiar() {
            this.presentacion++;
            if (this.presentacion>=3) {
                this.presentacion=0;
            }
        }
    }

})