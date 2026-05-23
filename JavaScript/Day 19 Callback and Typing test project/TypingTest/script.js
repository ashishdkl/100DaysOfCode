let time = document.querySelector("#time");
let wpm = document.querySelector("#wpm");
let accuracy = document.querySelector("#accuracy");
let mistake = document.querySelector("#mistake");
let bestScore = document.querySelector("#bestScore");
let paragraph = document.querySelector("#paragraph");
let textarea = document.querySelector("#textarea");
let restart = document.querySelector("#restart");

restart.addEventListener("click", () => {
  textarea.value = "";
  wpm.textContent = 0;
  accuracy.textContent = 0;
  mistake.textContent = 0;
});

textarea.addEventListener("input", () => {
  console.log("Typing");
});
