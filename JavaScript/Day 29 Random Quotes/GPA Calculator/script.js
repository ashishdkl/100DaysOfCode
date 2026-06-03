let courseAdd = document.querySelector("#course");
let calculate = document.querySelector("#calculate");
let sgpa = document.querySelector("#sgpa");
courseAdd.addEventListener("click", () => {
  let row = document.createElement("div");
  row.classList.add("course-row");
  console.log(row);
});

calculate.addEventListener("click", () => {
  console.log("calculate");
});
