function getSeason(month){
    switch (month){
        case 12:
        case 1:
        case 2:
        return 'Verão';
        case 3:
        case 4:
        case 5:
        return 'Outono';
        case 6:
        case 7:
        case 8:
        return 'Inverno';
        case 9:
        case 10:
        case 11:
        return 'Primavera';
        default:
            return 'mes invalido';
    }
}

let month = prompt('digite o numero do mes (1-12):');
month = parseInt(month);

if (!isNaN(month) && month>=1 && month <= 12){
    let season = getSeason(month);
    console.log('a estação correspondente é: ' + season);
} else {
    console.log('por favor, digite um número de mes valido(1 - 12).');
}