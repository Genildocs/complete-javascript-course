const contas = [22,295,176,440,37,105,10,1100,86,52]

let totalGorjeta = valor => valor >= 50 && valor <= 300 ? valor * (15/100) : valor * (20/100);

let gorjeta = [];
for (let i = 0; i < contas.length; i++){
    gorjeta.push(totalGorjeta(contas[i]));
}



let valorTotalDaConta = (contas, gorjeta)=> contas + gorjeta;


let total = [];
for(let i = 0; i < contas.length && i < gorjeta.length; i++) {
    total.push(valorTotalDaConta(contas[i], gorjeta[i]));
}

for(let i = 0; i < contas.length && i < gorjeta.length && i < total.length; i++) {
    console.log(`O valor total da conta de R$ ${contas[i]} + gorjeta de R$ ${gorjeta[i]} é R$ ${total[i]}.`);
}

function calcAverage(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum / arr.length;
}

console.log(`
Média dos numeros contidos no array: ${calcAverage(contas)}
`)