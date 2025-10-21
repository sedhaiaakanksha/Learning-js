//For of loop
//[{},{},{}]
//["","",""]

const numbers=[1,2,3,4,5]
for(const num of numbers){
    console.log(num);
    
}


//Object inside the array
const language=[{
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

for (const lang of language) {
    console.log(lang);
    
}

//Str inside the array
const greeting="Hello world"
for (const greet of greeting) {
    if (greet==" ") {
        continue;
    }
 console.log(greet);
    
}

//Map
const map= new Map();
map.set("js","JavaScript")
map.set("py","python")
map.set("cpp","C++")

for (const [key,value] of map) {
    console.log(key);
    console.log(`${key} :- ${value}`);
    
    
    
}

//We cannot use forof loop in objects