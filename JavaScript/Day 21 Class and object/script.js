console.log("Today we will learn about class and objects:");
// we already know about the objects and how to use the objects let't have an exapmple of objects
let student = {
  name: "Ashish Dhakal",
  level: "Bachelor",
  major: "Computer",
  degree: "Bachelor Degeree",
};
console.log(student);
// let's acess individual data.
console.log(student.name);
console.log(student.level);
console.log(student.major);
console.log(student.degree);

// class : a class is like a blueprint / template for creating object. it's work as a blueprint for object. class doesn't occupy memory.
class FirstClass {
  firstFunctionOfClass() { // we don't use function keyword while creating method inside the class.
    console.log("My name is");
  }

  secondFunctionOfClass(name,age,address,subject){
    console.log(`My name is ${name}, i am ${age} years old i live in ${address}, and my major subject is ${subject}`);
  }
}
let obj = new FirstClass(); // this is how we create the objects, in this case the name of the object is obj.     (obj)
obj.firstFunctionOfClass();
obj.secondFunctionOfClass("Ashish",20,"Bharatpur","JavaScript");


// What is a Constructor.
// A constructor is a special type of method inside the class , it's runs automatically when object is created. in other programming language like java and c++ the constructor name is same as class name but in JS there is no any cutome name of the constructor we only say constructor(); let's have an example.

class SecondClass{
  constructor(name){
    console.log("Hello it's me",name);
  }
}
let obj2=new SecondClass("Ashish"); // this is how we pass the parameter.