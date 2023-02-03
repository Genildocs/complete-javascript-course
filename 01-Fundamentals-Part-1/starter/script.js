// let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is FUN');

// let primeiroNome = "Genildo";
// const PI = 3.1415;
// console.log(primeiroNome); 

/* LECTURE : Values and Variables */

// let country = "Brasil";
// let continent = "South America";
// let population = "215 millions people"
// console.log(`Country: ${country}, continent: ${continent}, population: ${population}.`); 

// let years;
// console.log(years);
// years = 2023;
// console.log(years);
// console.log(typeof years);

// const YEAR = 1992;
// console.log(YEAR);
// console.log(typeof YEAR);

/* Basic operations; */
/* Assignment operators */
/* let x = 10 + 5;
x += 10; // x = x + 10;
x *= 10; // x = x * 10;
x++; // x = x + 1;
x--; // x = x - 1;
--x; // x = x - 1;
console.log(x); */

/* Comparison operators */
/* let ageOne = 30;
let ageTwo = 32;
console.log(ageOne > ageTwo); // Maior q
console.log(ageOne >= ageTwo); // Maior ou igual q
console.log(ageOne < ageTwo); // Menor q
console.log(ageOne <= ageTwo); // Menor ou igual q
console.log(ageOne == ageTwo); // Igualdade 
console.log(ageOne!= ageTwo); // Desigualde
console.log(ageOne === ageTwo); // Igualdade Estrita
console.log(ageOne !== ageTwo); // Desigualdade Estrita */


/* Taking Decisions */

/* const age = 18;

if (age >= 18){
     console.log('Você possui idade para dirigir.')
}else{
     const yearsLeft = 18 - age;
     console.log(`Você não possui idade suficiente, volte em ${yearsLeft} anos. `)
}

const birthYear = 2005;
let century;
if(birthYear <= 2000){
     century = 20;
}else{
     century = 21;
}
console.log(century) */

/* TYPE COERCION */

/* const inputYear = "1992";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18); // Conversão de string para number

console.log(Number('Jonas')) // Conversão nao pode ser feito, resultado NaN

console.log(String(23)) // Conversão de number para string
 */
/* TYPE COERCION */

/* console.log('I am ' + 23 + ' years old') // Nesse caso o operador (+) força o js a efetuar a conversao de number para string e concatena-los. 
console.log('23' - '10' - 3) // Aqui o operador (-) fez o JS converter a string em number, no console será mostrado 10.  */

// outro exemplo:

/* let n = '1' + 1; // '11' = conctenação + coerção de number para string.
n = n - 1; // 10 = coerção de string para number.
console.log(n) */

// 5 valores falso : 0 , '', undefined , null, NaN
/* 
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Genildo'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 0;
if(money){
     console.log('Tenho dinheiro!')
}else{
     console.log('Não tenho dinheiro!')
} */

/* const qualSeuNome = prompt("Qual seu nome? ");
if(qualSeuNome === 'Genildo'){
     console.log(qualSeuNome)
}else if (Number(qualSeuNome) === 23){
     console.log('É 23!')
}else{
     console.log('Entrada invalida')
};
 */


/* const hasDriversLicense = true;
const hasGoodVision = true;
const newDecision = true;

console.log(hasDriversLicense && hasGoodVision && newDecision); */

