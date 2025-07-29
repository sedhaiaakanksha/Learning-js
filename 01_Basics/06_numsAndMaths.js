/*
#########Numbers#########
*/
let score=10.05;
// this is one way to declare number

let balance= new Number(2000000);
console.log(balance);

// we have some properties and function that works with number
console.log(score.toFixed(2)); // fixes the number with decimal value. eg: if the score is 10 then this will give 10.00.
console.log(balance.toLocaleString()); // shows the number using comma in us standarad
console.log(balance.toLocaleString("en-In")); // shows the number using comma in nepali standard
console.log(score.toPrecision(3));// shows the precies value 
console.log(score.toString());// Converts the number into string.



