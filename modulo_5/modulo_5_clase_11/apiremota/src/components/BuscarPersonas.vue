<template>
  <div>
    <select v-model="resultadosPagina">
      <option value="10">10 por página</option>
      <option value="25">25 por página</option>
      <option value="50">50 por página</option>
      <option value="75">75 por página</option>
      <option value="100">100 por página</option>
    </select>
    <select v-model="pagina">
      <option value="1">Página 1</option>
      <option value="2">Página 2</option>
      <option value="3">Página 3</option>
      <option value="4">Página 4</option>
      <option value="5">Página 5</option>
    </select>
    <button @click="consultar">Consultar</button>
    <!-- <p>{{ datos }}</p> -->
    <ol v-if="datos">
      <li v-for="usuario of datos.results" :key="usuario.login.uuid">
        <p>
          {{ usuario.name.title }}. {{ usuario.name.first }}
          {{ usuario.name.last }} ({{ usuario.dob.age }})
        </p>
        <p>Usuario: {{ usuario.login.username }}</p>
        <p>
          Dirección: {{ usuario.location.street.number }}
          {{ usuario.location.street.name }}, {{ usuario.location.city }},
          {{ usuario.location.state }}, {{ usuario.location.country }}
        </p>
        <img :src="usuario.picture.thumbnail" alt="" />
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datos: undefined,
      resultadosPagina: "10",
      pagina: "1",
      semilla: ""
    };
  },
  methods: {
    consultar() {
      fetch(`https://randomuser.me/api/?results=${this.resultadosPagina}&page=${this.pagina}&seed=${this.semilla}`).then(
        (respuesta) => {
          if (respuesta.status == 200) {
            respuesta.json().then((datos) => {
              this.datos = datos;
              this.semilla=datos.info.seed;
            });
          }
        }
      );
    },
  },
};
</script>