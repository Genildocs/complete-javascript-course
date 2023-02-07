

let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let mediaGolfinhos = calcAverage(44,23,71);
let mediaKoalas = calcAverage(65,54,49);

function checWinners(mediaGolfinhos, mediaKoalas) {
    if(mediaGolfinhos >= mediaKoalas * 2){
        console.log(`Golfinhos ganhou! Pontuação: (${mediaGolfinhos} vs ${mediaKoalas})`)
    }else if(mediaKoalas >= mediaGolfinhos * 2){
        console.log(`Koalas ganhou! Pontuação: (${mediaKoalas} vs ${mediaGolfinhos})`)
    }else{
        console.log('Não houve vencedores!')
    }
}

checWinners(mediaGolfinhos, mediaKoalas);

console.log('--------------')
mediaGolfinhos = calcAverage(85,54,71);
mediaKoalas = calcAverage(23,34,27)
checWinners(mediaGolfinhos, mediaKoalas);


