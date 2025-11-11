const prompt = require('prompt-sync')();

let frutas = ['manzana','limon','mandarina'];
console.log(frutas);

let nfruta = prompt('agrege una fruta: ');
frutas.push(nfruta);

console.log('la lista actualizada es: ' + frutas)
