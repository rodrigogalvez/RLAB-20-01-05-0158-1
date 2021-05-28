<template>
  <div>
    <button @click="agregar">+</button>
    <ul>
      <li v-for="producto of productos" :key="producto.id">
        {{ producto.descripcion }}
        {{ producto.precio }}
        <button @click="modificar(producto.id)">*</button>
        <button @click="eliminar(producto.id)">-</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
      // Enlace unidireccional desde el STORE a este componente.
      ...mapState(["productos"])
  },
  methods: {
    agregar() {
      this.$router.push({
          name: 'Agregar'
      })
    },
    modificar(id) {
      this.$router.push({
          name: 'Modificar',
          params: {
              id: id
          }
      })
    },
        eliminar(id) {
      this.$router.push({
          name: 'Eliminar',
          params: {
              id: id
          }
      })
    },
  },
};
</script>