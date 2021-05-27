"use strict";

let app = new Vue({
    el: "#app",
    data: {
        nombre: "",
        edad: 0,
        errores: []
    },
    methods: {
        verificar(event) {
            this.errores = [];
            if (this.nombre == "") {
                this.errores.push("El nombre está vacío");
            }
            if (this.nombre.includes(" ")) {
                this.errores.push("El nombre no debe contiener espacios");
            }
            if (this.edad < 18 || this.edad>99) {
                this.errores.push("La edad debe estar entre 18 y 99")
            }
            if (this.errores.length==0) {
                event.target.submit();
                // event.preventDefault();
            }
        }
    }
})