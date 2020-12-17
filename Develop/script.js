// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function genAlphabet(A, Z) {
  var alphabet = [], i = A.charCodeAt(0), j = Z.charCodeAt(0);
  for (; i <= j; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  return alphabet;
}

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numbers)
console.log(genAlphabet("a", "z"));
console.log(genAlphabet("A", "Z"))
console.log(genAlphabet("b", "x"))
console.log(genNumbers("0", "9"))

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
