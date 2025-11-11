const prompt = require('prompt-sync')();

let edad = prompt("Ingrese su edad: ");
edad = parseInt(edad);

console.log("Para el 2030 tendra: " + (edad + 5));
