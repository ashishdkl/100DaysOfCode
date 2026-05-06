console.log("Now we are talking about operators.");
let a = 10;
let b = 5;

console.log("Arithmetic Operators");
let arTh = a * b;
console.log(arTh);
let arTh2 = a ** b; // this will work as a power like we do 2**3 means 2 to the power 3
console.log(arTh2);

let arTh3 = a / b;
console.log(arTh3);

let arTh4 = a % b;
console.log(arTh4);
a++;
b--;
console.log(a);
console.log(b);

console.log("Assignment Operators");
let x = 20;
let y = 10;
console.log((x += y));
console.log(x);
console.log((x /= y));
console.log((x %= y));

console.log("Comparision operator");

let m = 10;
let n = "10";

if (m == n) {
  console.log("They have same value." + m, n);
} else {
  console.log("They don't have same value.");
}

if (m === n) {
  console.log("They have same value and same datatype.");
} else {
  console.log("They have same value but different data types.");
}

console.log("Logical Operators.");
let num1 = 12;
let num2 = 23;
if (num1 > 10 && num2 < 24) {
  console.log("We use the logical AND operator");
} else {
  console.log("We din't use the logical AND operator");
}

if (num1 == 12 || num2 == 342342) {
  console.log("We use logical OR operator.");
} else {
  console.log("We didn't use logical OR operator.");
}

if (1 != 2) {
  console.log(true);
} else false;

console.log("Trenary Operator, we can do if else in once.");
let tren = 1 > 2 ? "1 is greater" : "2 is greater";
console.log(tren);
