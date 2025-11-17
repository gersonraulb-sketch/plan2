import fs from 'fs';
const contenido = fs.readFileSync('crear1.txt','utf8');
console.log("Contenido leído:", contenido);