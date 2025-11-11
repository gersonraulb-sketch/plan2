function tipoEntrada(edad) {
    if (edad < 0) {
        return 'Edad inválida';
    } else if (edad <= 5) {
        return 'Entrada gratis';
    } else if (edad <= 12) {
        return 'Entrada infantil';
    } else {
        return 'Entrada adulto';
    }
}

console.log(tipoEntrada(3));  
console.log(tipoEntrada(10)); 
console.log(tipoEntrada(30)); 
