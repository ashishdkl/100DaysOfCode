console.log("Asyn Function");
async function firstAsync() {
  setTimeout(() => {
    console.log("Inside async function");
  }, 2000);
}
firstAsync();

//featch API.

async function getData() {
  let response = fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(response);
}
getData();
