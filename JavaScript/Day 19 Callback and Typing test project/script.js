function display() {
  console.log("Hello i am inside display function");
}
setTimeout(display, 2000); // hello function will execute after 2 sec, we create a 2 sec timeout.
console.log("This will execute before display() function. let's see");

// We can also use arrow funciton insted of normal functions.let's have an example.
setTimeout(() => {
  console.log(
    "Now i am using arrow fucntion, we can use arrow functions to make code short.",
  );
}, 3000);
console.log("now this will also execute before this two functions.");
