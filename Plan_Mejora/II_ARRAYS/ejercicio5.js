let edades = [18,16,25,14,22,32]
console.log('Todos los participantes: ' + edades)

let mayores = edades.filter(x => x >= 18);
let menores = edades.filter(x => x < 18);

console.log('Mayores: ' + mayores)
console.log('Menores: ' + menores)
