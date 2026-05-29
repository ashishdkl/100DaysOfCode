let btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  let data = await response.json();

  console.log(data);
});
