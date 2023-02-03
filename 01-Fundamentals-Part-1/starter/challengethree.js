/* Existem duas equipes de ginástica, os Dolphins e os Koalas. Eles competem entre si 3 vezes. O vencedor com a maior pontuação média ganha um troféu!
Suas tarefas:

Calcular a pontuação média para cada time, usando os dados de teste abaixo
Compare as pontuações médias dos times para determinar o vencedor da competição e imprima-o no console. Não esqueça que pode haver um empate, então teste isso também (empate significa que eles têm a mesma pontuação média)
Bônus 1: Inclua um requisito de pontuação mínima de 100. Com esta regra, um time só ganha se tiver uma pontuação superior à do outro time e, ao mesmo tempo, uma pontuação de pelo menos 100 pontos. Dica: use um operador lógico para testar a pontuação mínima, bem como múltiplos blocos else-if
Bônus 2: A pontuação mínima também se aplica a um empate! Então, um empate só ocorre quando ambos os times têm a mesma pontuação e ambos têm uma pontuação maior ou igual a 100 pontos. Caso contrário, nenhum time ganha o troféu
Dados de teste:
§ Dados 1: Dolphins marcam 96, 108 e 89. Koalas marcam 88, 91 e 110
§ Dados Bônus 1: Dolphins marcam 97, 112 e 101. Koalas marcam 109, 95 e 123
§ Dados Bônus 2: Dolphins marcam 97, 112 e 101. Koalas marcam 109, 95 e 106 */


let averageScoreDophins =(96 + 108 + 89) / 3;
console.log(`Score Dophins: ${averageScoreDophins.toFixed(2)}`);

let averageScoreKoalas = (88 + 91 + 110) / 3;
console.log(`Score Koalas: ${averageScoreKoalas.toFixed(2)}`);

if (averageScoreDophins > averageScoreKoalas) {
    console.log('Winner is Dophins!');
}else if (averageScoreDophins === averageScoreKoalas) {
    console.log('Draw of the two teams!');
}else{
    console.log('Winner is Koalas!');
}

/* Bonus 1 */
console.log(`
Bonus 1:`)
averageScoreDophins = (97 + 112 + 101) / 3;
console.log(`Score Dophins: ${averageScoreDophins.toFixed(2)}`);

averageScoreKoalas = (109 + 95 + 123) / 3;
console.log(`Score Koalas: ${averageScoreKoalas.toFixed(2)}`);

let minimumScoreToWin = 100;

if (averageScoreDophins >= minimumScoreToWin && averageScoreDophins > averageScoreKoalas){
    console.log('Dophins winners !')
} else if (averageScoreKoalas >= minimumScoreToWin && averageScoreKoalas > averageScoreDophins){
    console.log('Koalas winners!');
} else if (averageScoreKoalas >= minimumScoreToWin && averageScoreKoalas === averageScoreDophins){
    console.log('Draw!');
}else {
    console.log(`No winner. Minimum score: ${minimumScoreToWin} not reached.`);
}

/* Bonus 2 */
console.log(`
Bonus 2:`)

averageScoreDophins = (97 + 112 + 101) / 3;
console.log(`Score Dophins: ${averageScoreDophins.toFixed(2)}`);

averageScoreKoalas = (109 + 95 + 106) / 3;
console.log(`Score Koalas: ${averageScoreKoalas.toFixed(2)}`);

minimumScoreToWin = 100;

if (averageScoreDophins >= minimumScoreToWin && averageScoreDophins > averageScoreKoalas){
    console.log('Dophins winners !')
} else if (averageScoreKoalas >= minimumScoreToWin && averageScoreKoalas > averageScoreDophins){
    console.log('Koalas winners!');
} else if (averageScoreKoalas >= minimumScoreToWin && averageScoreKoalas === averageScoreDophins){
    console.log('Draw!');
} else {
    console.log(`No winner. Minimum score: ${minimumScoreToWin} not reached.`);
}
