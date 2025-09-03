//SCOPES {} -> The scope is the current context of execution in which values and expressions are "visible" or can be referenced.
//We are going to discuss about global scope and block scope.

let a=50; // this is global scope  that means any function loops and conditional statements.
var c=5000;
if( true){
    // let a=5
    let b=10 // block scope that means it can only be used inside it 
    var c=15 // and heres comes var . if variable is declared by writing var then those can be
    //  accessed out the scope which causes problem when we are writing code as professionals.
    console.log(a);

    
}
console.log(c); // output 15

console.log(a);


function one(){
    const username="aakanksha"
    function two(){
        const website="facebook"
        console.log(website);
        console.log(username);// inner function can access properties of outer function but the 
        // scope of inner function limits itself in here
        
    }
    // console.log(website);  we cannot accesss this variable  because outer function cannot access the variable of inner function
    console.log(username);
    two();// calling function inside the function
    
}
one();

//In if else block

if (true){
    const username="Aakanksha"
    if (username==="Aakanksha"){
        const website=" snapcht"
        console.log(username + website);
        
    }
    //console.log(website); we cannot access website here because it is out of scope
    
}
//console.log(username); We cannot access username here because it is also out of scope


//++++++++++++++++++++++ INTERSTING ++++++++++++++++++++++++

//Two ways of declaring function

//Direct function

console.log(addOne(10));

function addOne(num){ // we can access this anywhere top or buttom
    return num+1;
}


//function stored in variable


// console.log(addTwo(4)); we cannot access it here

const addTwo= function(num){ // we cannot access it without declaring it tht means we can access it below declarition.
    return num+2;
}

console.log(addTwo(5));
