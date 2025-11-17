import fs from 'fs';
const datos = ["Línea 1", "Línea 2", "Línea 3"].join("\n");
fs.writeFileSync('crear2.txt', datos);
console.log("crear2.txt creado con varias líneas.");