"use strict";

Vue.component('ficha',{
    props: ['empleado'],
    template: /*html*/`
        <div class="ficha">
            <label>Nombre</label>
            <div>{{empleado.nombre}}</div>
            <label>RUT</label>
            <div>{{empleado.rut}}</div>
            <label>Sueldo</label>
            <div>{{empleado.sueldo}}</div>
        </div>
    `
});

Vue.component('listar',{
    props: ['lista'],
    template: /*html*/`
        <div class="listar">
            <h1>Listado de empleados</h1>
            <ficha v-for="empleado of lista" :empleado="empleado"></ficha>
        </div>
    `
});

let app = new Vue({
    el:"#app",
    data: {
        datos: [
            {
                nombre: "pepito",
                rut: "1-9",
                sueldo: "1000000"
            },
            {
                nombre: "maría",
                rut: "2-9",
                sueldo: "1020000"
            }, 
            {
                nombre: "juanito",
                rut: "3-9",
                sueldo: "1500000"
            },
        ]
    }
})

