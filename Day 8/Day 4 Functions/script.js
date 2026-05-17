console.log("Functions");

// Basic Function
function greet() {
  console.log("Hello Everyone: ");
}
greet(); //Function call.

//===========================================

// Function with parameter.
function nameDisplay(name) {
  console.log("Hello it's me " + name);
}
nameDisplay("Ram");
nameDisplay("Hari");

//================================================

// Arrow Function

let varForArrow = () => {
  console.log("Hello it's me arrow function ");
};
varForArrow(); // The varForArrow is variable but still we need to use () to print the funtion

// Function with Parameters
function sum(a, b) {
  return a + b;
}
console.log("The sum of two number is " + sum(11, 22));

// Function Hoisting example
hoistingDemoFunction();
function hoistingDemoFunction() {
  console.log("Function is called before declaring which is known as hoisting");
}

//A function can also be stored in a variable. These are NOT hoisted.
let varForFunction = function () {
  console.log("Function is stored in a variable.");
};
varForFunction();