// Ways to define String
const str="First-way";
const str1= new String("Second-Way");
console.log(str);
console.log(str1);

let name ="Aakanksha";
let age= 18;

// Way to concat string
//Using back quetation ``
console.log(`My name is ${name} and my age is ${age}`);

// using + and ,
console.log(name + age + " Hello");


//+++++++++++Some FUnctions in JS+++++++++++++++

//1. length -> returns the length of the string
console.log(name.length);

//2. split() -> splits STring into Array using symbol, whitespace or letter.
console.log(str1.split("-"));

//3. charAt() -> returns the character of the given index
console.log(str.charAt(4));

//4. indexOf() -> returns the index of given character.
console.log(str.indexOf("w"));

//5. subSTring() -> returns  letters between the (indexFirst, indexLast-1)
console.log(str1.substring(1,6));

//6. trim() -> removes white spaces
let trrimable="    hello    ";
console.log(trrimable.trim());

//6.1. trimEnd and trimStart -> removes whitespaces from after and before value respectively
console.log(trrimable.trimEnd());
console.log(trrimable.trimStart());

//7. toLowerCase() and toUpperCase() -> makes the value in all smalls and all caps
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());

//8. replace() -> replaces the character
console.log(str.replace("-","_"));

//9. slice() -> to extract the certain section from the string. It exculdes the last index that means it goes upto n-1.
console.log(str1.slice(1,3));

//10. concat() -> concats the string
console.log(str.concat(str1));


// there are many more functions that takes places in string.




