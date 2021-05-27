"use strict";

new Vue({
    el: "#app",
    data: {
        numerosajugar: []
    },
    methods: {
        numeroAlAzar() {
            return Math.trunc(Math.random() * 41) + 1;
        },
        elegir() {
            this.numerosajugar = [];
            while (this.numerosajugar.length < 7) {
                let nuevonumero = this.numeroAlAzar();
                if (!this.numerosajugar.includes(nuevonumero)) {
                    this.numerosajugar.push(nuevonumero);
                }
            }
        }
    }
})

