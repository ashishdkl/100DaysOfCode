let input = document.querySelector("#input");
let btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {
  let location = input.value;
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY`,
  );
  let data = await response.json();
  console.log(data);
});
