"use strict";

Vue.component('input-label',{
    props: ['label','value'],
    template: /*html*/`
        <div>
            <label>{{label}}</label>
            <input type="text" :value="value"
                @input="$emit('input',$event.target.value)">
        </div>
    `
})

Vue.component('datospersona',{
    props: ['persona'],
    template: /*html*/`
        <div>
            <label>nombre</label>
            <input type="text" v-model="persona.nombre">
            <label>apellido</label>
            <input type="text" v-model="persona.apellido">
        </div>
    `
})

let app = new Vue({
    el: "#app",
    data: {
        texto: "",
        activado: false,
        textocomponente:"hola",
        alumno: {
            nombre: "",
            apellido: ""
        }
    }
})