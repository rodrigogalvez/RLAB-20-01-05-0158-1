<template>
  <div>
    <form @submit.prevent>
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
      descripcion: "",
      precio: 0,
    };
  },
  methods: {
    guardar() {
      this.$store
        .dispatch("agregarProducto", {
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
};
</script>