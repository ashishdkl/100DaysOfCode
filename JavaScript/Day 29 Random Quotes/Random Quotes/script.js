let quoteCount = document.querySelector("#quoteCount");
let btn = document.querySelector("#btn");
let displayContainer = document.querySelector(".displayContainer");

btn.addEventListener("click", async () => {
  let value = quoteCount.value;

  displayContainer.innerHTML = "";

  for (let i = 0; i < value; i++) {
    let response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": "YOUR_API_KEY",
      },
    });

    let data = await response.json();

    let quoteText = data[0].quote;
    let author = data[0].author;

    let div = document.createElement("div");
    div.innerHTML = `
      <p>"${quoteText}"</p>
      <small>- ${author}</small>
      <hr>
    `;

    displayContainer.appendChild(div);
  }
});
