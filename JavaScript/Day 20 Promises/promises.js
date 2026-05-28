const loginTime = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Login Sucessful");
  }, 1000);
});
loginTime
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
