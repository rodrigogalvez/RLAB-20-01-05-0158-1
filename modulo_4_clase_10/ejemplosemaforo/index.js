"use strict";

let app = new Vue({
    el: "#app",
    data: {
        luzactiva: "",
        automatico: false
    },
    methods: {
        cambiarColor() {
            switch (this.luzactiva) {
                case 'verde':
                    this.luzactiva = "amarilla";
                    break;
                case 'amarilla':
                    this.luzactiva = "roja";
                    break;
                case 'roja':
                    this.luzactiva = "verde";
                    break;
                default:
                    this.luzactiva = "roja";
                    break;
            }
        }
    },
    mounted() {
        setInterval(()=>{
            if (this.automatico) {
                this.cambiarColor();
            }
        },2000);
    }
})