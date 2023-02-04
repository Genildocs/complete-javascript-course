'use strict';

function logger (){
     console.log('My name is Genildo')
}

//Invoking function
logger();

function fruitProcessor(apples, oranges){
     
     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
     return juice
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice)

function parOuImpar(number){
     
     
     if(number % 2 === 0){
          return 'É par'
     }else{
          return 'É impar'
     }

     
}

let result = parOuImpar(1);
console.log(`O resultado ${result}`)