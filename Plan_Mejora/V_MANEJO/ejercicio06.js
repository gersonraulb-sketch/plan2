import fs from 'fs';
const contenido = fs.readFileSync('crear3.txt','utf8');
const registros = contenido.trim().split('\n');
console.log("Registros procesados:", registros);