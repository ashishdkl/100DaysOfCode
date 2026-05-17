console.log("Events");
document.title = "Events";

let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    console.log("Button was clicked.")
})

btn.addEventListener("dblclick", () => {
  console.log("You just double click the button.");
  alert("double clicked");
});

// Let's first create a function and use it after.
let button = document.querySelector(".button");
function btnClick() {
  console.log("You just click the button");
}
button.addEventListener("click", btnClick);
