let billetes = [1,5,10,50,100];

console.log('Tiene los siguientes dolares: ' + billetes);

let totalb = billetes.reduce((total, x) => total + x, 0);

console.log('Tiene en total: ' + totalb)