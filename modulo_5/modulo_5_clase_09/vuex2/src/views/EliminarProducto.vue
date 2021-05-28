<template>
  <div>
    <form @submit.prevent v-if="id">
      <label>Código de producto a eliminar</label>
      <p>{{ id }}</p>
      <label>Descripción</label>
      <div>{{descripcion}}</div>
      <label>Precio</label>
      <div>{{precio}}</div>
      <button @click="guardar()">Eliminar</button>
      <button @click="cancelar()">Cancelar</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      id: 0,
      descripcion: "",
      precio: 0,
    };
  },
  methods: {
    ...mapActions(["eliminarProducto", "buscarProducto"]),
    guardar() {
      this.eliminarProducto( {
          id: this.id
        })
        .then(() => {
          this.$router.push({
            name: "Productos",
          });
        });

    },
    cancelar() {
      this.$router.push({
        name: "Productos",
      });
    },
  },
  mounted() {
    this.id = Number(this.$route.params.id);
    this.buscarProducto(this.id).then((producto) => {
      if (producto) {
        this.descripcion = producto.descripcion;
        this.precio = producto.precio;
      } else {
        this.descripcion = "";
        this.precio = 0;
      }
    });
  },
};
</script>