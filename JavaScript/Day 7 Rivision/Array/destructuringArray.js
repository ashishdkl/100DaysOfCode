// Now let's talk about the array destruting , we can create variables for each array elements. in this code we can see that, for each array elements there is a variable.

// We create variables [name,num1,num2,num3,surname,language] for the elements ["Ashish",12,32,232,"Dhakal","JavaScript"]

// now each array elemts are assign to the each variables.

let arr = ["Ashish", 12, 32, 232, "Dhakal", "JavaScript"];
let [name, num1, num2, num3, surname, language] = arr;

console.log(num1);

// if we want to skip any elements than we can , means if we don't need to assign a variable for any specific element that we can do
let newArr = ["Ram", "Hari", 12, 13, "PHP"];
let [nam, nam2, number1, , skill] = newArr; // here we skip the element 12 from index 2 newArr[2];
console.log(nam);


// By using Array Destructing we can swap the value of two variables.
let var1= 12;
let var2=55;
[var1,var2]=[var2,var1];
console.log(`The value of var1 is ${var1} and the value of var2 is ${var2}`);