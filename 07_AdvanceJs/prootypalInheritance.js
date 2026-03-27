function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`hello, ${this.name}`);
};

let aakanksha = new Person("Aakanksha");

aakanksha.greet();
