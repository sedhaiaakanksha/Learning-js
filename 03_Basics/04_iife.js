//Immediately Invoked Function Expression (IIFE)

//Named IIFE
( function chai (){
    console.log("DB Connected");
    
})(); //Must be terminated by semi colon.


//IIFE with arrow function.
((name)=>{
    console.log(`DB Connected Again ${name}`);
    
})("Aakanksha");