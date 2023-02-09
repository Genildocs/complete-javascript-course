//Desafio 3 de fundamentos parte 1

let score = (score1,score2,score3)=> (score1 + score2 + score3) / 3;

let averageScoreDophins = score(96,108,89);
let averageScoreKoalas = score(88,91,110);

function winner(time1, time2){
    if(time1 >= 100 && time1 > time2){
        console.log('Winner is Dophins!');
    }else if(time2 >= 100 && time2 > time1){
        console.log('Draw of the two teams!');
    }else{
        console.log('Winner is Koalas!');
    }
}

winner(averageScoreDophins,averageScoreKoalas);

console.log('----------')
averageScoreDophins = score(97,112,101);
averageScoreKoalas = score(109,95,123);

winner(averageScoreDophins,averageScoreKoalas);

console.log('----------')
averageScoreDophins = score(110,112,101);
averageScoreKoalas = score(109,95,106);

winner(averageScoreDophins,averageScoreKoalas);

