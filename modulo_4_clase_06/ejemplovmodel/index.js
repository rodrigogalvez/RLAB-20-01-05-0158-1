"use strict";

let app = new Vue({
    el: "#app",
    data: {
        nombre: "",
        precio: 0,
        categoria: "",
        categorias: [{
            codigo: "a",
            descripcion: "Abarrotes"
        },
        {
            codigo: "b",
            descripcion: "Lacteos"
        },
        {
            codigo: "c",
            descripcion: "Carnes"
        }
        ],
        productos: [],
        carrito: [],
        indiceEdicion: -1
    },
    methods: {
        comprar(indice) {
            this.carrito.push(this.productos[indice]);
        },
        textoCategoria(codigo) {
            let indice = this.categorias.findIndex((categoria) => categoria.codigo == codigo);
            if (indice > -1) {
                return this.categorias[indice].descripcion;
            }
        },
        quitar(indice) {
            this.carrito.splice(indice, 1);
        },
        eliminar(indice) {
            this.productos.splice(indice, 1);
        },
        editar(indice) {
            this.nombre = this.productos[indice].nombre;
            this.precio = this.productos[indice].precio;
            this.categoria = this.productos[indice].categoria;
            this.indiceEdicion = indice;
        },
        limpiar() {
            this.nombre = "";
            this.precio = 0;
            this.categoria = "";
        },
        guardar() {
            this.productos[this.indiceEdicion].nombre = this.nombre;
            this.productos[this.indiceEdicion].precio = this.precio;
            this.productos[this.indiceEdicion].categoria = this.categoria;
            this.limpiar();
            this.indiceEdicion = -1;
        },
        agregar() {
            this.productos.push({
                nombre: this.nombre,
                precio: this.precio,
                categoria: this.categoria
            })
            this.limpiar();
        }
    }
})