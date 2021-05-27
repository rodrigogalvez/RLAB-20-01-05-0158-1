"use strict";

class Cliente {
    constructor(nombre, rut, sueldo) {
        this.nombre = nombre;
        this.rut = rut;
        this.sueldo = sueldo;
    }
    toString() {
        return `${this.nombre} - ${this.rut} $${this.sueldo}`;
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
    Parte 1: Crear un componente para modificar un cliente.
    Parte 2: Crear un componente para borrar un cliente con una confirmación.
    Parte 3: Agregar estilo usando BoostrapCSS (sin la parte de JavaScript).
*/

Vue.component('clientes-nuevo', {
    template:/*html*/`
        <form @submit.prevent>
            <input type="text" v-model="nombre">
            <input type="text" v-model="rut">
            <input type="number" v-model.number="sueldo">
            <button @click="agregar">+</button>
        </form>
    `,
    props: ["lista"],
    data() {
        return {
            nombre: "",
            rut: "",
            sueldo: 0
        }
    },
    methods: {
        agregar() {
            this.lista.push(new Cliente(this.nombre, this.rut, this.sueldo))
        }
    }
})

Vue.component('clientes-datos', {
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
            filtro: ""
        }
    },
    computed: {
        filtrado() {
            return this.lista.filter((cliente) => cliente.toString().toUpperCase().includes(this.filtro.toUpperCase()));
        }
    }
})

new Vue({
    el: "#app",
    data: {
        clientes: clientes
    }
})

