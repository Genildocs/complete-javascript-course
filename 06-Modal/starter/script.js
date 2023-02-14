'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const OpenModal = function () {
  modal.classList.remove('hidden'); // Estamos removendo a classe hidden com esse metódo.
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden'); // Quando o botão for clicado a classe será adicionada novamente.
  overlay.classList.add('hidden');
  
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', OpenModal); // Não invocamos a função pois o javaScript vai fazer isso automaticamente quando o botão for clicado.
} //Loop na nodlist da classe show-modal

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(event){
     if(event.key === 'Escape' && !modal.classList.contains('hiden')){
          closeModal();
     }
}) /* Esse evento é disparado quando é pressionado uma tecla do teclado. Colocamos esse evento no document
pois ele será ativado em todo o corpo do documento HTML */

