for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(i);
       
}

for(let i=1; i<=10; i++){
    console.log(`This is outer loop ${i}`);
    for(let j=1; j<=10;j++){
        console.log(`${i}*${j} = ${i*j}`)
    }
    
}
let patern='';
for(let i=1; i<=5; i++){

     for(let j=1; j<=i;j++){
            patern+="*"        
    }
    patern+="\n";
 }
console.log(patern);


let pattern=""
for(let i=5;i<=1;i--){
    for(let j=1; j<=i;j++){
        pattern+="*"
    }
    pattern+="\n"
}
console.log(pattern);


let smth=''
for (let i=1;i<=5;i++){
    for(let j=1;j<=5-i;j++){
        smth+=" "

    }

    for(let k=1; k<=2*i-1;k++){
        smth+="*"

    }
    smth+="\n";
}
console.log(smth);



//Loops in array
let myArr=["Apple", "Mango", "Banana"]

for(let i=0; i<=myArr.length-1;i++){
    console.log(myArr[i]);
    
}