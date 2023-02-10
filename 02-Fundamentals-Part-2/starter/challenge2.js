// let contas = [125,555,44];

// const calcTip = bill => bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

// let gorjeta = contas.map(conta => calcTip(conta));
// console.log(gorjeta);

// let valorTotalDaConta = (conta, gorjeta) => conta + gorjeta;

// let total = contas.map((conta, index) => valorTotalDaConta(conta, gorjeta[index]));
// console.log(total);

const contas = [125,555,44,500,350,50]

let totalGorjeta = valor => valor >= 50 && valor <= 300 ? valor * (15/100) : valor * (20/100);

// let gorjeta = [totalGorjeta(contas[0]),totalGorjeta(contas[1]),totalGorjeta(contas[2])];
// console.log(gorjeta)

let gorjeta = [];
for (let i = 0; i < contas.length; i++){
    gorjeta.push(totalGorjeta(contas[i]));
}



let valorTotalDaConta = (contas, gorjeta)=> contas + gorjeta;

// let total = [contas[0] + gorjeta[0],valorTotalDaConta(contas[1], gorjeta[1]),valorTotalDaConta(contas[2], gorjeta[2])]

let total = [];
for(let i = 0; i < contas.length && i < gorjeta.length; i++) {
    total.push(valorTotalDaConta(contas[i], gorjeta[i]));
}

for(let i = 0; i < contas.length && i < gorjeta.length && i < total.length; i++) {
    console.log(`O valor total da conta de R$ ${contas[i]} + gorjeta de R$ ${gorjeta[i]} é R$ ${total[i]}.`);
}
// console.log(`O valor total da conta de R$ ${contas[0]} + gorjeta de R$ ${gorjeta[0]} é R$ ${total[0]}.`);
// console.log(`O valor total da conta de R$ ${contas[1]} + gorjeta de R$ ${gorjeta[1]} é R$ ${total[1]}.`);
// console.log(`O valor total da conta de R$ ${contas[2]} + gorjeta de R$ ${gorjeta[2]} é R$ ${total[2]}.`);
