"use strict";

let app = new Vue({
    el: "#app",
    data: {
        cosas: [
            {
                nombre: "Lápiz",
                precio: 1000,
                cantidad: 10
            },
            {
                nombre: "Goma",
                precio: 300,
                cantidad: 15
            },
            {
                nombre: "Sacapuntas",
                precio: 200,
                cantidad: 5
            }
        ],
        productosValorados: 0,
        cantidadTotal: 0
    }, methods: {
        calcularStockValorado() {
            this.productosValorados = this.cosas.reduce((acumulado, cosa) => acumulado + cosa.precio * cosa.cantidad, 0);
            this.cantidadTotal = this.cosas.reduce((acumulado, cosa) => acumulado + cosa.cantidad, 0);
        }
    }
})