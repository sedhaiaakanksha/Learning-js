let employeeInfo={
    id: "ep1",
    name: "Employee 1",
    email: "employee@gmail.com",
    employeeJoinDate: "Jan-20, 2024"
}

// object destruction : a syntax that allows unpacking properties from objects into distinct variables. I
// t is a form of assignment that makes it easier to extract values from data structures.

const {id}= employeeInfo; //object destruction.

const {employeeJoinDate: JoinDate}= employeeInfo; //We can also assign our own variable name.

console.log(JoinDate);
console.log(id);


//API -> API is the task which we assign others to complete.

//JASON and object are kind of similar . The only difference is that JASON API IS WRITTEN  
// USING BRACES {} or in braces enclosed by brackets.
// {
//     "loginId" : 112,
//     "name": "Aakanksha" 
// }

[
    {},
    {},
    {}
]

