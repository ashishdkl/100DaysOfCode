let passwordInput = document.querySelector("#password");
let generator = document.querySelector("#generate");
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "0123456789";
let symbols = "!@#$%^&*()_+[]{}<>?";
let allChar = lowercase + uppercase + number + symbols;

generator.addEventListener("click", () => {
  password = "";
  for (let i = 0; i <= 12; i++) {
    let randomIndex = Math.floor(Math.random() * allChar.length);
    password = password + allChar[randomIndex];
    passwordInput.value = password;
  }
});
