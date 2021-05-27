<template>
  <div>
    HOLA MUNDO Aquí van los productos
    <p>Parámetros: {{ $route.params }}</p>
    <div v-if="$route.params.nombre">
      <p>Producto elegido: {{ $route.params.nombre }}</p>
      <div v-if="producto">
        <label>Nombre del producto</label>
        <p>{{ producto.nombre }}</p>
        <label>Precio</label>
        <p>{{ producto.precio }}</p>
        <label>Foto:</label><img :src="producto.foto" /><br />
        <!-- <router-link to="/productos">Volver</router-link> -->
        <router-link :to="{ name: $route.name }">Volver</router-link>
      </div>
      <div v-else>El producto no existe</div>
    </div>
    <div v-else>
      <h1>Nuestros productos</h1>
      <ul>
        <li v-for="producto of listado" :key="producto.nombre">
          <router-link
            :to="{ name: $route.name, params: { nombre: producto.nombre } }"
            >{{ producto.nombre }} - {{ producto.precio }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listado: [
        {
          nombre: "Capuccino",
          precio: 1500,
          foto:
            "https://cdn.pixabay.com/photo/2015/05/24/18/21/coffee-782171_960_720.jpg",
        },
        {
          nombre: "Medialuna",
          precio: 1000,
          foto:
            "https://cdn.pixabay.com/photo/2016/07/11/12/12/croissants-1509556_960_720.jpg",
        },
        {
          nombre: "Torta",
          precio: 3000,
          foto:
            "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg",
        },
      ],
    };
  },
  computed: {
    producto() {
      let indice = this.listado.findIndex(
        (producto) => producto.nombre == this.$route.params.nombre
      );
      if (indice > -1) {
        return this.listado[indice];
      } else {
        return undefined;
      }
    },
  },
};
</script>

<style scoped>
img {
  height: 200px;
}
</style>