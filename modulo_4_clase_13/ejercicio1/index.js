"use strict";

class Cliente {
    constructor(nombre, rut, sueldo) {
        this.nombre = nombre
        this.rut = rut
        this.sueldo = sueldo
    }
}

let clientes = [
    new Cliente('Pedro', '14144144-4', 400000),
    new Cliente('Pepito', '13133133-3', 300000),
    new Cliente('María', '12122122-2', 200000),
    new Cliente('Ignacho', '15155155', 500000),
    new Cliente('Hector', '16166166-6', 600000),
    new Cliente('Patricio', '17177177-7', 700000),
    new Cliente('Juanita', '18188188-8', 800000),
    new Cliente('Polin', '19199199-9', 900000)
];

Vue.component('clientes-datos',{
    template: /*html*/`
        <div>
            Implementar...
        </div>
    `,
    props: ["datos"]
})

Vue.component('clientes-lista', {
    template: /*html*/`
        <div>
            Implementar...
        </div>
    `,
    props: ["lista"]
})

let app=new Vue({
    el:"#app",
    data: {
        clientes: clientes
    }
})

