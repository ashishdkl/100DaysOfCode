let a = 10;
let b = 20;
let operation = "+";

console.log("Faulty Calculator");
let s = Math.random();

if (s < 0.1) {
  if (operation === "-") {
    console.log(a + b);
  } else if (operation === "+") {
    console.log(a - b);
  }
} else {
  if (operation === "+") {
    console.log(a + b);
  } else if (operation === "-") {
    console.log(a - b);
  }
}
