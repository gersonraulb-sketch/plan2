function pase(precio){
    if(precio > 1000){
        return'Pago por un servicio vip';
    } else if(precio > 600){
        return'Tiene el paquete regular';
    } else {
        return 'Clase economica';
    }
}

console.log(pase(1100));
console.log(pase(700));
console.log(pase(300));