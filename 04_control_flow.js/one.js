// If statement
 if(true){
 console.log("Hello i am inside if block");
 }
 
 //if else
const isUserLoggedIn= false;
const isUserActive= true;
 if(isUserLoggedIn && isUserActive){
    console.log("User is logged in and active");

 }
else{
    console.log("User is not logged in");  

}

if (isUserActive|| isUserLoggedIn){
    console.log("You are eligible to be here");
    
}
else{
console.log("You are not eligible to be here");

}
// We can use comparision operators to check the conditions
//> ,<. >=,<=, !=, ==, ===, &&, ||

const temperature= 38;
if (temperature>38){
    console.log("Temperature is greature than 38");
    
}
else if( temperature=== 38){
    console.log("temprature is 38 ");
    
}
else{
console.log("temprature is less than 38");

}
