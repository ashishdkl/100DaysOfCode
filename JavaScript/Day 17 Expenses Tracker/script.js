let income = document.querySelector("#income");
let expenses = document.querySelector("#expenses");
let loan = document.querySelector("#loan");
let addAmount = document.querySelector("#addAmount");
let firstArray = [];
let details = document.querySelector(".details");

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

  details.innerHTML = "";
  firstArray.forEach((item) => {
    details.innerHTML += `
<div> 
<p> Balance: ${item.balance} </p>
<p> Income: ${item.income}  </p>
<p> Expenses: ${item.expenses} </p>
<p> Loan: ${item.loan}</p>
</div>

`;
  });
});

// Add transaction
let transactionName = document.querySelector("#name");
let amount = document.querySelector("#amount");
let histroy = document.querySelector(".history");
let transactionArray = [];
let option = document.querySelector("#select");
let btn = document.querySelector("#btn");
let incomeTransaction;
let totalIncome;
let totalExpenses;
let expensesTransaction;

btn.addEventListener("click", () => {
  let trName = transactionName.value;
  let amt = amount.value;
  let opt = option.value;
  if (trName === "" || amt === "") {
    alert("Input can't be Empty.");
    return;
  }
  let secondObj = {
    name: trName,
    amount: Number(amt),
    option: opt,
  };
  transactionArray.push(secondObj);
  histroy.innerHTML = "";
  transactionArray.forEach((item) => {
    histroy.innerHTML += `
<div>
  <p>Nam: ${item.name} </p>
  <p>Amount:${item.amount} </p>
  <p>Type:${item.option} </p>
</div>`;
  });
  incomeTransaction = transactionArray.filter(
    (item) => item.option === "income",
  );
  totalIncome = incomeTransaction.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);
  expensesTransaction = transactionArray.filter(
    (item) => item.option === "expenses",
  );
  totalExpenses = expensesTransaction.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);
  let currentBalance = totalIncome - totalExpenses;
  details.innerHTML = `
  <h3>Total Income: ${totalIncome}</h3>
  <h3>Total Expenses: ${totalExpenses}</h3>
  <h3>Balance: ${currentBalance}</h3>
`;
});
