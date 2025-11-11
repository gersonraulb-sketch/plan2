const prompt = require('prompt-sync')();
let personas = ['camila','fernando','juan','sofia'];
console.log(personas);

let conf = prompt('¿Quiere eliminar a Sofia? ');

if(conf === 'si'){
    personas.pop()
    console.log(personas)
} else {
    console.log('ok')
}