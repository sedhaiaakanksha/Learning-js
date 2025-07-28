"use strict"; // it treats code as newer version


//alert(2+3); because this is node.js we do not use alert.

// cod readabiliy should be high.


let name="Name";// string datatype
let age= 18;// integer datatype
let isActive= false; // boolean
let bigNum= 1000000000000n;
console.log(typeof bigNum);

console.log(typeof(isActive)) // is used to check the type of the variable.

// TYPES OF DATA TYPES IN JAVASCRIPT
/*
1. PRIMITIVE DATATYPE

number => upto 2 to power 53
bigInt => for big numbers eg: 10000000..............................
boolean => true or false
string => numbers and alphabets inside ""
null => standalnone value (eg: temperature: null here if the temperature was 0, then it would define 
temperature of that place. But here the value is null it means that the temperature is not updated.)
symbol => unique
undefined => when value of that variable is not assigned.

2.NON-PREMITIVE DATATYPE

object

important thing :: the type of null and undfined is object.

*/


/*
############## Stack(primitive) and heap (non-premitive) ##############
*/

let myName= "Aakanksha";
let myNameNew= myName; // Here we get copy of the myName variable.
myNameNew= "Not Aakanksha"// This wont change the actual value.

console.log(myNameNew);
console.log(myName);



let myUser1={
    name:"Aakanksha",
    age:18

}

let myUser2=myUser1;// this will get the reference (direct value)
myUser2.name="Someone"; // Here it will change the actual value.

console.log(myUser1.name);

