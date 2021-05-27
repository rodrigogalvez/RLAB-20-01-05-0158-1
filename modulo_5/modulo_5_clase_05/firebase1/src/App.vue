<template>
  <b-container id="app">
    <b-navbar variant="light" type="light">
      <b-navbar-brand href="#">Ejericio Firebase</b-navbar-brand>
    </b-navbar>
    <b-form @submit.prevent>
      <h5>Crear nuevo producto</h5>
      <b-form-group label="Nombre producto">
        <b-form-input
          v-model="nombre"
          placeholder="Escriba nombre del producto"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Precio">
        <b-form-input
          type="number"
          v-model.number="precio"
          placeholder="Escriba el precio en pesos"
        ></b-form-input>
      </b-form-group>
      <b-button variant="primary" @click="agregar()">Agregar</b-button>
      <b-button variant="secondary" @click="cancelar()" type="button"
        >Cancelar</b-button
      >
    </b-form>
    <h5>Listado de productos</h5>
    <b-card no-body footer="Fin del listado">
      <b-card-header>
        Listado de Productos
        <b-form inline class="float-right"
          ><b-input-group>
            <b-form-input
              placeholder="Buscar"
              v-model="filtro"
            ></b-form-input>
            <b-input-group-append>
              <b-input-group-text>
              <b-icon icon="search"></b-icon>
              </b-input-group-text>
            </b-input-group-append>
          </b-input-group>
        </b-form>
      </b-card-header>

      <b-list-group flush>
        <b-list-group-item
          v-for="producto of productos_filtrados"
          :key="producto.id"
        >
          {{ producto.nombre }} - {{ producto.precio }}
          <b-button-group class="float-right">
            <b-button @click="modificar(producto.id)">*</b-button>
            <b-button @click="eliminar(producto.id)">-</b-button>
          </b-button-group>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </b-container>
</template>

<script>
import { db } from "@/db.js";

export default {
  name: "App",
  data() {
    return {
      nombre: "",
      precio: 0,
      id: "",
      productos: [],
      filtro: "",
    };
  },
  firestore: {
    productos: db.collection("productos"),
  },
  computed: {
    productos_filtrados() {
      return this.productos.filter((producto) =>
        producto.nombre.toUpperCase().includes(this.filtro.toUpperCase())
      );
    },
  },
  methods: {
    agregar() {
      if (this.id) {
        db.collection("productos").doc(this.id).set({
          nombre: this.nombre,
          precio: this.precio,
        });
        this.id = "";
      } else {
        db.collection("productos").add({
          nombre: this.nombre,
          precio: this.precio,
        });
      }
      this.nombre = "";
      this.precio = 0;
    },
    eliminar(id) {
      db.collection("productos").doc(id).delete();
    },
    modificar(id) {
      db.collection("productos")
        .doc(id)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            let datos = snapshot.data();
            this.nombre = datos.nombre;
            this.precio = datos.precio;
            this.id = id;
          }
        });
    },
    cancelar() {
      this.nombre = "";
      this.precio = 0;
      this.id = "";
    },
  },
};
</script>

<style>
</style>
