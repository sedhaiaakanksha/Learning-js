function closure() {
  let count = 4;

  return function () {
    count++;
    return count;
  };
}

let increment = closure();

console.log(increment());
