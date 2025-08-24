//Function -> Functions are the package where we keep the code and can useuse it as musch as we want.

function myName(){
    console.log("A");
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("A");   
}

myName()

// function sumOf( num1, num2){
//     console.log(num1+num2);   
// }
// const result = sumOf(2,7);// until and unless we do not return the value we cannot store the value.
// console.log(result);


function sumOf( num1, num2){
    console.log(num1+num2); 
    return num1+num2;  
}
const result = sumOf(2,7);// now the value is stored.
console.log(`Result : ${result}`);

function userLogin(username){
    let message=`${username} has logged in`
    console.log("Sucessful login");
    
    return  message
    console.log("Sucessful login"); // anything after return statement goes unnoticed.
    
}

console.log(userLogin("Aakanksha"));

//##### function with object and array#########

//shopping cart with function

function calculateCartPrice(...price){ //... i.e rest allows the price parameter to store multiple values.
    return price;
}
console.log(calculateCartPrice(200,400,600));

// multiple variable with (...) 
function calculateCartPrice2(num1, num2, ...price){ //here first 2 argument will be stored in first two parameters and others in ...price
    return price;
}
console.log(calculateCartPrice2(200,50,900,1,3,55,600));


// FUNCTION WITH OBJECT

const userInfo={
    username:"aakanksha",
    age:18
 }

function usingUserDetail(anyObject){
    return `Name of user is ${anyObject.username} and their age is ${anyObject.age}`
}

console.log(usingUserDetail(userInfo));

//We can also write it like 
console.log(usingUserDetail({
    username:"sam",
    age:20
}));



//FUNCTION WITH ARRAY

const myArray=[200,300,400,500,600,700]

function usingArray(anyArray){
    return `${anyArray[2]}`
}

console.log(usingArray(myArray));

//OR we can also print it like

console.log(usingArray([200,400,1000]));
