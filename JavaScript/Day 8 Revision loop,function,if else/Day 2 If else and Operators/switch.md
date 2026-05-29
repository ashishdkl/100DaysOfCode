# Switch Case in JavaScript

Switch is used when we have many conditions checking the same variable. It is cleaner than many if else conditions.

In switch case, the value after each case is compared with the value inside switch().

Example:
switch(day){
   case 1:
      console.log("Sunday");
      break;
}

break is important because it stops the execution after matching one case.

If break is missing, JavaScript continues executing the next cases even if they don't match. This is called fall through behavior.

"default" works like else condition. It runs when no case matches.
for example.
  {.
  .
  .
  .
  other case.
    case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("This is default,no any match found.");
}

Important points:
- cleaner than many if else.
- case checks values one by one.
- break stops extra execution.
- default runs if nothing matches.