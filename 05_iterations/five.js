//for each loop
//Syntax for for each loop
// objName.forEach(function({}))

//SYNTAX FOR FUNCTION
const age= function(){
    console.log("My age is 19");
    
}


//Arrow function syntax
const greet= (name)=>{
    console.log("Hello I am "+ name);
    
}
// greet("Aakanksha")

//named Anonymous function 
(function well(){
    console.log("umm");
    
})();

//unnamed anonymous function
(()=>{
    console.log("hieeee");
    
})();

const myList=["Apple", "Banana", "Orange"]
myList.forEach(function (list){
console.log(list);
})


//Object inside array
const myArrObj=[{
    name: "js",
    fullname: "javascript"
},
{
    name:"java",
    fullname:"java"
},
{
    name: "py",
    fullname:"python"
}
]

myArrObj.forEach((item, index, arr)=>{
    console.log(item.name);
    console.log(index);
    console.log(arr);
    
    
    
})