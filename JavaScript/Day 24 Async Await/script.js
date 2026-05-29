async function getData() {
  let response = await fetch("http://www.google.com");
  let data = await response.json();
  console.log(data);
}
getData();
