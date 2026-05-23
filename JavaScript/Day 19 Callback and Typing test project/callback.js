function greet(name, callback) {
  console.log("Hello ", name);
  callback();
}

function bye() {
  console.log("bye");
}

greet("Ashish", bye);
