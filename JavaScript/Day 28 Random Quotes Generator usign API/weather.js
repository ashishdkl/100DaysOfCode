let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let display = document.querySelector("#display");

btn.addEventListener("click", async () => {
  let location = input.value;
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY`,
  );
  let data = await response.json();
  display.innerHTML = `
    <h3>${data.name}</h3>
    <p>Temperature: ${data.main.temp}</p>
    <p>Weather: ${data.weather[0].description}</p>
  `;
});
