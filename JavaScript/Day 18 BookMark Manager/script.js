let title = document.querySelector("#title");
let url = document.querySelector("#url");
let details = document.querySelector("#details");
let type = document.querySelector("#type");
let add = document.querySelector("#add");
let bookMark = [];
let display = document.querySelector(".linkDisplay");

add.addEventListener("click", (event) => {
  event.preventDefault();
  let titleSub = title.value;
  let urlSub = url.value;
  let detailsSub = details.value;
  let typeSub = type.value;

  let obj = {
    title: titleSub,
    url: urlSub,
    details: detailsSub,
    type: typeSub,
  };
  bookMark.push(obj);
  display.innerHTML = "";
  bookMark.forEach((item) => {
    display.innerHTML += `
<div>
    <p>${item.title}</p>
    <p>${item.url}</p>
    <p>${item.details}</p>
    <p>${item.type}</p>
</div>
`;
  });
});
