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

/*
    Ejercicio:
    parte 1: completar los compontentes clientes-lista y clientes-datos
    para que muestre el listado de clientes.
    parte 2: en clientes-lista, implementar una búsqueda activa.
*/

Vue.component('clientes-datos',{
    template: /*html*/`
        <div>
            {{datos.nombre}} - {{datos.rut}} - {{datos.sueldo}}
        </div>
    `,
    props: ["datos"]
})

Vue.component('clientes-lista', {
    template: /*html*/`
        <div>
            <input type="search" v-model="filtro">
            <clientes-datos v-for="cliente of filtrado" :datos="cliente" :key="cliente.rut"></clientes-datos>
        </div>
    `,
    props: ["lista"],
    data() {
        return {
            filtro:""
        }
    },
    computed: {
        filtrado() {
            return this.lista.filter((cliente)=>cliente.nombre.includes(this.filtro));
        }
    }
})

let app=new Vue({
    el:"#app",
    data: {
        clientes: clientes
    }
})

