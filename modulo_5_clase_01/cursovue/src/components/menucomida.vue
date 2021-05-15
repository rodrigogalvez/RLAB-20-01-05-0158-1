<template>
  <div>
    <h1>Componente Comida</h1>
    <ul>
      <li v-for="(comida, indice) of listado" :key="indice">{{ comida }}</li>
    </ul>
    <button @click="incrementar">{{ contador }}</button>
  </div>
</template>

<script>
export default {
  props: ["listado"],
  data() {
    return { contador: 0 };
  },
  methods: {
    incrementar() {
      this.contador++;
    },
  },
};
</script>

<style scoped>
</style>