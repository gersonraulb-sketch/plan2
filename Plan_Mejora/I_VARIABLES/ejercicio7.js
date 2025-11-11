const prompt = require('prompt-sync')();

let total = '60.50'

total = parseInt(total);

const descuento = 15 / 100;

let final = total - (total * descuento);

console.log('Su total es ' + total + ' y con el descuento es ' + final)
