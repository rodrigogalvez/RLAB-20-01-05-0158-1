"use strict";

// ! Nota importante: Presencial, Online y Libre.

// Alumno: se define como un objeto con nombre, apellido y tipo.
class Alumno {
    constructor(nombre, apellido, edad, tipo) {
        this.id = +new Date() + Math.random() + "";
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.tipo = tipo;
    }
    toString() {
        // toString() debería convertir el objeto en un texto legible.
        return `${this.nombre} ${this.apellido} (${this.edad}) (${this.tipo})`;
    }
    copiar(alumno) {
        this.nombre = alumno.nombre;
        this.apellido = alumno.apellido;
        this.tipo = alumno.tipo;
        this.edad = alumno.edad;
    }
}

let rodrigo = new Alumno("Rodrigo", "Galvez", 45, "Online");
let fabian = rodrigo; // --> esto no es clonar o copiar, sino que se asigna la misma referencia.
fabian.nombre = "Fabian";
// ¿cuánto vale ahora rodrigo.nombre?
// -->> vale "Fabian" porque es el MISMO OBJETO. 

class Curso {
    constructor(nombre, listaAlumnos) {
        this.nombre = nombre;
        this.alumnos = listaAlumnos; // es un arreglo de Alumno
    }
    agregar(alumno) { // este es mejor que el crear()
        // agrega un alumno al curso.
        // si quiero usar agregar, se usa así:
        // x.agregar(new Alumno("juan","perez","Presencial"))
        this.alumnos.push(alumno);
    }
    crear(nombre, apellido, edad, tipo) {
        // crea un alumno y lo agrega al curso.
        // si quiero usar agregar, se usa así:
        // x.crear("juan","perez","Presencial")
        this.alumnos.push(new Alumno(nombre, apellido, edad, tipo));
    }
    buscar(texto) {
        return this.alumnos.filter((alumno) => alumno.toString().toUpperCase().includes(texto.toUpperCase()));
    }
    editar(id, alumno) {
        let indice = this.alumnos.findIndex((alumno) => alumno.id == id);
        // puede actualizar así:
        // this.alumnos[indice].nombre = alumno.nombre;
        // this.alumnos[indice].apellido = alumno.apellido;
        // this.alumnos[indice].tipo = alumno.tipo;

        // pero así es más profesional:
        this.alumnos[indice].copiar(alumno);
    }
    eliminar(id) {
        let indice = this.alumnos.findIndex((alumno) => alumno.id == id);
        this.alumnos.splice(indice, 1);
    }

}

let cursoFrontEnd = new Curso("FrontEnd Trainee", []);
cursoFrontEnd.agregar(new Alumno("Anibal", "Solar", 25, "Online"));
cursoFrontEnd.agregar(new Alumno("Deicibell", "Gonzalez", 21, "Online"));
cursoFrontEnd.crear("Evelyn", "Sotomayor", 23, "Online");
cursoFrontEnd.crear("Fabian", "Castillo", 29, "Online");

// Buscamos cualquier alumno con apellido o nombre con "So"
let ApellidosConSO = cursoFrontEnd.buscar("So");
// Buscamor cualquier alumno con apellido o nombre con "ll"
let ApellidosConLL = cursoFrontEnd.buscar("ll");

// Deycibell tiene su nombre mal escrito. Se llama Deicibell en el arreglo.
// Para corregirlo y respetando las reglas de negocio que programamos, debemos buscar su ID y cambiar el alumno con ese ID.
// let id = cursoFrontEnd.buscar("Deicibell")[0].id;
// cursoFrontEnd.editar(id, new Alumno("Deycibell", "Gonzalez", 21, "Online"));
// Ahora, la alumna Deicibell ha sido reemplazada por Deycibell.

// Dice Deycibell: me gustaria que solo necesitaramos cambiar el nombre y no llenar todo de nuevo
// Bueno, eso queda mucho más corto porque siempre con objetos trabajamos con las referencias a estos objetos, no con una copia del objeto.
cursoFrontEnd.buscar("Deicibell")[0].nombre = "Deycibell";


function actualizarResultado() {
    let resultado = document.getElementById("resultado");
    let texto = document.getElementById("texto").value;
    resultado.innerHTML = "";
    let encontrados = cursoFrontEnd.buscar(texto);
    encontrados.forEach(
        (encontrado) => {
            let nuevo = document.createElement("li");
            nuevo.innerText = encontrado.toString();
            nuevo.classList.add("list-group-item");
            
            let botoneditar = document.createElement("button");
            botoneditar.innerText = "Editar";
            botoneditar.className="btn btn-warning";
            botoneditar.addEventListener("click",
                () => {
                    document.getElementById("nombre").value = encontrado.nombre;
                    document.getElementById("apellido").value = encontrado.apellido;
                    document.getElementById("edad").value = encontrado.edad;
                    document.getElementById("tipo").value = encontrado.tipo;
                    document.getElementById("id").value = encontrado.id;
                }
            )

            let botoneliminar = document.createElement("button");
            botoneliminar.className="btn btn-danger";
            botoneliminar.innerText = "Eliminar";
            botoneliminar.addEventListener("click",
                () => {
                    cursoFrontEnd.eliminar(encontrado.id);
                    actualizarResultado();
                }
            )

            nuevo.appendChild(botoneditar);
            nuevo.appendChild(botoneliminar);

            resultado.appendChild(nuevo);
        }
    )
}

function agregar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = Number(document.getElementById("edad").value);
    let tipo = document.getElementById("tipo").value;
    let id = document.getElementById("id").value;
    let formulario = document.getElementById("formulario");

    if (id == "") {
        let nuevo = new Alumno(nombre, apellido, edad, tipo);
        cursoFrontEnd.agregar(nuevo);
    } else {
        let modificado = new Alumno(nombre, apellido, edad, tipo);
        cursoFrontEnd.editar(id, modificado);
    }
    formulario.reset();
    actualizarResultado();
}

actualizarResultado();