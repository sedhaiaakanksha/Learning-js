const accId=12345; // declaring constant it cannot be chnaged .
let accEmail="hello@gmail.com" // scopedeclaring the variable
var accPass=" pass123"; // this is not used due to issue in block 
accAddress="somewhere"; // sometimes variable is declared like thiss to but it is not good practice
let accName; // undefined variable
 

accPass= "lol123"; //value of variable can be changed 

console.log(accName);

console.table([accId,accEmail, accPass, accAddress, accName ]);     // prints data in table.