<template>
  <div id="app">
    <BuscarPersonas></BuscarPersonas>
  </div>
</template>

<script>
import BuscarPersonas from './components/BuscarPersonas.vue'

export default {
  name: 'App',
  components: {
    BuscarPersonas
  }
}
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
