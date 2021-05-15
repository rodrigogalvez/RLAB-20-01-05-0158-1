<template>
  <div id="app">
    <b-container>
      <h1>Conteo de bichos</h1>
      <b-card-group deck>
        <contador
          v-for="contador of contadores"
          :key="contador.titulo + '_a'"
          :titulo="contador.titulo"
          @incrementado="contadorActualizado"
        ></contador>
      </b-card-group>
      <h1>Resumen de bichos</h1>
      <p>Total de bichos: {{ totalBichos }}</p>
      <h2>Bichos por tipo</h2>
      <p v-for="contador of contadores" :key="contador.titulo + '_b'">
        {{ contador.titulo }} = {{ contador.cuenta }}
      </p>
    </b-container>
  </div>
</template>

<script>
import contador from "@/components/contador.vue";

export default {
  name: "App",
  components: {
    contador,
  },
  data() {
    return {
      contadores: [
        {
          titulo: "Moscas",
          cuenta: 0,
        },
        {
          titulo: "Hormigas",
          cuenta: 0,
        },
        {
          titulo: "Arañas",
          cuenta: 0,
        },
      ],
    };
  },
  computed: {
    totalBichos() {
      return this.contadores.reduce(
        (acumulado, contador) => acumulado + contador.cuenta,
        0
      );
    },
  },
  methods: {
    contadorActualizado(titulo, cuenta) {
      let indice = this.contadores.findIndex(
        (contador) => contador.titulo == titulo
      );
      if (indice > -1) {
        this.contadores[indice].cuenta = cuenta;
      }
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
