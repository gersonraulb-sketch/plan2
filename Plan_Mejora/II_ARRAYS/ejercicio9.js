let precios = [1000, 2500, 3200, 500, 750];

console.log("Precios originales:", precios);

for (let i = 0; i < precios.length; i++) {
    precios[i] = precios[i] * 1.50; 
}

console.log("Precios con aumento:", precios);
