console.log("Today we will learn about Arrays in JavaScript!");
// An array is a data structure that can hold multiple values at once.
// We can create an array using square brackets [] and separate the values with commas.
let name = ["Ashish", "Ram", "Hari"];
console.log(name);




// In javaScript we don't need to use loops to display array , we can normally display them without using any type of loop's.
// We can mix datatype in array;
let personInfo = [
  "Ashish Dhakal",
  20,
  "Software Enigneer",
  "Bharatpur Nepal",
  { Stack: "HTML,CSS, JS, Node.Js, Express.Js, React.Js" },
];
console.log(personInfo);






//Modifying Elements also possible.We need to use index for this, this index start from 0.
personInfo[2] = "Developer";
console.log(personInfo);





//Print Array length.
console.log(personInfo.length);

// push element in the array , in the end
// By using the push we can add element in the last of the array.
let stack = ["Java", "JavaScript", "Node.js", "React.js"];
stack.push("C++");
console.log(stack);

//pop - use to remove element from the end.when we need to remove the element from the end we use pop.let's have a example using the stack variable which store array.
stack.pop();
console.log(stack);
//if we want to don't modify the main variable then we can use another variable to do this operations. we can see example in another step.

//unshift - use to add element in the beginning of the array.
stack.unshift("C Programming.");
console.log(stack);

//shift - use to remove element from the start.now let's remove c programming
let newVar = stack.shift();
console.log(newVar);
