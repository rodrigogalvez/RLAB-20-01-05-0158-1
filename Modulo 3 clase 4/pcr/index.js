"use strict";

function ejecutarDiagnostico() {
    let pcr = document.getElementById("pcr").value;
    let igm = document.getElementById("igm").value;
    let igg = document.getElementById("igg").value;

    if (pcr=="-" && igm=="-" && igg=="-") {
        document.getElementById("diagnostico").innerText = "Negativo";
    } else if (pcr=="+" && igm=="-" && igg=="-") {
        document.getElementById("diagnostico").innerText = "Fase inicial de la infección";
    } else if (pcr=="+" && igm=="+" && igg=="-") {
        document.getElementById("diagnostico").innerText = "Fase temprana de infección";
    } else if (pcr=="+" && igm=="+" && igg=="+") {
        document.getElementById("diagnostico").innerText = "Fase activa de infección";
    } else if (pcr=="+" && igm=="-" && igg=="+") {
        document.getElementById("diagnostico").innerText = "Fase avanzada de infección";
    } else if (pcr=="-" && igm=="+" && igg=="-") {
        document.getElementById("diagnostico").innerText = "Estado temprano. Falso negativo PCR?";
    } else if (pcr=="-" && igm=="+" && igg=="+") {
        document.getElementById("diagnostico").innerText = "Enfermedad en evolución";
    } else if (pcr=="-" && igm=="-" && igg=="+") {
        document.getElementById("diagnostico").innerText = "Fase de resolución de infección";
    } else {
        document.getElementById("diagnostico").innerText = "";
    }

}