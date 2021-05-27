"use strict";

function generar() {

    let elemento1 = document.createElement("h1");
    let formulario = document.createElement("form");
    document.body.appendChild(elemento1)
    document.body.appendChild(formulario);



    let texto1 = document.createTextNode("Acceso al sistema");
    elemento1.appendChild(texto1);



    formulario.setAttribute("onsubmit","return false;");

    let labelusuario = document.createElement("label");
    labelusuario.appendChild(document.createTextNode("Usuario"));
    let inputusuario = document.createElement("input");
    inputusuario.type="text";
    inputusuario.minLength=5;
    inputusuario.maxLength=12;
    inputusuario.required = true;
    formulario.appendChild(labelusuario);
    formulario.appendChild(inputusuario);
    formulario.appendChild(document.createElement("br"));

    let labelcontrasena = document.createElement("label");
    labelcontrasena.appendChild(document.createTextNode("Contraseña"));
    let inputcontrasena = document.createElement("input");
    inputcontrasena.type="password";
    inputcontrasena.minLength=8;
    inputcontrasena.maxLength=14;
    inputcontrasena.required=true;
    formulario.appendChild(labelcontrasena);
    formulario.appendChild(inputcontrasena);
    formulario.appendChild(document.createElement("br"));

    let botoningresar = document.createElement("button");
    botoningresar.appendChild(document.createTextNode("Ingresar"));
    botoningresar.className="botonrojo";
    formulario.appendChild(botoningresar);


}