"use strict";

// 1)	De manera individual deberá crear en una página html con un código JavaScript, que permita mostrar su nombre, edad y correo electrónico, en la consola del navegador

function mostrardatos() {
    let elementonombre=document.getElementById("nombre");
    let elementoedad=document.getElementById("edad");
    let elementocorreo=document.getElementById("correo");

    console.log('nombre',elementonombre.value,'edad',elementoedad.value,'correo',elementocorreo.value);
    
    let concatenado = elementonombre.value+' '+elementoedad.value + ' '+ elementocorreo.value;

    console.log(concatenado);

    // console.log('nombre',elementonombre,'edad',elementoedad,'correo',elementocorreo);
}