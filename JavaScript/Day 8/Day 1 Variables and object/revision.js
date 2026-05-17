console.log("Creating Variables From Day 1: ");

//==============================================================================================
// We can use  let , Var , const  to create variables in JavaScript. Let's have an example.
let address = "Nepal";
var age = 20;
const salary = 20000;
console.log(
  "My address is " + address + " age is " + age + " and salary is " + salary,
);
//==============================================================================================

//==============================================================================================
//You can declare the same var variable twice without error — dangerous
console.log(age); //  Display 20
var age = 21;
console.log(age); //   Display 21 , This is one of the worst case in Js , when we use var.
//=========================================================================================

//==============================================================================================
//var hoisting , we can print the variable before declaring. __Problem in var (undefined — no error, just undefined )
console.log(hoistingVariable);
var hoistingVariable = "Dangerous";
//==============================================================================================

//==============================================================================================
//we can change the value of varables which are created using let and var.
address = "Chitwan";
age = 21;
console.log(address, age);
//==============================================================================================

//==============================================================================================
//We can't change the value of varables which are created using const.
//salary=21000; It will throw an error because const variables cannot be reassigned.
console.log(salary);
//==============================================================================================

//==============================================================================================
// Now let's talk about objects in JavaScript.
let firstObject = {
  name: "Ashish Dhakal",
  age: 21,
  address: "Aandhikhola 01, Syangja",
  "core subjects": "JavaScript, Java, PHP, Laravel",
};
console.log(firstObject); //We can print the object directly without using loop's.
//==============================================================================================

//==============================================================================================
// We can change the value of object .
firstObject.name = "New Name Ram";
console.log(firstObject);
//==============================================================================================

//we can change the key of the object to, can make name to nickname.
firstObject.nickNamename=firstObject.name;
delete firstObject.name;
console.log(firstObject);


// IMPORTANT: const with objects and arrays 
// The variable cannot be reassigned, but the contents CAN change 
// Let me explain, we can change the contents of the array and object but can't change the variable.
//we Can change the value

const canChange=[11,"Ashish","Aandhikhola"];
canChange[0]=12;
console.log(canChange);

const canChangeObject={
  name:"Harry",
  age:20,
  address:"Nepal"
};
canChangeObject.address="india";
console.log(canChangeObject);