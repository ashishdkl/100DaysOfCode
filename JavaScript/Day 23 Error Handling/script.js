console.log("Error Handling in JavaScript");
let a = prompt("Enter a number");
let b = prompt("Enter another number");
if (isNaN(a) || isNaN(b)) {
  throw TypeError("Only integer are supported.");
}
let sum = parseInt(a) + parseInt(b); // parseInt is used to convert the string into integer.when we create a variable js treat as string so we need to convert them.

console.log("Sum of two number is ", sum);
