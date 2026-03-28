function doCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sucess = true;

      if (sucess) {
        resolve({ name: "Aakaksha", num: 123456 }); //only one type of data ig
      } else {
        reject("");
      }
    }, 4000);
  });
}

// doCall()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function callPerson() {
  try {
    console.log("Calling the person ......");
    let personDetails = await doCall();
    console.log(personDetails);
    console.log("Calling Sucess");
  } catch (error) {
    console.log("Cannot call the person ", error);
  }
}

callPerson();
