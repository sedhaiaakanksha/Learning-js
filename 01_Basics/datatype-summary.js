// There are two types of datatype in javascript
//1. PRIMITIVE DATATYPE: String, Number, Boolean, bigInt, Symbol, null, undefined.
//2. REFERENCE (NON-PREMITIVE) DATATYPE: Array, Object, Function


// Examples of symbol and non-premitive datatype

//1. Array
let greatPlayers=["Neymar", "Messi", "Ronaldo"];
console.log(greatPlayers);

//2. Object -> It  is written in key-value pair and can be anydatatype
let playerInfo={
    name:"Neymar",
    age:20
};

console.log(playerInfo);

//3. Function  -> It is written inside curly braces.
 const scoreCount= function(){
    console.log("You have scored a goal");
    
 }

 let smth=null;
 console.log(typeof greatPlayers);
 
//type of function is function which is actually objectfunction
//type of undefined is undefined.
// type of object is object
//type pf null is object 
// type of array is object


