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
