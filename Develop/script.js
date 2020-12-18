// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var pwChars = genPasswordChoices()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // var charLimit = prompt("Please choose amount of characters for password.")
  // if char is less than 8 chars
  // if (charLimit < 8) {
  // alert("Password needs minimum of 8 characters.")
  // }
  
  // // if char is greater than 128
  // else if (charLimit > 128) {
  // alert("Password has maximum of 128 characters.")
  // } 

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
function genPasswordChoices() {
  var storeChoices = []

  // check to see if user wants upper case letters
  var lettersUp = confirm("Do you want upper case letters in your password?")
  // if yes, use this variable
  if (lettersUp === true) {
    var alphabetUpper = genAlphabet("A", "Z")
    // push uppercase alphabet onto storeChoices array
    for (i = 0; i < alphabetUpper.length; i++) {
    storeChoices.push(alphabetUpper[i])
    } 
  } 

  // check to see if user wants lower case letters
  var lettersLow = confirm("Do you want lower case letters in your password?")
  //  if yes, use this variable
  if (lettersLow === true) {
    var alphabetLower = genAlphabet("a", "z")
    // push lowercase alphabet onto storeChoices array
    for (i = 0; i < alphabetLower.length; i++) {
    storeChoices.push(alphabetLower[i])
    } 
  }
     
  // check to see if user wants numbers
  var num = confirm("Do you want numbers in your password?")
  //  if yes, use this variable
  if (num === true) {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // push numbers onto storeChoices array
    for (i = 0; i < numbers.length; i++) {
    storeChoices.push(numbers[i])
    } 
  }

  // check to see if user wants special characters
  var sChar = confirm("Do you want special characters in your password?")
  //  if yes, use this variable
  if (num === true) {
    var str = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    var special = str.split("")
    // push special characters onto storeChoices array
    for (i = 0; i < special.length; i++) {
    storeChoices.push(special[i])
    } 
  }
}
// console.log(genPasswordChoices(storeChoices))
function generatePassword() {
  


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

