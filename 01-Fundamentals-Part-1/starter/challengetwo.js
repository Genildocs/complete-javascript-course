/* Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!" */

let pesoMarks = 78;
let alturaMarks = 1.69;

let pesoJohn = 92;
let alturaJohn = 1.95;

let imcMarks = pesoMarks / (alturaMarks**2);

let imcJohn = pesoJohn / (alturaJohn**2);


if(imcMarks > imcJohn){
     console.log(`Mark's BMI is: ${imcMarks.toFixed(2)} and it is higher than John's which is: ${imcJohn.toFixed(2)}!`)
}else{
     console.log(`John's BMI is: ${imcJohn.toFixed(2)} and it is lower than Mark's which is: ${imcMarks.toFixed(2)}!`)
}
