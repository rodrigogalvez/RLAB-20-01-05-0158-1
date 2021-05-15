<template>
  <div id="app">
    <h1>Hola Mundo!!</h1>
    <img alt="Vue logo" src="./assets/logo.png" />
    <menucomida :listado="listado"></menucomida>
  </div>
</template>

<script>
import menucomida from '@/components/menucomida.vue'

export default {
  name: "App",
  components: {
    menucomida
  },
  data() {
    return {
      listado: ["Café", "Helados", "Facturas"],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
