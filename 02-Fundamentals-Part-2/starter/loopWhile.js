/* let cout = 2;
while (cout <=10){
    console.log(cout);
    cout ++
} */



let dados = Math.trunc(Math.random() * 6) + 1;
console.log(dados);

while (dados !== 6){
    console.log(`Você tirou ${dados}`)
    dados = Math.trunc(Math.random() * 6) + 1
    if(dados === 6) console.log('Saiu 6, loop while encerrado')
}