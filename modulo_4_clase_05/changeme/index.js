"use strict";

let app = new Vue({
    el: "#app",
    data: {
        estilo: {
            top: 0,
            left: 0
        }
    },
    methods: {
        mover(evento) {
            this.estilo.top = evento.clientY - evento.target.clientHeight/2 + 'px';
            this.estilo.left = evento.clientX -  evento.target.clientWidth/2 + 'px';
        }

    }
})