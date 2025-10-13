const myScore= [];
if(myScore){
    console.log("I am inside if block");
    
}
//truthy value = true,1,"something", "0",`false`,"  ", [],{}, function(){}
//falsy value= false,0, -0, BigInt 0n, "", null, undefined, NaN

// Nullish Coalescing Operator (??): The nullish coalescing (??) operator is a logical operator that returns its right-hand 
// side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

const score = 5 ?? 10
console.log(score);

const anotherScore= null ?? 15
console.log(anotherScore);
