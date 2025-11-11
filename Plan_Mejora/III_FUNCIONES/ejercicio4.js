function categoriaPeso(peso) {
    if (peso < 50) {
        return 'Peso ligero';
    } else if (peso <= 75) {
        return 'Peso medio';
    } else if (peso <= 100) {
        return 'Peso pesado';
    } else {
        return 'Peso extra pesado';
    }
}

console.log(categoriaPeso(45)); 
console.log(categoriaPeso(70)); 
console.log(categoriaPeso(90)); 
console.log(categoriaPeso(120));