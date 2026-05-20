/*
 Mouse Events 
click → when you click an element
dblclick → double click
mouseover → mouse enters element
mouseout → mouse leaves element
mousemove → mouse moves over element
*/

let clk = document.querySelector("#box1");
clk.addEventListener("ondblclick", () => {
  console.log("You click the box");
});

let box2= document.querySelector("#box2");
box2.addEventListener("mouseover", () => {
  console.log("mouse over");
});