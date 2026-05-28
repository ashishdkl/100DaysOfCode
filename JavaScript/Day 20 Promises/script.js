let promises = new Promise((resolve, rejected) => {
  let food = true;
  if (food) {
    resolve("Food arrived");
  } else {
    rejected("Can't get the food");
  }
});

promises
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
