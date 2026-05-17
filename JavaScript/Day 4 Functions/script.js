function myfun() {
  console.log("Hello it's my first function in 100 days of code.");
}
myfun();

function secondFunction() {
  let arr = [1, 23, 4, 5, 3, 23, 4];
  for (let vare of arr) {
    console.log(vare);
  }
}
secondFunction();

// we can directly print array in js without using loop but this not a ideal method to print an array , in JS we use for of loop to print array.

// Arrow Functions.
let arrowFunction = () => {
  console.log("This is an arrow function.");
};
arrowFunction();

let secArrow = (x) => {
  console.log("Second Arrow function." + x);
};
secArrow(322 + "d" + 2);
//we can pass integer and string both together.

function nameDisplay(name, age) {
  console.log("My name is " + name + " I am " + age + " years old.");
  console.log("My name is " + name + " I am " + age + " years old.");
  console.log("My name is " + name + " I am " + age + " years old.");
}
nameDisplay("Ashish Dhakal", 22);
nameDisplay("Ram Acharya", 23);
nameDisplay("Hari Sharma", 25);
