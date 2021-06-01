<template>
    <div>
        <div v-if="$store.state.usuario">
            Bienvenido {{$store.state.usuario}}
        </div>
        <div v-else>
            Debe ingresar al sistema primero
        </div>
    </div>
</template>