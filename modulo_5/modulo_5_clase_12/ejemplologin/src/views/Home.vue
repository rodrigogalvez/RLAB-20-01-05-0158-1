<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <form @submit.prevent>
      <label>Usuario:</label>
      <input type="text" v-model="usuario" /><br />
      <label>Clave:</label>
      <input type="password" v-model="clave" /><br />
      <button @click="ingresar">Ingresar</button>
      <p>{{ mensaje }}</p>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      usuario: "",
      clave: "",
      mensaje: "",
    };
  },
  components: {},
  methods: {
    ingresar() {
      // this.$router.push({name:'Bienvenido'});
      this.$store
        .dispatch("ingresar", {
          usuario: this.usuario,
          clave: this.clave,
        })
        .then((datos) => {
          if (datos) {
            if (datos.resultado == "ok") {
              this.$router.push({ name: "Bienvenido" });
            } else {
              this.mensaje = datos.mensaje;
            }
          } else {
            this.mensaje="No se recibieron datos";
          }
        })
        .catch(() => {
          this.mensaje = "Ocurrió un error";
        });
    },
  },
};
</script>
