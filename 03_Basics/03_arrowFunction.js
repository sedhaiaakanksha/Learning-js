
//this keyword refers to the current contect of the object it doesnt works in the function.

const user={
    username:"Aakanksha",
    price:500,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome`);
        
    }
}
user.welcomeMessage();
user.username="Sam"
user.welcomeMessage();


// const chai= function(){
//     console.log(this); // this keyword doesnt return empty object but returns alot of data i.e. it doesn work here.
    
// }

// chai();

const chai2= function(){
    let username=" Aakanksha"
    console.log(this.username); // this keyword doesnt work in functiom
    
}
chai2();

//##### ARROW FUNCTION ########


// Explicit return where braces and return keyword is used
const addTwo= (num1, num2)=> {
    return num1+num2 ;
}

console.log(addTwo(5,10));

//Implicit return where parenthesis is used not braces and return keyword
const subTwo=(num3, num4)=> (num3-num4);
console.log(subTwo(500,169));

 const empty =()=> console.log(this); // this keyword in arrow function returns empty object

 empty();