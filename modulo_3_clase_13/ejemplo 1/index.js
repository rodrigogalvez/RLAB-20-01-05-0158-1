"use strict";

let contador = 0;
function incrementarContador() {
    contador++;
    document.getElementById("resultado").innerText = contador;
}

function mostrarHora() {
    let x = new Date()
    document.getElementById("horaactual").innerText = x.toLocaleTimeString();
}

let numeroTimer = 0;

function iniciarReloj() {
    if (numeroTimer) {
        clearInterval(numeroTimer);
        numeroTimer = 0;
    } else {
        numeroTimer = setInterval(mostrarHora, 1000);
    }
}

let cronometroInicio = 0;
let cronometroTimer = 0;

function iniciarCronometro() {
    let x = new Date();
    cronometroInicio = x.getTime();
    if (!cronometroTimer)
        cronometroTimer = setInterval(actualizarCronometro, 1);
}

function actualizarCronometro() {
    let x = new Date();
    let tiempoActual = x.getTime();
    let diferencia = tiempoActual - cronometroInicio;

    // Cálculo de segundos, minutos y horas corregido.
    let milisegundos = diferencia % 1000;
    let segundosreal = diferencia / 1000; // pasar de milisegundos a segundos.
    let segundos = (Math.trunc(segundosreal % 60) + milisegundos / 1000).toFixed(3); // los segundos en minutos, es el resto de dividir por 60.
    let minutos = Math.trunc(segundosreal / 60 % 60); // minutos en una hora, dividir los segundos por 60 para pasar a minutos, luego el resto de dividir por 60 para pasar a minutos dentro de una hora.
    let horas = Math.trunc(segundosreal / 60 / 60); // horas, dividir los segundos por 60 segundos para pasar a minutos y luego por 60 para pasar a horas.
    document.getElementById("display").innerText = `${horas}:${minutos}:${segundos}`;
}

function pararCronometro() {
    clearInterval(cronometroTimer);
    cronometroTimer = 0;
}