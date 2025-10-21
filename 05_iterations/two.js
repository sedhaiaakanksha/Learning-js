//while loop
let i=0
while(i<=10){
    console.log(`Value of i is ${i}`);
    i++
}

let myArr=["Apple","Mango","Banana"]
let index=0

while(index<myArr.length){
    console.log(myArr[index]);
    index ++
}

//break and continue
//break
let b=0
while(b<=10){
    if (b==5) {
        console.log("5 is spotted");
        
       break 
    }
    console.log(`Value of b is ${b}`);
    b++
}


//Continue

let c=0
while(c<=10){
    if (c==2) {
        c++
        console.log(`2 is here but its okay`);
        continue;
    }
    console.log(`Value of c is ${c}`);
     c++
}

// do while loop
let j=0
do{
console.log("I love you");
j++
}while(j<=5)

//Exception : 1st thing always execute
let a=15
do{
    console.log(`Value of a is ${a}`);
    a++
}while(a<=10)