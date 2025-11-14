//for each loop doesnt return any value
const myNum=[1,2,3,4]

const newNum=myNum.forEach((num)=> {
    return num });

console.log(newNum); //undefined

//filter -> This can return value or print itself.

const Number=[1,2,3,4,,5,6]
Number.filter((item)=> console.log(item));

// it can print iteslf 

const nums= Number.filter((item) => item>4); // it can also return the value.
console.log(nums); //[5,6]

//by using for each
const empNum=[]

Number.forEach((item)=>{
    if (item>4) {
    empNum.push(item)        
    }
} );

console.log(empNum);


const books=[
    {
      "name": "The Hitchhiker's Guide to the Galaxy",
      "genre": "Science Fiction",
      "publish": 1979,
      "edition": "First Edition"
    },
    {
      "name": "Pride and Prejudice",
      "genre": "Romance",
      "publish": 1813,
      "edition": "Penguin Classics"
    },
    {
      "name": "1984",
      "genre": "Dystopian",
      "publish": 1949,
      "edition": "Centennial Edition"
    },
    {
      "name": "To Kill a Mockingbird",
      "genre": "Southern Gothic",
      "publish": 1960,
      "edition": "50th Anniversary Edition"
    }
  ]

  let newBooks =books.filter((bk)=> ( bk.genre==="Romance" && bk.publish >=1810));
  console.log(newBooks)


  newBooks= books.filter((bk)=> bk.publish >1970);
  console.log(newBooks);
  

  
