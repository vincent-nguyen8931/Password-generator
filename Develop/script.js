// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Generate alphabet by assigning the first and last characters of the alphabet to different variables. The for loop will iterate pushing each character of the alphabet onto the array until it reaches Z.
function genAlphabet(A, Z) {
  var alphabet = [], i = A.charCodeAt(0), j = Z.charCodeAt(0);
  for (; i <= j; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  return alphabet;
}

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


var str = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var special = str.split("")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
