console.log(
  "The if statement runs a block of code only if a condition is true.",
);
let a = 10;
let b = "10";
if (a == b) {
  console.log("Both have same value.");
} else if (a === b) {
  console.log("Both have same value and same data-type.");
} else {
  console.log("Both are different.");
}

// Nested if else

let age = 18;
let haveCar = true;
let haveLicense = true;
if (age >= 18) {
  if (haveCar) {
    if (haveLicense) {
      console.log("Can Drive");
    }
  }
} else {
  console.log("Can't Drive.");
}
// We will ignore nested loops and use logical operators.
if(age>=18 && haveCar && haveLicense){
    console.log("Can Drive.");
}