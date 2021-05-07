"use strict";

Vue.component("listaproductos", {
    template: /*html*/`
        <div class="listaproductos">
            <h1>Listado de productos</h1>
            <ol>
                <li v-for="producto of productos">
                    {{producto.nombre}} - {{producto.precio}}
                </li>
            </ol>
        </div>
    `,
    data() {
        return {};
    },
    props: ['productos']
})

Vue.component("crearproducto", {
    template: /*html*/`
        <div>
            <form @submit.prevent>
                <label>Nombre producto</label>
                <input type="text" maxlength="20" v-model="nombre">
                <br>
                <label>Precio</label>
                <input type="number" min="1" max="99999" v-model.number="precio">
                <br>
                <button @click="agregar()" :disabled="!sepuedeagregar">Grabar</button>
            </form>
        </div>
    `,
    data() {
        return {
            nombre: "",
            precio: 1
        };
    },
    props: ["productos"],
    computed: {
        sepuedeagregar() {
            return this.nombre.length > 3;
        }
    },
    methods: {
        agregar() {
            this.productos.push(
                {
                    nombre: this.nombre,
                    precio: this.precio
                }
            )
        }
    }
})

let app = new Vue({
    el: "#app",
    data: {
        productos: [
            {
                nombre: "Lápiz",
                precio: 50
            },
            {
                nombre: "Corrector",
                precio: 2000
            },
            {
                nombre: "Regla",
                precio: 500
            }
        ],
        lenguetas: [
            {
                componente: "listaproductos",
                titulo: "Productos"
            },
            {
                componente: "crearproducto",
                titulo: "Nuevo"
            }
        ],
        lenguetaactual: undefined
    },
    methods:{
        cambiarLengueta(lengueta) {
            this.lenguetaactual=lengueta;
        }
    },
    mounted() {
        this.lenguetaactual=this.lenguetas[0];
    }
})
