const semana = dia => {
    switch(dia){
        case 1: return 'Lunes';
        case 2: return 'Martes';
        case 3: return 'Miercoles';
        case 4: return 'Jueves';
        case 5: return 'Viernes';
        case 6: return 'Sabado';
        case 7: return 'Domingo';
    }
}

console.log(semana(1))
console.log(semana(5))
console.log(semana(7))