<template>
  <div id="app">
    <form @submit.prevent="agregar()">
      <h5>Crear nuevo producto</h5>
      <label>Nombre Producto</label>
      <input type="text" v-model="nombre" /><br />
      <label>Precio</label>
      <input type="number" v-model.number="precio" /><br />
      <button>Agregar</button>
      <button @click="cancelar()" type="button">Cancelar</button>
    </form>
    <h5>Listado de productos</h5>
    <ul>
      <li v-for="producto of productos" :key="producto.id">
        {{ producto.nombre }} - {{ producto.precio }}
        <button @click="modificar(producto.id)">*</button>
        <button @click="eliminar(producto.id)">-</button>
      </li>
    </ul>
  </div>
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
    };
  },
  firestore: {
    productos: db.collection("productos"),
  },
  methods: {
    agregar() {
      if (this.id) {
        db.collection("productos").doc(this.id).set({
          nombre: this.nombre,
          precio: this.precio
        });
        this.id="";
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
      this.nombre="";
      this.precio=0;
      this.id="";
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
