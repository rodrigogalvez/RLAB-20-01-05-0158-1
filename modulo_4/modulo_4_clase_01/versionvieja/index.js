"use strict";

let listado=[];

function agregar() {
    let item = document.getElementById("item");
    if (item.value) {
        listado.push(item.value);
        item.value="";
        actualizarlistado();
    }
}

function actualizarlistado() {
    let resultado = document.getElementById("listado");
    resultado.innerHTML="";
    let ol = document.createElement("ol");

    listado.forEach(
        (item)=>{
            let li = document.createElement("li");
            li.innerText=item;
            let botoneliminar = document.createElement("button");
            botoneliminar.innerText="Eliminar";
            botoneliminar.addEventListener("click",()=>{
                let indice = listado.findIndex((i)=>i==item);
                if (indice>-1) {
                    listado.splice(indice,1);
                    li.remove();
                }
            })
            li.appendChild(botoneliminar);
            ol.appendChild(li);
        }
    )
    resultado.appendChild(ol);
}