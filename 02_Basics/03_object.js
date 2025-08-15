// We can declare by two ways i.e. by constructor and literal
// There is one special type of object which is singleton which can be achived by declaring it via constructors.

//1. object constructor




//object literal
const id= Symbol("id_1");


const JS_User={
    name: "Aakanksha",
    [id]: 456, // declaring other datatype must be done inside brackets.
    "full name":"Aakanksha Sedhai",
    age:18,
    email: "sedhaiaakanksha@iic.edu.np",
    isActive: false,
    hoddy : function(){
        return `I love reading `;
    }
}

// We can access object by two ways by using . or [ ]
console.log(JS_User.name);
// we can access normal varibale by using "."

console.log(JS_User["full name"]);
// we can access normal and variable having gaps or other datatype like symbol.

console.log(JS_User[id]);

console.log(JS_User);


//Altering the data in object.
JS_User.age=19;

console.log(JS_User.age);

// We can also lock the object's value by using object.freez()
// Object.freeze(JS_User)  // HERE ALL THE VALUES ARE FREEZES THAT MEANS WE CANT ALTER THE VALUE.


//Declaring fnction 
JS_User.greeting= function(){
    return `I say hello to ${this.name}`; // here this is equal to the object.
    
}

console.log(JS_User.greeting); // without parenthesis this means we are referring to the function not calling.

console.log(JS_User.greeting());

console.log(JS_User.hoddy());


