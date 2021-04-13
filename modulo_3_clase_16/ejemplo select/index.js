"use strict";

function mostrar() {
    let seleccion = document.getElementById("seleccion");
    console.log("Selección:",seleccion.value);

    let opciones = document.querySelectorAll("select#seleccion > option");
    console.log("Opciones encontradas:", opciones.length);

    opciones.forEach((opcion)=>{
        console.log("Opcion", opcion.innerText);
        console.log("Valor", opcion.value);
        console.log("Seleccionada", opcion.selected);
    })
}
