let courseAdd = document.querySelector("#course");
let calculate = document.querySelector("#calculate");
let sgpa = document.querySelector("#sgpa");
let container = document.querySelector(".container");
courseAdd.addEventListener("click", () => {
  let row = document.createElement("div");
  row.classList.add("course-row");
  row.innerHTML = `
<select class="credit">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>

<select class="grade">
  <option value="">Grade</option>
  <option value="4.0">A</option>
  <option value="3.7">A-</option>
  <option value="3.3">B+</option>
  <option value="3.0">B</option>
  <option value="2.7">B-</option>
  <option value="2.3">C+</option>
  <option value="2.0">C</option>
  <option value="1.7">C-</option>
  <option value="1.3">D+</option>
  <option value="1.0">D</option>
  <option value="0">F</option>
</select>

<button class="delete-btn">🗑</button>
`;
  let deleteBtn = row.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", () => {
    row.remove();
  });
  console.log(row);
  container.insertBefore(row, courseAdd);
});

calculate.addEventListener("click", () => {
  let credits = document.querySelectorAll(".credit");
  let grades = document.querySelectorAll(".grade");

  console.log(credits);
  console.log(grades);
});
