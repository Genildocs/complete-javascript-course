'use strict';

// Data needed for a later exercise
/*
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
*/

// Data needed for first part of the section
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/

/*console.log(restaurant)

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(arr,a,b,c)
const arr2 = [2,3,4];
const [d,e,f] = arr2;
console.log(arr2, d,e,f)*/

/*console.log(restaurant.categories)
let [main, secondary] = restaurant.categories;
[main,secondary] = [secondary, main]
console.log(main,secondary)*/

/*const pessoa = {
  nome : 'Genildo',
  sobrenome : 'Cerqueira',
  idade : 31
}

console.log(pessoa.nome)
const {cor='null',nome,sobrenome} = pessoa;
console.log(cor,nome,sobrenome)*/


/*
const arraydata = ['03', '04']
const [mes, ano] = arraydata;
const data = [`${mes}`, '/', `${ano}`].join('');
console.log(data)*/

/*The spread operator(...)*/
const listaCompras = ['açucar', 'ovo', 'farinha', 'creme dental', 'feijão'];
/*console.log(listaCompras);*/
/*Copia de array com o operador spread*/
const novoArray = [...listaCompras];
/*console.log(novoArray);*/
/*Juntando dois arrays*/
const listaComprasDois = ['pasta de amendoin','nutella'];
const compras = [...listaCompras, ...listaComprasDois];
/*console.log(compras);*/

/*Iterables: arrays, strings, maps, sets, nodlist*/
const str = 'Genildo';
const letras = [...str, ' ', 'Souza'];
/*console.log(letras, ...letras)*/

/*Varios argumentos para uma função*/
const listaPlanos = ['Plano +', 'Plano ++', 'Plano star'];

const planos = function (plan1, plan2, plan3){
    /*console.log(`Os planos disponiveis são ${plan1}, ${plan2}, ${plan3}.`)*/
}
planos(listaPlanos[0],listaPlanos[1],listaPlanos[2])
planos(...listaPlanos)

/**/
const add = function (...names){
    for (const items of names){
        // console.log(items)
    }
}

add('Marcos', 'Maria')
add('s','q','a','d')
/**************************/
/*console.log(3 || 'not')
console.log(true || 0)*/

const restaurant = {
    pizzas: ['Mussarela', 'Calabresa', 'Palmito'],
    bebidas : 0,
    doces : ['paçoca', 'halls', 'bala 7belo']
}

// Nullish : null and undefined
restaurant.reserva = 0;
const reservas = restaurant.reserva ?? 10;
if (!0 ?? 10){
    /*console.log('S')*/
}

/*Logical assignment operatos*/
const rest1 = {
    name: 'La mama',
    lugaresDisponiveis: 10,
}

const rest2 = {
    name: 'Mama mia',
    dono: 'Santiago',
}

rest1.lugaresDisponiveis  ||= 10;
rest2.lugaresDisponiveis = rest2.lugaresDisponiveis || 10;
console.log(rest1);
console.log(rest2);