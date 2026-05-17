console.dir(document.title);
console.dir(document.URL);
console.log(document.body);

// Selecting elements using selectors

//getElementById   select one item by id.
let idElement= document.getElementById("card");
console.log(idElement);

// getElementsByClassName select all elements with the same class name (HTML Collection).
let classElement=document.getElementsByClassName("container");
console.log(classElement);

// getElementsByTagName select all tag's.
let tagName= document.getElementsByTagName("p");
console.log(tagName);
// but we don't use all of this selectors, we can use them there is no any problems on this selectors but using querySelector is more easy than this so.

// querySelector.

let newSelectorClass=document.querySelector(".container");  //Selecting Class
let newSelectorId=document.querySelector("#card");  //Selecting Id
console.log(newSelectorClass);
console.log(newSelectorId);

// querySelectorAll


// querySelector() → first matching element only
// Example: document.querySelector(".box") → returns first .box element

// querySelectorAll() → all matching elements (NodeList)
// Example: document.querySelectorAll(".box") → returns all .box elements