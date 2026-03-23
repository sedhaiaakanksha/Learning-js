function willWait() {
  console.log("It will run after");
}

setTimeout(() => {
  willWait();
}, 4000);

for (let i = 0; i <= 5; i++) {
  console.log(i);
}
