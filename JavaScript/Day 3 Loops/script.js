console.log(
  "Hello everyone today we are lerning about loops in morden JavaScript.",
);

// For Loop.
console.log("For loop.");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// While Loop.
console.log("While loop");
let num = 1;
while (num < 10) {
  console.log("Printed: " + num);
  num++;
}

// Do While Loop.
let num1 = 10;
do {
  console.log(" Do while loop.");
  num1++;
} while (num1 > 20);

// In Do while loop, if the condition is not sataisfied still the statement will be executed for a one time . (if staisfied it will print according to logic.)

console.log("For in Loop");
let obj = {
  name: "Ashish Dhakal",
  age: 22,
  address: "Aandhikhola 1 Syangja,Nepal",
};

for (let KeyVar in obj) {
  console.log(KeyVar, obj[KeyVar]);
}

for (let newVar in obj) {
  console.log(newVar, obj[newVar]);
}
// We are using For In loop here, where we create object first and display the object using for in loop , in for in we need to create a variable for key and using the object variable and key we display the value.
// for ( let key object){
//   console.log( key, key[object]);
// }




// For of Loop
console.log("Let's lern about for of loop");
let name=['Laravel','JavaScript','Node.js','React.js'];
for ( let varName of name){
  console.log(varName);
}
//We use Array and Strings in this 