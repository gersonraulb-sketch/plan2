function calificacion(nota) {
    if (nota >= 90) {
        return 'Excelente';
    } else if (nota >= 70) {
        return 'Bueno';
    } else if (nota >= 50) {
        return 'Regular';
    } else {
        return 'Reprobado';
    }
}

console.log(calificacion(95)); 
console.log(calificacion(75)); 
console.log(calificacion(55)); 
console.log(calificacion(30)); 
