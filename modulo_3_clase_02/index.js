"use strict";

function verificarestado() {
    let elementonota = document.getElementById("nota");
    let elementoestado = document.getElementById("estado");
    // Nota importante: cuando un elemento en el HTML tiene un ID, se puede usar directamente en el JavaScript.
    // let elementoestado = estado;
    // estado.innerText = "";
    elementoestado.innerText = "";
    let nota = Number(elementonota.value);

    // Confirmar que la nota está entre 1 y 7.
    if (nota >= 1 && nota <= 7) {
        // La nota SI está entre 1 y 7.
        if (nota >= 6) {
            // Si el alumno tiene promedio 6 o superior, el alumno aprueba la asignatura y no rinde examen
            elementoestado.innerText = "el alumno aprueba la asignatura y no rinde examen";
        } else if (nota >= 4) {
            // Si el alumno tiene promedio igual o superior a 4, el alumno aprueba la asignatura y rinde examen
            elementoestado.innerText = "el alumno aprueba la asignatura y rinde examen";
        } else {
            // Si el alumno tiene promedio menor a 4, el alumno reprueba la asignatura y no puede rendir el examen
            elementoestado.innerText = "el alumno reprueba la asignatura y no puede rendir el examen";
        }
    } else {
        elementoestado.innerText = "La nota debe estar entre 1 y 7.";
    }
}