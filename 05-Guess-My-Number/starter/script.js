'use strict';

/* console.log(document.querySelector('.message'). textContent);

// document.querySelector('.message').textContent = 'Começar missão..';
// document.querySelector('.label-score').textContent = 'Pontos:';
// document.querySelector('.label-highscore').textContent = 'Numeros de pontos:';

document.querySelector('.guess').value = 522;
console.log(document.querySelector('.guess').value); */


const numberSecret = Math.trunc(Math.random() * 20) + 1; // Gerando aleatoriamente um numero de 1 a 20
document.querySelector('.number').textContent = numberSecret; 

let score = 20; // Variavel com o numero de chances que o usuario tem para jogar

document.querySelector('.check').addEventListener('click', function(){
     const guess = Number(document.querySelector('.guess').value); /* Estamos pegando o valor do input e armazenando na variavel guess
     em seguida convertemos seu valor para Number */

     

     if(!guess){ /* Essa condição verifica se tem algum valor no input de usuario, foi usado o operador NOT, pois se o valor for vazio
     quando o usuario clicar será retornado false, o operador not vai inverter para true e esse bloco if será executado. */
          document.querySelector('.message').textContent = 'No number!';          
     }else if (guess === numberSecret){
          document.querySelector('.message').textContent = '🎉🎉 Parabens! ACERTOU!!!';
     }else if (guess > numberSecret){
          document.querySelector('.message').textContent = '😕 Numero muito alto';
     }else if (guess < numberSecret){
          document.querySelector('.message').textContent = '😕 Numero muito baixo';
     }
})
