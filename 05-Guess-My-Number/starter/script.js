'use strict';

/* console.log(document.querySelector('.message'). textContent);

// document.querySelector('.message').textContent = 'Começar missão..';
// document.querySelector('.label-score').textContent = 'Pontos:';
// document.querySelector('.label-highscore').textContent = 'Numeros de pontos:';

document.querySelector('.guess').value = 522;
console.log(document.querySelector('.guess').value); */


const numberSecret = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = numberSecret; 

document.querySelector('.check').addEventListener('click', function(){
     const guess = Number(document.querySelector('.guess').value);
     

     if(!guess || guess < 0){
          document.querySelector('.message').textContent = 'No number!';
     }else if (guess === numberSecret){
          document.querySelector('.message').textContent = '🎉🎉 Parabens! ACERTOU!!!';
     }else if (guess > numberSecret){
          document.querySelector('.message').textContent = '😕 Numero muito alto';
     }else if (guess < numberSecret){
          document.querySelector('.message').textContent = '😕 Numero muito baixo';
     }
})

