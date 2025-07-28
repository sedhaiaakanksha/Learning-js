let score =33;
console.log(typeof score);
let scoreString= String(score);
console.log(score);
console.log(typeof scoreString);

let isActive= -1;
let isActiveBoolean= Boolean(isActive);
console.log(isActiveBoolean);

let smth= "23av"
let smthNumber= Number(smth);
console.log(smthNumber);
console.log(typeof(smthNumber));

let num;
let numNumber= Number(num);
console.log(numNumber);
console.log(typeof(numNumber));




/*
string to boolean
""=> false
"something" => true

*/

/*
Number to Boolean
1 or any number => True
0=>False

*/

/*
String to Number
" sok" => NAN
"123" => 123
" "=>0
*/

/*
Undefined to number => NaN
Udefined to Boolean => false
undefined to string => Undefined

*/

//######### OPERATIONS ############ */
let name="Aakanksha"
let surname="Sedhai"
console.log(name+ surname);

let a=12
let b="11"
let c= 10

console.log(a +b +c);


console.log(typeof (1+3+"2"));
//If string is the 1st and value then it woud convert everything into string. eg "2"+3+4 output=> 234
// but, if 1st and 2nd value both are numbers then those two are treated as number and will concat with the string


let population=100; 
console.log(population++);//postfix => increments after printing the value
console.log(++population);// prefix =>increments before printing the value



console.log(+true); // converts boolean into number
console.log( +" ");  // as we know empty string converts into 0 into zero 
console.log(+false);








