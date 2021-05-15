<template>
  <b-card header="Contador" :title="titulo">
    <b-card-text>Estado: <b-badge variant="info">{{ cuenta }}</b-badge></b-card-text>
    <b-button variant="primary" @click="incrementar"
      >Incrementar</b-button
    >
  </b-card>
</template>

<script>
export default {
  name: "contador",
  props: ["titulo"],
  data() {
    return {
      cuenta: 0,
    };
  },
  methods: {
    incrementar() {
      this.cuenta++;
      this.$emit("incrementado", this.titulo, this.cuenta);
    },
  },
};
</script>