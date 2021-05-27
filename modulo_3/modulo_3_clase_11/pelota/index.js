"use strict";

let pelotas = [];

document.body.addEventListener("click", () => {
    let elementopelota = document.createElement("span");
    elementopelota.style.position = "absolute";
    elementopelota.style.border = "1px solid black";
    elementopelota.style.borderRadius = "50%";
    elementopelota.style.backgroundColor = "black";
    elementopelota.style.width = "30px";
    elementopelota.style.height = "30px";
    document.body.appendChild(elementopelota);
    let pelota = {
        x: Math.random() * document.documentElement.clientWidth - 30,
        y: Math.random() * document.documentElement.clientHeight - 30,
        dx: Math.random() * 10 - 5,
        dy: Math.random() * 10 - 5,
        el: elementopelota,
        interval: 0
    };
    pelotas.push(pelota)
    console.log(pelotas.length);
    pelota.interval = setInterval(() => {
        pelota.x += pelota.dx;
        pelota.y += pelota.dy;
        if (pelota.x < 0 || pelota.x > document.documentElement.clientWidth - 30) {
            pelota.dx *= -1;
        }
        if (pelota.y < 0 || pelota.y > document.documentElement.clientHeight - 30) {
            pelota.dy *= -1;
        }
        pelota.el.style.left = pelota.x + "px";
        pelota.el.style.top = pelota.y + "px";
    }, 1);
});

// setInterval(() => {
//     pelotas.forEach((pelota) => {
//         pelota.x += pelota.dx;
//         pelota.y += pelota.dy;
//         if (pelota.x < 0 || pelota.x > document.documentElement.clientWidth - 30) {
//             pelota.dx *= -1;
//         }
//         if (pelota.y < 0 || pelota.y > document.documentElement.clientHeight - 30) {
//             pelota.dy *= -1;
//         }
//         pelota.el.style.left = pelota.x + "px";
//         pelota.el.style.top = pelota.y + "px";
//     })
// }
//     , 1);
