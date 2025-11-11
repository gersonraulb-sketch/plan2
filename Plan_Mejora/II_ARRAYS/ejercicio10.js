const prompt = require('prompt-sync')();

let cola = ['camila','sandra','carlos','juan'];

while(cola.length > 0){
    let persona = cola.shift();
    let boleto = prompt(persona + ' ¿Tiene boleto? ');

    if(boleto === 'si'){
        console.log('okey, ' + persona + ' puede entrar')
    } else {
        console.log('Compre el boleto y vuelva a la fila')
        cola.push(persona);
    }
}

console.log('Ya entraron todos')