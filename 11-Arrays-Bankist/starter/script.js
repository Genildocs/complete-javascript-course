'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Genildo Cerqueira Souza',
  movements: [50, 350, 1700, 1150, 19090, -5000, -80, -2500, 1690],
  interestRate: 3,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4,account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMoviments = function(moviments){
  containerMovements.innerHTML = '';

  moviments.forEach((mov, i)=>{    
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      
      <div class="movements__value">R$ ${mov}</div>
    </div>
    `
    containerMovements.insertAdjacentHTML("afterbegin", html)
  });

};

displayMoviments(account5.movements)

const calcDisplayBalance = function(movements){
  const balance = movements.reduce((acc, mov)=> acc + mov , 0)
  labelBalance.textContent = `R$ ${balance}`
}
calcDisplayBalance(account5.movements)

const calcDisplaySummary = function(movements){
  const incomes = movements.
  filter(mov => mov > 0).
  reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `R$ ${incomes}`;

  const outcomes = movements.
  filter(mov => mov < 0).
  reduce((acc, mov)=> acc + mov, 0);
  labelSumOut.textContent = `R$ ${Math.abs(outcomes)}`
}

calcDisplaySummary(account5.movements);

const createUserNames = function(accs){  
  accs.forEach((acc)=>{
      acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word=> word[0])
      .join('');
  });
  
};
createUserNames(accounts)



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; */

/////////////////////////////////////////////////
/* let arr = ['a','b','c','d','e'];
console.log(arr.slice(2,3)) // Retorna um novo array sem a parte que foi fatiada. Ele nao conta pelo indicie
console.log(arr.slice(-1))

// Splice
// Esse remove pelo indicie do elemento e altera o array original
let arr2 = ['I', 'Love', 'Javascript']
arr2.splice(-1)
console.log(arr2)

//Reverse
console.log(arr.reverse())

//Concat
console.log(arr.concat(arr2))
 */
//For Each

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
let sum = 0;
movements.forEach((item, index)=>{  
  if(item > 0){  
    sum += item
    console.log(`${index}-> Você depositou: ${item} e tem o total de: ${sum}`)
  }else{
    console.log(`${index}-> Retirado da conta: ${item}`)
  }

}) */

/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key)=>{
   console.log(`Coin: ${key} -> name: ${value}`)
}) */

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const dolar = 1.1
const newValue = movements.map( value => value * dolar)
console.log(newValue)
 */


//Reduce

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce((acc, value)=>{
//    return acc += value
// }, 0)

// console.log(balance)