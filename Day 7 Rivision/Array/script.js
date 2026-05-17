console.log("Today we will learn about Array.");
let empty = [];
let name = ["Ashish", "Ram", "Hari"];
let number = [23, 423, 34, 54];
let mixed = ["Ram Dhakal", 20, "Backend Developer", "Oxford College"];

// We can print the array without using loops
console.log(mixed);

// Accessing elements by using index.
console.log(mixed[3]);

// Modifying elements
mixed[3] = " College of Information Technology ";
console.log(mixed);

// Adding and Removing Elements.

name.push("Krishna"); // Add to end.

number.pop(); // Remove from end.

mixed.unshift("Node.js", "Nepal"); // Add to start (can add multiple items);

number.shift(); // Remove from Start.

console.log(name,number,mixed);


let aToZ=["A","B","C","D","E"];
// slice()
console.log(aToZ.slice(0,3)); // It will display the position 0,1 and 2 , ignore the last index from slice.
console.log(aToZ.slice(3));  // It will display all the elements after the index 3.

// splice() is used to: add, remove, or replace elements in an array (directly changes original array)
console.log("Splice.");
console.log(aToZ.splice(1, 3 ,"Replaced"));