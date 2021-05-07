"use strict";

Vue.component("listaproductos", {
    template: /*html*/`
        <div class="componentes">
            <h1>Listado de productos</h1>
            <ol>
                <li v-for="(producto,indiceinterno) of productos" :class="{seleccionado: indice==indiceinterno}">
                    {{producto.nombre}} - \${{producto.precio}}
                    <button @click="cambiarSeleccion(producto,indiceinterno)">*</button>
                </li>
            </ol>
        </div>
    `,
    data() {
        return {};
    },
    props: ["productos", "indice"],
    methods: {
        cambiarSeleccion(producto,indiceinterno) {
            if (indiceinterno==this.indice) {
                this.$emit('deseleccionado');
            } else {
                this.$emit('seleccionado', producto, indiceinterno);
            }
        }
    }
})

Vue.component("crearproducto", {
    template: /*html*/`
        <div class="componentes">
            <form @submit.prevent="agregar">
                <h1>Crear producto nuevo</h1>
                <label>Nombre producto</label>
                <input type="text" maxlength="20" v-model="nombre">
                <br>
                <label>Precio</label>
                <input type="number" min="1" max="99999" v-model.number="precio">
                <br>
                <button :disabled="!sepuedeagregar">Grabar</button>
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

Vue.component("modificarproducto", {
    template: /*html*/`
        <div class="componentes">
            <h1>Modificar producto</h1>
            <form @submit.prevent="modificar" v-if="producto">
                <label>Nombre producto</label>
                <input type="text" maxlength="20" v-model="nombre">
                <br>
                <label>Precio</label>
                <input type="number" min="1" max="99999" v-model.number="precio">
                <br>
                <button :disabled="!sepuedeagregar">Grabar</button>
            </form>
            <div v-else>
                <p>Debe seleccionar un producto para habilitar este componente</p>
            </div>
        </div>
    `,
    data() {
        return {
            nombre: "",
            precio: 1
        };
    },
    props: ["productos", "producto"],
    watch: {
        // El watch no funciona la primera vez que se muestra el componente.
        // El watch sirve para monitorear si ha cambiado algún parámetro del componente.
        // El watch recibe dos parámetros: el nuevo valor (después del cambio) y el viejo valor (antes del cambio).
        producto(nuevo, viejo) {
            if (nuevo) {
                this.nombre = nuevo.nombre;
                this.precio = nuevo.precio;
            } else {
                this.nombre = "";
                this.precio = 0;
            }
        }
    },
    mounted() {
        // Solo funciona la primera vez que se muestra el componente.
        if (this.producto) {
            this.nombre = this.producto.nombre;
            this.precio = this.producto.precio;
        } else {
            this.nombre = "";
            this.precio = 0;
        }
    },
    computed: {
        sepuedeagregar() {
            return this.nombre.length > 3;
        }
    },
    methods: {
        modificar() {
            this.producto.nombre = this.nombre;
            this.producto.precio = this.precio;
        }
    }
})

Vue.component("eliminarproducto", {
    template: /*html*/`
        <div class="componentes">
            <h1>Eliminar producto</h1>
            <form @submit.prevent="eliminar" v-if="producto">
                <label>Nombre producto</label>
                <input type="text" maxlength="20" v-model="nombre" disabled>
                <br>
                <label>Precio</label>
                <input type="number" min="1" max="99999" v-model.number="precio" disabled>
                <br>
                <button>Eliminar</button>
            </form>
            <div v-else>
                <p>Debe seleccionar un producto para habilitar este componente</p>
            </div>
        </div>
    `,
    data() {
        return {
            nombre: "",
            precio: 1
        };
    },
    props: ["productos", "producto", "indice"],
    watch: {
        // El watch no funciona la primera vez que se muestra el componente.
        // El watch sirve para monitorear si ha cambiado algún parámetro del componente.
        // El watch recibe dos parámetros: el nuevo valor (después del cambio) y el viejo valor (antes del cambio).
        producto(nuevo, viejo) {
            if (nuevo) {
                this.nombre = nuevo.nombre;
                this.precio = nuevo.precio;
            } else {
                this.nombre = "";
                this.precio = 0;
            }
        }
    },
    methods:{
        eliminar() {
            if (this.indice>-1) {
                this.productos.splice(this.indice,1);
                this.$emit('deseleccionado');
            }
        }
    },
    mounted() {
        // Solo funciona la primera vez que se muestra el componente.
        if (this.producto) {
            this.nombre = this.producto.nombre;
            this.precio = this.producto.precio;
        } else {
            this.nombre = "";
            this.precio = 0;
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
            },
            {
                componente: "modificarproducto",
                titulo: "Modificar"
            },
            {
                componente: "eliminarproducto",
                titulo: "Eliminar"
            }
        ],
        lenguetaactual: undefined,
        producto: undefined,
        indice: -1
    },
    methods: {
        cambiarLengueta(lengueta) {
            this.lenguetaactual = lengueta;
        },
        capturarSeleccionado(producto, indice) {
            this.producto = producto;
            this.indice = indice;
        },
        anularSeleccionado() {
            this.indice = -1;
            this.producto = undefined;
        }
    },
    mounted() {
        this.lenguetaactual = this.lenguetas[0];
    }
})
