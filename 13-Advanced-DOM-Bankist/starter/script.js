'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  
};


const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/* for (let i = 0; i < btnsOpenModal.length; i++){
  btnsOpenModal[i].addEventListener('click', openModal);
  console.log(btnsOpenModal[i])
} */  
btnsOpenModal.forEach( btn => btn.addEventListener('click', openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////////////////
/* console.log(document)
console.log(document.documentElement)
console.log(document.body)
console.log(document.head)

//Selecionando elementos
const allSections = document.querySelectorAll('.section');
console.log(allSections) // Retorna uma node list e o elemento que possui essa classe
const header = document.querySelector('.header')
const allButtons = document.getElementsByTagName('button');
console.log(allButtons) // Retorna uma html collections e o elemento por sua tag

console.log(document.getElementsByClassName('btn')) //Retorna um elemento por sua classe */

/* //Criando e inserindo elemento
const navLink = document.querySelector('.nav__links');
console.log(navLink)
navLink.insertAdjacentHTML("afterend", "TEXT") // Insere elementos antes ou depois de uma no tag. */

const message = document.createElement('div') //Cria uma tag div
message.classList.add('cookie-message') // adiciona a classe nessa div
/* message.textContent = "Aceite os nossos cookies para uma melhor experiencia a partir dos dados adquiridos" */
message.innerHTML = "Aceite os nossos cookies. <button class='btn btn--close-cookie'>Got it!</button>"
const footer = document.querySelector('.footer')
// footer.prepend(message) // torna o message o primeiro no(filho) de footer
// footer.append(message) // torna o message o ultimo no(filho) de footer
footer.after(message) // insere depois do footer
// footer.before(message) //Insere antes do footer
message.style.background = '#37383d'

const copyRight = document.querySelector('.footer__copyright');
copyRight.textContent = "© Copyright by Genildo Souza"

document.querySelector('.btn--close-cookie').addEventListener('click', ()=>{
     message.remove();
})