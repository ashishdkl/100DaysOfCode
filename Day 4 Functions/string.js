console.log("In this chapter we are learning about string methods.");
let realName = "Ashish";
console.log(realName.toUpperCase());
console.log(realName.toLocaleLowerCase());
console.log(realName.length);
console.log(realName[0]);
console.log(realName[5]);
console.log(realName[6]); // output will be undefined because we don't have anything in index 6.
console.log(realName.replace("A", 4));
console.log(realName.slice(1, 4)); // this will slice from 1 to 3 ignore 4 and others.
console.log(realName.slice(2)); // we can use only one numbe too, this will ignore 0,1 and give string after 2

// One of the best way to concate variable and string
let name1 = "Ram";
let name2 = "Hari";
console.log(
  `We have two people ${name1} and ${name2} both are friend but ${name1} loves ${name2} most.`,
);
