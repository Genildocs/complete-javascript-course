let day = 'quinta';

switch (day){
    case 'segunda':
        console.log('Hoje é segunda');
        break;
    case 'terça':
        console.log('Hoje é terça');
        break;
    case 'quarta':
    case 'quinta':
        console.log('Hoje é dia de denstista');
        break;
    case 'sexta':
        console.log('Hoje é dia de trabalho e pagamento :)');
        break;
    default:
        console.log('Dia inválido');
}

if (day === 'segunda'){
    console.log('Hoje é segunda');
}else if (day === 'terça'){
    console.log('Hoje é terça');
}else if (day === 'quarta' || day ==='quinta'){ // Muito importante se atentar na hora de escrever a condição dentro do if e que os operadores de comparação sempre esperam um valor boleano.
    console.log('Hoje é dia de denstista');
}else if (day === 'sexta'){
    console.log('Hoje é dia de trabalho e pagamento :)');
}else{
    console.log('Dia inválido');
}


