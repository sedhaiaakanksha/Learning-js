const marvel_heros=["Avengers","Iron_Man","Captain_America","Spider-Man","Deadpool"];
const dc_heros=["Superman", "Batman","Wonder_Woman", "Green_Lantern", "Flash"];

// marvel_heros.push(dc_heros);

console.log(marvel_heros);


//concat() method
// let all_heros=marvel_heros.concat(dc_heros); // to use concat we must store it in new variable.
// console.log(all_heros);

// smash
let new_all_heros= [...marvel_heros,...dc_heros];
console.log(new_all_heros);

//OR

console.log([...marvel_heros,...dc_heros]);


// flat()
const arr= [1,2,3,[4,5,[6,7,8]],9,[10,11]]; // array can contain any datatype here for eg array too.
console.log(arr.flat(2)); // can add upto infinity 


//Array.from() , Array.of()

console.log(Array.from("hello"));  // to convert anything into array. We use Array.from()

console.log(Array.from({name: "Aakanksha", age:18})); // it can transform object into array with specification
//of which to make array of (key or value). SO it returns empty array.

const a1="hello"
const a2="hi"
const a3="bye"
console.log(Array.of(a1,a2,a3));
// to convert differnt variable into one single array we use Array.of().