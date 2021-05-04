"use strict";

Vue.component("semaforo", {
    // Si va a usar v-model con un componente, necesita un props que se llame value.
    // Y "avisar" que se ha ejecutado un cambio en el value (avisa con $emit()).
    props: ['titulo', 'roja', 'amarilla', 'verde', 'value'],
    template:`#semaforo`,
    data() {
        return {
        }
    }
})

Vue.component("semaforo2", {
    // Si quiere simplificar o cambiar varios atributos, es mejor pasar un objeto.
    props: ['datos'],
    template: /*html*/`
    <div class="componentesemaforo">
        <h1>{{datos.titulo}}</h1>
        <div class="semaforo">
            <div class="luzsemaforo roja" :class="{encendido: datos.luzactiva=='roja'}"></div>
            <div class="luzsemaforo amarilla" :class="{encendido: datos.luzactiva=='amarilla'}"></div>
            <div class="luzsemaforo verde" :class="{encendido: datos.luzactiva=='verde'}"></div>
        </div>
        <div class="controles">
            <label><input type="radio" value="" v-model="datos.luzactiva"
            >--elija un color--</label><br>
            <label><input type="radio" value="roja" v-model="datos.luzactiva"
            >{{datos.roja}}</label><br>
            <label><input type="radio" value="amarilla" v-model="datos.luzactiva"
            >{{datos.amarilla}}</label><br>
            <label><input type="radio" value="verde" v-model="datos.luzactiva"
            >{{datos.verde}}</label><br>
        </div>
    </div>
    `,
    data() {
        return {
        }
    }
})

let app = new Vue({
    el: "#app",
    data: {
        semaforos: [
            {
                titulo: "Riesgo de incendio",
                roja: "Alto",
                amarilla: "Moderado",
                verde: "Bajo",
                luzactiva: "verde"
            },
            {
                titulo: "Rayos UV",
                roja: "Peligroso",
                amarilla: "Muy alto",
                verde: "Alto",
                luzactiva: ""
            },
            {
                titulo: "Riesgo de lluvias",
                roja: "Diluvio",
                amarilla: "Lloviznas",
                verde: "Nubarrones",
                luzactiva: ""
            },
            {
                titulo: "Promedio de notas",
                roja: "Repitente",
                amarilla: "En peligro",
                verde: "Promedio azul",
                luzactiva: ""
            },
        ]
    }
})