console.log("Hello Everyone");

let balance = document.querySelector("#balance");
let income = document.querySelector("#income");
let expenses = document.querySelector("#expenses");
let loan = document.querySelector("#loan");
let addAmount = document.querySelector("#addAmount");
let firstArray = [];
addAmount.addEventListener("click", () => {
  let bal = balance.value;
  let inco = income.value;
  let expen = expenses.value;
  let loa = loan.value;

  if (bal === "" || inco === "" || expen === "" || loa === "") {
    alert("Input Can't be Empty.");
    return;
  }
  let newObj = {
    balance: Number(bal),
    income: Number(inco),
    expenses: Number(expen),
    loan: Number(loa),
  };
  firstArray.push(newObj);
  console.log(firstArray);
  let details = document.querySelector(".details");
  details.innerHTML = firstArray;
});

// Add transaction
let transactionName = document.querySelector("#name");
let amount = document.querySelector("#amount");
let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  let trName = transactionName.value;
  let amt = amount.value;
  if (trName === "" || amt === "") {
    alert("Input can't be Empty.");
    return;
  }
  console.log("Clicked");
});
