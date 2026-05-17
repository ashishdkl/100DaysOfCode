console.log("Switch CAse");
// Switch is used when you have many conditions checking the same variable. It is cleaner than many if else chain.

//In a switch statement, the value written after each case is compared with the variable inside switch().

let day = 1;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("!Matched.");
}
// Always use break after each case.

// Example of break missing condition.
let englishDay = 4;
switch (day) {
  case 1:
    console.log("Sunday");

  case 2:
    console.log("Monday");

  case 3:
    console.log("Tuesday");

  case 4:
    console.log("Wednesday");

  case 5:
    console.log("Thursday");

  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("!Matched.");
}
