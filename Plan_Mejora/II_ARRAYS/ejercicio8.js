const prompt = require("prompt-sync")();
let sorteo = [26, 84, 51, 36, 79, 10];

for (let i of sorteo) {
  console.log("Le salio: " + i);
  let quedar = prompt("¿Se lo queda? (si/no) ");
  if (quedar === "si") {
    console.log("Bien, se quedo con el: " + i);
    break;
  } else {
    console.log("Ok, siguiente");
  }
}

console.log('teminado')