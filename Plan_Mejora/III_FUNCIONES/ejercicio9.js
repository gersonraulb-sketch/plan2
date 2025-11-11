const signo = (num) => 
    num > 0 ? 'Positivo' : num < 0 ? 'Negativo' : 'Cero';

console.log(signo(10));
console.log(signo(-5));
console.log(signo(0));