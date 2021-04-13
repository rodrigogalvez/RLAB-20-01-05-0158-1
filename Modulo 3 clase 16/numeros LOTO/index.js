"use strict";

function elegir() {
    // 1 al 41.
    // son seis números
    // más un comodin. => o sea, son 7 números.

    function numeroAlAzar() {
        return Math.trunc(Math.random() * 41) + 1;
    }

    let numerosajugar=[];

    while (numerosajugar.length<7) {
        let nuevonumero = numeroAlAzar();
        if (!numerosajugar.includes(nuevonumero)) {
            numerosajugar.push(nuevonumero);
        }
    }

    let elementonumeros = document.getElementById("numeros");

    elementonumeros.innerHTML="";

    numerosajugar.forEach((numero)=>{
        let nuevoelemento = document.createElement("span");
        nuevoelemento.innerText=numero;
        elementonumeros.appendChild(nuevoelemento);
    })

}