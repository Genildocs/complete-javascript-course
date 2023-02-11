'use strict';

function logger (){
     console.log('-----------')
}

//Invoking function
logger();
/* 
function fruitProcessor(apples, oranges){
     
     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
     return juice
}


const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangesJuice = fruitProcessor(15,10);
console.log(appleOrangesJuice);
logger();
function parOuImpar(number){
     
     
     if(number % 2 === 0){
          return 'É par'
     }else{
          return 'É impar'
     }

     
}

let result = parOuImpar(1);
console.log(`O resultado ${result}`)

let result2 = parOuImpar(50);
console.log(`O resultado ${result2}`)

logger();

// Function declaration

function calcAge1(birthYear){
     return 2023 - birthYear;
}

let age1 = calcAge1(1992);


// Function expression

let calcAge2 = function(birthYear){
     return 2023 - birthYear;
}

let age2 = calcAge2(2063);
console.log(age1, age2);

// Arrow functions

let calcAge3 = birthYear => 2023 - birthYear;
let age3 = calcAge3(2026);
console.log(age1, age2, age3);

const anosParaSeAposentar = (birthYear, firstname) =>{
     const age = 2023 - birthYear;
     const aposentadoria = 65 - age;
     return `${firstname} vai se aposentar em ${aposentadoria} anos`;
}

console.log(anosParaSeAposentar(1992 , 'Genildo'))
console.log(anosParaSeAposentar(1961 , 'Deuci'))

logger(); */

// Funções dentro de funções




/* const processadorDeFrutas = function(apples, oranges){
     const applesPieces = cortadorDeFrutas(apples);
     const orangesPieces = cortadorDeFrutas(oranges);

     const juice = `Para o suco foram cortadas ${applesPieces} maças e ${orangesPieces} laranjas.`;
     return juice;
     
}

function cortadorDeFrutas(frutas){
     return frutas * 2;
}

console.log(processadorDeFrutas(5,5));

logger()

const calc = function(operacao,number1, number2){
     return operacao(number1, number2) // Aqui operação estar no lugar da function soma. A expressao seria assim return soma(number1, number2);

     
}

const soma = function(number1, number2){
     return number1 + number2;
}

const result = calc(soma,10 , 5)
console.log(`A Soma é: ${result}`)

logger() */

// Estruturas de dados Array

// const amigos = ['Rafaela', 'Mateus', 'Gabriel'];
/* console.log(amigos);
logger()
console.log(`Posição 0 do array: ${amigos[0]}`);
console.log(`Posição 1 do array: ${amigos[1]}`);
console.log(`Posição 2 do array: ${amigos[2]}`);
logger()
console.log(`Meu array tems ${amigos.length} elements.`)
console.log(`O elemento na ultima posição do meu array é ${amigos[amigos.length - 1]}.`);
console.log(`Irei alterar o ${amigos[1]} por ${amigos[1]='Marcos'}. Desse jeito que altera o array.`)
logger()
const primeiroNome = 'Genildo';
const GENILDO = [primeiroNome, 'Cerqueira', 2023-1992, amigos]
console.log(`Olha o poder do array:
Meu nome é: ${GENILDO[0]}, tenho o sobrenome: ${GENILDO[1]}, ${GENILDO[2]} anos de idades e tenho 
os amigos: ${GENILDO[GENILDO.length -1]}.`) */

// amigos.push(2023);
// console.log(amigos);
// let newAmigos = amigos.push('HOje é dia de programar');
// console.log(amigos);
// console.log(newAmigos); // metodo push retorna o comprimento do array
// amigos.pop();
// console.log(amigos);
// console.log(amigos.indexOf('Rafaela'));
// console.log(amigos);
// console.log(amigos.includes(2023));

const genildo = {
     name : 'Genildo',
     nascimento : 1992,
     amigos : ['Rafaela', 'Mateus', 'Gabriel'],
     license : true,
     trabalho : 'Analista',
     calcIdade: function (){
          this.age = 2023 - this.nascimento
          return this.age
     }
}


// console.log(`${genildo.name} has ${genildo.amigos.length} friends, and his best
// friend is called ${genildo.amigos[0]}.`)

// genildo.city = 'Rio das ostras';
// console.log(genildo)

genildo.calcIdade()
console.log(genildo)

