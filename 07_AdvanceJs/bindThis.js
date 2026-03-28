let person = {
  name: "Aakanksha",
  greet() {
    console.log("Hello ", this.name);
  },
};

let greetPerson = person.greet;
greetPerson();

let bindGreet = person.greet.bind({ name: "someone" });
// console.log(bindGreet);
bindGreet();
