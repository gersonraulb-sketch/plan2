import fs from 'fs';
const texto = "Archivo creado con contenido inicial.\nFecha: " + new Date();
fs.writeFileSync('crear1.txt', texto);
console.log("crear1.txt creado.");