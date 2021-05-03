"use strict";

Vue.component('contador',{ 
    template: /*html*/`
        <div>
            <button @click="incrementar">{{cuenta}}</button>
        </div>
    `,
    data() {
        return {
            cuenta:0
        }
    },
    methods: {
        incrementar() {
            this.cuenta++;
        }
    }

})

Vue.component("semaforo", {
    props: ['titulo', 'roja','amarilla','verde'],
    template: /*html*/`
    <div class="componentesemaforo">
        <h1>{{titulo}}</h1>
        <div class="semaforo">
            <div class="luzsemaforo roja" :class="{encendido: luzactiva=='roja'}"></div>
            <div class="luzsemaforo amarilla" :class="{encendido: luzactiva=='amarilla'}"></div>
            <div class="luzsemaforo verde" :class="{encendido: luzactiva=='verde'}"></div>
        </div>
        <div class="controles">
            <select v-model="luzactiva">
                <option value="">--elija un color--</option>
                <option value="roja">{{roja}}</option>
                <option value="amarilla">{{amarilla}}</option>
                <option value="verde">{{verde}}</option>
            </select><br>
            <label><input type="checkbox" v-model="automatico">Automático</label><br>
            <button @click="cambiarColor">Probar</button>
        </div>
    </div>
    `,
    data() {
        return {
            luzactiva: "",
            automatico: false
        }
    },
    methods: {
        cambiarColor() {
            switch (this.luzactiva) {
                case 'verde':
                    this.luzactiva = "amarilla";
                    break;
                case 'amarilla':
                    this.luzactiva = "roja";
                    break;
                case 'roja':
                    this.luzactiva = "verde";
                    break;
                default:
                    this.luzactiva = "roja";
                    break;
            }
        }
    },
    mounted() {
        setInterval(() => {
            if (this.automatico) {
                this.cambiarColor();
            }
        }, 2000);
    }
})

let app = new Vue({
    el: "#app",
})