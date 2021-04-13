function mi_funcion() {
    var numero = document.getElementById('input1').value //EL NÚMERO DE VECES A REPETIR LA PALABRA
    var palabra = document.getElementById('input2').value //PALABRA A REPETIR
    var palabra_repetida = '' //ACÁ QUEDARÁ LA PALABRA REPETIDA numero VECES

    /*******************************************************************
     *
     * UTILIZA numero Y palabra PARA LLENAR LA VARIABLE palabra_repetida
     *
     ********************************************************************/
    // Primera verificación: que numero sea un numero.
    numero = Number(numero);
    if (isNaN(numero)) {
        palabra_repetida = "Debe ingresar un número válido.";
    } else if (numero <= 0) {
        palabra_repetida = "Debe ingresar un número mayor que 0.";
    } else if (palabra == "") {
        palabra_repetida = "La palabra a repetir no puede estar vacia.";
    } else {
        // // en esta parte, los datos están OK para proceder.
        // let arreglo=[];
        // // Con FOR repetirmos una actividad una cantidad determinada de veces:
        // for (let i = 0; i < numero; i++) {
        //     arreglo.push(palabra);
        // }
        // // arreglo ahora tiene la palabra reptida "numero" veces.

        // // Si se repite más de 10 veces (11 para arriba), el texto debe salir separado por guiones.
        // if (numero>10) {
        //     palabra_repetida = arreglo.join(" - ");
        // } else { // si son 10 veces o menos, el teto debe salir separado por espacios. 
        //     palabra_repetida = arreglo.join(" ");
        // }

        for (let i = 0; i < numero; i++) {
            if (i > 0 && numero > 10) {
                palabra_repetida += " - ";
            } else if (i > 0 && numero <= 10) {
                palabra_repetida += " ";
            }
            palabra_repetida += palabra;
        }

    }

    document.write(palabra_repetida) //BORRA TODA LA PÁGINA Y LUEGO MUESTRA palabra_repetida
}
