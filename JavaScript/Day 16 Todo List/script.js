let text = document.querySelector("#input");
let button = document.querySelector("#button");
let list = document.querySelector("#list");

button.addEventListener("click", () => {
  let task = text.value;
  if (task === "") {
    alert("Input can't be empty.");
  }
  console.log(task);
  list.innerHTML = task;
});
