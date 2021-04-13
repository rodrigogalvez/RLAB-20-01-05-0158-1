function mi_funcion() {
    var numero = document.getElementById('input1').value //NÚMERO INGRESADO EN EL INPUT
    var resultado = '' //ACÁ QUEDARÁ EL RESULTADO DE TODAS LAS OPERACIONES

    /*******************************************************************
     * Observa el video EvaluaciónMódulo3_1_Ejercicio2.mp4
     * UTILIZA numero PARA LLENAR LA VARIABLE resultado
     *
     ********************************************************************/

    // verificar que las entradas son válidas.
    numero = Number(numero);
    if (isNaN(numero)) {
        resultado = "Debe ingresar solo números.";
    } else if (numero <= 0) {
        resultado = "Debe ingresar un número mayor que 0.";
    } else {
        // estamos listos para trabajar.
        // ASCENDENTE:
        let ascendente = [];
        for (let i = 1; i <= numero; i++) {
            ascendente.push(i);
        }
        // DESCENDENTE:
        let descendente = [];
        for (let i = numero; i >= 1; i--) {
            descendente.push(i);
        }
        //UNO POR MEDIO:
        let unopormedio = [];
        for (let i = 1; i <= numero; i += 2) {
            unopormedio.push(i);
        }
        //UNO POR MEDIO INVERTIDO:
        let unpormedioinvertido = [];
        for (let i = numero; i >= 1; i -= 2) {
            unpormedioinvertido.push(i);
        }
        //PIRAMIDE:
        let piramide = [];
        let medio = Math.trunc(numero / 2);
        // la vuelta es para iniciar la prate descendente.
        let vuelta = medio;
        // si numero es par: es fácil.
        // si numero es impar: debe llegar primero a medio + 1
        if (numero % 2 != 0) { // número impar.
            medio++; // llegar hasta la mitad más uno.
        }
        // primera parte: ascendente.
        for (let i = 1; i <= medio; i++) {
            piramide.push(i);
        }
        // segunda parte: descendente.
        for (let i = vuelta; i >= 1; i--) {
            piramide.push(i);
        }

        resultado = "<h3>ASCENDENTE</h3>" + ascendente.join(", ") +
            "<h3>DESCENDENTE</h3>" + descendente.join(", ") +
            "<h3>UNO POR MEDIO</h3>" + unopormedio.join(", ") +
            "<h3>UNO POR MEDIO INVERTIDO</h3>" + unpormedioinvertido.join(", ") +
            "<h3>PIRÁMIDE</h3>" + piramide.join(", ");
    }

    document.write(resultado) //BORRA TODA LA PÁGINA Y LUEGO MUESTRA resultado
}

