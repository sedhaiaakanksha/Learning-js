//Declaring object via constructor
const faceboolUser= new Object();
faceboolUser.id= "abc123";
faceboolUser.name= "someone";

// console.log(faceboolUser);


const otherUser={
    id1: "def456",
    name1: "people"
};

console.log(faceboolUser,otherUser);


//Concatinating the objects

let newUser= Object.assign({}, faceboolUser, otherUser); // concatnating the objects using object.assign({}, obj1, obj2).
console.log(newUser);

//other way
let otherObject= {...faceboolUser,...otherUser}// just like how we do in array
console.log(otherObject);


//object inside object

const userInformation ={
    name:{
        fullname:{
            firstName:"Aakanksha",
            lastName: "Sedhai",
            userName:{
                fullUserName:"sedhaiaakanksha"
            }
        }
    }
}

console.log(userInformation.name.fullname.userName); //acessing the object inside object

//Objects inside Array

const ArrayObject=[{ id :112, name:"Aakanksha" },
    { id :112, name:"Aakanksha" },
    { id :113, name:"Aaku" }
]
console.log(ArrayObject[2].id);


//methods in object
console.log(Object.keys(userInformation)); // returns keys
console.log(Object.values(userInformation)); //returns values
console.log(Object.entries(otherUser));// return key and value in array form onr key and value is equal to one array.

//.hasOwnProperty() ->checks if the key exists in that object or not returns boolean value.
console.log(faceboolUser.hasOwnProperty("email"));



