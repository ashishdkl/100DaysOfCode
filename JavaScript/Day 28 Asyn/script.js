console.log("Asyn Function");
async function firstAsync() {
  setTimeout(() => {
    console.log("Inside async function");
  }, 2000);
}
firstAsync();

//featch API.

async function getData() {
  let response =await  fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data= await response.json(); // convert api response into javascript object/data
  console.log(data);
}
getData();
