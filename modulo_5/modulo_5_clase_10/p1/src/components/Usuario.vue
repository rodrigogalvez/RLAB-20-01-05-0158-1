<template>
    <div>
        <h1>Usuario {{name}}</h1>
        <p v-if="usuarioActivo">Activado</p>
        <button @click="activarUsuario">Activar</button>
    </div>
</template>

<script>
export default {
    props: ["name"],
    data() {
        return {
            usuarioActivo:false
        }
    },
    methods:{
        activarUsuario() {
            this.usuarioActivo=true;
        }
    }
}
</script>