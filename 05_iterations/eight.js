const prices=[100,700,150];

const sumPrice=prices.reduce(function (acc, currval) {
     
    return acc+currval;   
},0);

console.log(sumPrice);


const sum= prices.reduce((acc,currval)=> acc+currval,0)
console.log(sum);


const courses = [
    { title: "Information Systems",
      price: 100 },
    { title: "Internet Programming",
      price: 120 },
    { title: "Software Eng", 
      price: 110 }
  ];   

  const totalCost= courses.reduce((acc,currval)=> acc+currval.price,0);
  console.log(totalCost);
  