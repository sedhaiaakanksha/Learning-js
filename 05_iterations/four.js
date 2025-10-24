//for in loop
//It is mainly used for object

const myObj={
    name: "js",
    fullname: "javascript",
    platform: "vscode"
}

for (const key in myObj) {
   console.log(`${key} :- ${myObj[key]}`);
   
}
//we can also use for in loop in array

const myArr=[1,2,3,4,5,6,7,8,9]
for(const arr in myArr){
    // console.log(`Index is ${arr} and elements is ${myArr[arr]}`);
    console.log(`${myArr[arr]}`);
    
    
}

//we cannot use for in in maps

