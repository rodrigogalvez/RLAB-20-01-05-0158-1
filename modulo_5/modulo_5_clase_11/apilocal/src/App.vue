<template>
  <div id="app">
    <Catalogo/>
  </div>
</template>

<script>
import Catalogo from './components/Catalogo.vue'

export default {
  name: 'App',
  components: {
    Catalogo
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
