function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sucess = true;

      if (sucess) {
        resolve("Data fetched sucessfully!");
      } else {
        reject("Error !!! data cannot be fetched");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    return `Aakanksha`;
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
