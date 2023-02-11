// const pessoa = {
//     nome : 'Genildo',
//     sobrenome : 'Cerqueira',
//     anoNascimento : 2023 - 1992,
//     job : 'Analista',
//     amigos : ['Rafaela', 'Gabriel', 'Breno']
// }

const pessoa = ['Jonas','Santos',2023-1992, ['Rafael','Gabriel','Maria'], true]

//Loop de trás pra frente
for(let i = pessoa.length - 1; i >= 0; i-- ){
    console.log(i, pessoa[i]);
}

//Loop aninhado
for(let exe = 1; exe <= 3; exe++){
    console.log(`Serie de exercicios ${exe}`);
    for(let i = 0; i < 15; i++){
        console.log(`Exercicio ${exe}: Repetição do exercicio ${i}`);
    }
}