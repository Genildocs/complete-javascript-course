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

const newFlights = flights.split('+');


for (let i = 0; i < newFlights.length; i ++){
    /*arrayFlights.push(newFlights[i].replaceAll(newFlights[i][0],'').replaceAll(';',' '))*/
    const[fours, secon, terc, quart] = newFlights[i].replace('_','').split(';')
    const arrafligts = [fours.replace('_',' ').padStart(25,'.'),'from',secon.toUpperCase().slice(0,3),'to', terc.toUpperCase().slice(0,3), quart]
    console.log(arrafligts.join(' '))
}




/*for (let i = 0; i < arrayFlights.length; i++){
    const [frist, second , terce, hours] = arrayFlights[i].split(' ');
    const novoarray = [frist, 'from', second.toUpperCase().slice(0,3), 'to', terce.toUpperCase().slice(0,3), hours]
}*/

for (const flight of flights.split('+')){

}