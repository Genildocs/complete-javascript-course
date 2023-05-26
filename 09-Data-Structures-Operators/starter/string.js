/*const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(airline.indexOf('Tap'))
console.log(airline.slice(4));
console.log(airline);*/

const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25' +
    '+_Arrival;bru0943384722;fao93766109;11:45' +
    '+_Delayed_Arrival;hel7439299980;fao93766109;12:05' +
    '+_Departure;fao93766109;lis2323639855;12:30';

const newFlights = flights.replaceAll('_',' ').split('+');
console.log(newFlights);
let arrayFlights = [];
for (let i = 0; i < newFlights.length; i++){
    arrayFlights = [i]
}

console.log(arrayFlights)


