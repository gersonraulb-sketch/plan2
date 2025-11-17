import fs from 'fs';
for(let i=1;i<=5;i++){
  fs.appendFileSync('crear3.txt', `Registro ${i}\n`);
}
console.log("crear3.txt creado con registros múltiples.");