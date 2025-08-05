let myDate=  new Date();
// functions of date 
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toString());
console.log(myDate.toUTCString());
console.log(myDate.toJSON());
console.log(myDate.toString());




// let myCreatedDate= new Date(`2082-04-20`);
// console.log(myCreatedDate.toLocaleString());
// own date 
let myCreatedDate= new Date(2082, 1, 10,1,56);
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getMilliseconds());
console.log(Date.now());

//COnverting millisecond into second
console.log(` Millisecond converyed into second ->  ${Math.round(Date.now()/1000)}`);



//###### TIMESTAMP ###########
let myTimeStamp= Date.now();

console.log(myTimeStamp);


console.log(myCreatedDate.getTime());

//String interpolation
console.log(`${myCreatedDate.getTime()} is todays date`);



//Customized date and time using localeString


let newDate= new Date();
console.log("Customized print-> " + newDate.toLocaleString("defalt",{
    weekday: "long",
    year: "numeric",
    day: "numeric",
}));
