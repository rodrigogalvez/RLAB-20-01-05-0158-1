"use strict";

let app = new Vue({
    el:"#app",
    data: {
        articulos:[
            {
                codigo: 1,
                descripcion: "Arroz",
                precio: 1100,
                stock: 10
            },
            {
                codigo: 2,
                descripcion: "Salsa tomates",
                precio: 800,
                stock: 0
            },
            {
                codigo: 3,
                descripcion: "Lentejas",
                precio: 1800,
                stock: "0"
            },
            {
                codigo: 4,
                descripcion: "Quinoa",
                precio: 35,
                stock: 2000
            }
        ]
    }
})