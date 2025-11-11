const prompt = require('prompt-sync')();

        let registro = prompt('¿Esta registrado? ')

        if(registro === 'si'){
            console.log('Puede proceder')
        } else {
            console.log('Se le enviara a la pagina de registro')
        }