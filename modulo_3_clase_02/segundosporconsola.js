"use strict";

let segundo = new Date().getSeconds();

if (segundo<=10) {
    console.log(segundo, "El minuto actual está recién naciendo");
} else if (segundo<=40) {
    console.log(segundo, "El minuto actual está en pleno desarrollo");
} else {
    console.log(segundo, "El minuto actual está en su fase final");
}

