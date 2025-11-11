const prompt = require('prompt-sync')();
let comidas = ['Salchipapas','hambuerguesa','ensalada','helado']

while(comidas.length > 0){
    let pregunta = prompt('¿Desea algo de comer? (si/no) ')
    if(pregunta === 'si'){
        console.log('Okey le toco ' + comidas[0]);
        comidas.shift();
    } else {
        console.log('Okey, siguiente persona')
    }
}

console.log('No hay mas comida');