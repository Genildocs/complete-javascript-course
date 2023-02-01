/* Challenge ONE */

let pesoMarks = 78;
let alturaMarks = 1.69;

let pesoJohn = 92;
let alturaJohn = 1.95;

let imcMarks = pesoMarks / (alturaMarks**2);
console.log(imcMarks.toFixed(2));

let imcJohn = pesoJohn / (alturaJohn**2);
console.log(imcJohn.toFixed(2));

let markHigherBMI = imcMarks > imcJohn;
console.log(markHigherBMI);

pesoMarks = 95;
alturaMarks = 1.88;

imcMarks = pesoMarks / (alturaMarks**2);
console.log(imcMarks.toFixed(2));

pesoJohn = 85;
alturaJohn = 1.76;
imcJohn = pesoJohn / (alturaJohn**2);
console.log(imcJohn.toFixed(2));

markHigherBMI = imcMarks > imcJohn;
console.log(markHigherBMI);


