const prompt = require('prompt-sync')();
let pendientes = ['estudiar','ejercicio','comida'];

console.log('tareas pendientes: ' + pendientes);

let agregar = prompt('Agrege que falta: ');

pendientes.unshift(agregar);

console.log(pendientes)