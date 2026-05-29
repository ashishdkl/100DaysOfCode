let a = 20;
let b = 5;

console.log("These are arithmetic Operators.");
console.log(a + b); // 25
console.log(a - b); // 15
console.log(a * b); // 100
console.log(a / b); // 4
console.log(a % b); //  0 (remainder when 20 divided by 5)
console.log(a ** b); // 20 to the power 5

// Increment and Decrement
let i = 5;
let j = 4;
console.log(`We have two variables i and j with the value of ${i} and ${j}`);

console.log("Post Increment and Decrement.");
//   Post Increment and Decrement.
console.log(i++); // post-increment; value is still 5
console.log(i); // value is 6

console.log(j--); // Post-decrement;  value is still 4
console.log(j); // value is 3

// Pre Increment and Decrement. Value is alredy increase or decrease.
console.log("Pre Increment and Decrement.");
console.log(++i); // value is 7;
console.log(--i); // value is 6;

//================================================================================
console.log("Assignment Operatiors: ");
let x = 32;
let y = 98;
console.log((x += 10)); //x= x+10
console.log((x -= 10)); //x= x-10
console.log((y /= 2)); // y=y/2
console.log((x *= y)); //x=x*y;

//============================================================================
//Comparison operators compare two values and return a boolean (true or false).
let firstVariable = "20";
let secondVariable = 20;
console.log(firstVariable == secondVariable); // return true because it only compare value not data type.
console.log(firstVariable === secondVariable); // return false because it will compare value and datatype both.
console.log("10" === 10); // false , because they have same value but different data type.
console.log(10 === 10); // true, because they both have same value and same data type
// == (compare value only, not data type.)
// === (compare value and datatype both.)
console.log(10 != 10); //false ,because 10 is equals to 10.
console.log(10 != "10"); // false , because 10 is equals to 10, here is a catch they both have differnt data type but same value in this case the value is compared not data type we need to use !== to compare data type to.
console.log(10 !== "10"); // true , because this are not equal they have differnt data type.
