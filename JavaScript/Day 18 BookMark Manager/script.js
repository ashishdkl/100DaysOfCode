let title = document.querySelector("#title");
let url = document.querySelector("#url");
let details = document.querySelector("#details");
let type = document.querySelector("#type");
let add = document.querySelector("#add");
let bookMark = [];

add.addEventListener("click", () => {
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
});
