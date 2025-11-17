import fs from 'fs';
const contenido = fs.readFileSync('crear2.txt','utf8').split('\n');
console.log("Número de líneas:", contenido.length);