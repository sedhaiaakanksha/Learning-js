// Declaring Arrays
let myArr= [0,1,2,3,7,8]
let myHeros=new Array(1, "Captain America", 2, "Shakti maan");
 

// METHODS
myArr.push(10);
console.log(myArr);


myArr.pop();
console.log(myArr);


// #### shift and unshift

myArr.unshift(2);
console.log(myArr); // unshift adds new element in 0th index
myArr.shift();
console.log(myArr); // Removes element from 0th index


//#### SLice and Splice

let newArr= [10,7,2,5,1]
console.log("A "+ newArr);
let newArr1= newArr.slice(1,5); // slice takes certain portion of the array and it doesnt incude range. 
console.log(newArr1);
console.log("B " + newArr);

let newArr2= newArr.splice(1,3) // splice inclue ranges and if we use splice for certain portion
//  then that portion is not available in original array
console.log(newArr2);
console.log("C "+newArr);


