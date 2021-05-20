<template>
  <div>
    <form @submit.prevent v-if="id">
      <label>Código de producto</label>
      <p>{{ id }}</p>
      <label>Descripción</label>
      <div><input type="text" v-model="descripcion" /></div>
      <label>Precio</label>
      <div><input type="number" v-model.number="precio" /></div>
      <button @click="guardar()">Guardar</button>
      <button @click="cancelar()">Cancelar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      descripcion: "",
      precio: 0,
    };
  },
  methods: {
    guardar() {
      // this.$store.commit("actualizarProducto", {
      //   id: this.id,
      //   descripcion: this.descripcion,
      //   precio: this.precio,
      // });
      this.$store
        .dispatch("actualizarProducto", {
          id: this.id,
          descripcion: this.descripcion,
          precio: this.precio,
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
    this.$store.dispatch("buscarProducto", this.id).then((producto) => {
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