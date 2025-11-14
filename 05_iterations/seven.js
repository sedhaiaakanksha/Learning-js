const myNum=[1,2,3,4,5,6,7,8,9,10]

 const newNum=myNum.map( (item) => {
    console.log(item);
    return item;
    
});
console.log(newNum);


// Maps can return and print value.


// Chaining

// const num=myNum.map((item)=> item+10).filter((num)=> num>14);
// console.log(num);

myNum.map((item)=> item+10).filter((num)=> {
    if(num>14)
    console.log(num);
});
// console.log(num);