const descuento = (monto) => 
    monto > 1000 ? 'Descuento VIP 20%' :
    monto > 500  ? 'Descuento Regular 10%' :
                   'Sin descuento';

console.log(descuento(1200));
console.log(descuento(700));
console.log(descuento(300)); 