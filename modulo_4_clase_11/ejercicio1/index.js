"use strict";

Vue.component('c1', {
    props: ['mostrar'],
    template: /*html*/`
    <h1 v-if="mostrar">COMPONENTE 1</h1>
    `
})
Vue.component('c2', {
    props: ['mostrar'],
    template: /*html*/`
    <h1 v-if="mostrar">COMPONENTE 2</h1>
    `
})
let app = new Vue({
    el: "#app",
    data: {
        activo: true
    }
})