'use strict';

/* console.log(document.querySelector('.message'). textContent);

// document.querySelector('.message').textContent = 'Começar missão..';
// document.querySelector('.label-score').textContent = 'Pontos:';
// document.querySelector('.label-highscore').textContent = 'Numeros de pontos:';

document.querySelector('.guess').value = 522;
console.log(document.querySelector('.guess').value); */

let numberSecret = Math.trunc(Math.random() * 20) + 1; // Gerando aleatoriamente um numero de 1 a 20

let score = 20; // Variavel com o numero de chances que o usuario tem para jogar
let highscore = 0;
const input = document.querySelector('input');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(
    document.querySelector('.guess').value
  ); /* Estamos pegando o valor do input e armazenando na variavel guess
     em seguida convertemos seu valor para Number */

  if (!guess || guess < 0) {
    /* Essa condição verifica se tem algum valor no input de usuario, foi usado o operador NOT, pois se o valor for vazio
     quando o usuario clicar será retornado false, o operador not vai inverter para true e esse bloco if será executado. */
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === numberSecret) {
    document.querySelector('.message').textContent =
      '🎉🎉 Parabens! ACERTOU!!!';
    document.querySelector('.number').textContent = numberSecret;    
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if(score > highscore){
     highscore = score;
     document.querySelector('.highscore').textContent = highscore;     
    }
  } else if (guess > numberSecret) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😕 Numero muito alto';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😕 VOCÊ PERDEU!';
      document.querySelector('.score').textContent = 0;
    }
    //Sempre que houver um palpiete errado esse bloco diminuira 1 numero da pontuação.
  } else if (guess < numberSecret) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😕 Numero muito baixo';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😕 VOCÊ PERDEU!';
      document.querySelector('.score').textContent = 0;
    }
    //Sempre que houver um palpiete errado esse bloco diminuira 1 numero da pontuação.
  }
});

/* document.querySelector('.again').addEventListener('click', function () {
     window.location.reload();
}); */

document.querySelector('.again').addEventListener('click', function () {
  numberSecret = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Comece a adivinhar....';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';  
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
console.log(highscore)
/* 

Evento para restringir valores dentro do input

input.addEventListener("input", function() {
  if (this.value < 0) {
    this.value = 0;
  }

  if (this.value > 20) {
    this.value = 20;
  }
});
 */
