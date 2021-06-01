<template>
  <div>
    <button @click="consultar">Consultar</button>
    <button @click="consultarAwait">Consultar con Await</button>
    <p>{{ mensajeError }}</p>
    <ul>
      <li v-for="producto of listado" :key="producto.codigo">
        {{ producto.codigo }}
        {{ producto.descripcion }}
        {{ producto.precio }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listado: [],
      mensajeError: "",
    };
  },
  methods: {
    consultarAwait: async function () {
        let resultado = await fetch("/data/catalogo.json");
        this.listado = await resultado.json();
    },
    consultar() {
      fetch("/data/catalogo.json?cantidadmaxima=2&parametro2=123").then((resultado) => {
        if (resultado.status == 200) {
        //   resultado.text().then((datos) => {
        //     console.log(datos);
        //   });
          resultado.json().then((datos) => {
            this.listado = datos;
          });
        } else {
          this.mensajeError = `${resultado.status} - ${resultado.statusText}`;
        }
      });
    },
  },
};
</script>