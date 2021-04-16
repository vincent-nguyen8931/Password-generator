// Assignment Code
var generateBtn = document.querySelector("#generate");

$("#closeModal1").click(function () {
  $("#charAmountTooLow").removeClass("is-active")
})

$("#closeModal2").click(function () {
$("#charAmountTooHigh").removeClass("is-active")
})

// Write password to the #password input
function writePassword() {
  var charAmount = checkInput()
  if (charAmount != null) {
    var pwChars = genPasswordChoices()
    var password = generatePassword(pwChars, charAmount);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Generate alphabet by assigning the first and last characters of the alphabet to different variables. These variables use charCodeAt(0) to set their integer based on the UTF-16 code index. The for loop will iterate pushing each character of the alphabet onto the array as a string until it adds Z.
function genAlphabet(A, Z) {
  var alphabet = [], i = A.charCodeAt(0), j = Z.charCodeAt(0);
  for (; i <= j; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  return alphabet;
}

// Generates the characters that are available for use in the password generator. User can choose which character types they want to use via confirm popups.
function genPasswordChoices() {
  // array to hold user's choice of password character types 
  var storeChoices = []
  // check to see if user wants upper case letters
  var lettersUp = $("input[name='yesUpperAlphabet']:checked").val();
  // check to see if user wants lower case letters
  var lettersLow = $("input[name='yesLowerAlphabet']:checked").val();
  // check to see if user wants numbers
  var num = $("input[name='yesNumber']:checked").val();
  // check to see if user wants special characters
  var sChar = $("input[name='yesSymbols']:checked").val();
  //  checks to ensure at least one character type is chosen.
  while (lettersUp == false &&
    lettersLow == false &&
    num == false &&
    sChar == false) {
    alert("Please choose a character type for your password.")
     // check to see if user wants upper case letters
    var lettersUp = $("input[name='yesUpperAlphabet']:checked").val();
    // check to see if user wants lower case letters
    var lettersLow = $("input[name='yesLowerAlphabet']:checked").val();
    // check to see if user wants numbers
    var num = $("input[name='yesNumber']:checked").val();
    // check to see if user wants special characters
    var sChar = $("input[name='yesSymbols']:checked").val();
  }
  // if lettersUp is true, use this variable
  if (lettersUp === "checked") {
    var alphabetUpper = genAlphabet("A", "Z")
    // push uppercase alphabet onto storeChoices array
    for (i = 0; i < alphabetUpper.length; i++) {
      storeChoices.push(alphabetUpper[i])
    }
  }

  //  if lettersLow is true, use this variable
  if (lettersLow === "checked") {
    var alphabetLower = genAlphabet("a", "z")
    // push lowercase alphabet onto storeChoices array
    for (i = 0; i < alphabetLower.length; i++) {
      storeChoices.push(alphabetLower[i])
    }
  }

  //  if num is true, use this variable
  if (num === "checked") {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // push numbers onto storeChoices array
    for (i = 0; i < numbers.length; i++) {
      storeChoices.push(numbers[i])
    }
  }

  //  if sChar is true, use this variable
  if (sChar === "checked") {
    var str = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    var special = str.split("")
    // push special characters onto storeChoices array
    for (i = 0; i < special.length; i++) {
      storeChoices.push(special[i])
    }
  } return storeChoices
}

// Checks the user's input for proper character length. 
function checkInput() {
  var charLimit = $("#userInput").val()
  var charSplit = charLimit.split("")
  var numCheck = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  for (i = 0; i < charSplit.length; i++) {
    // Checks for proper numerical values
    if (numCheck.includes(charSplit[i]) !== true) {
      alert("Please use a number between 8 and 128.")
      return null
    } else {

      while (charLimit < 8 || charLimit > 128) {

        // if characters are less than 8
        if (charLimit < 8) {
          $("#charAmountTooLow").addClass("is-active");
        }
     
        // if characters are greater than 128
        if (charLimit > 128) {
          $("#charAmountTooHigh").addClass("is-active");
        }
     
        // repeats checking for proper user's input
        return null
      }
    }
  } return charLimit
}

// Use characters selected for password and amount of characters desired to make the password. 
function generatePassword(pwChars, charAmount) {
  var pwGenConvert = []
  // choose random number based on characters selected and amount of characters chosen
  for (i = 0; i < charAmount; i++) {
    indexGen = Math.floor(Math.random(pwChars) * pwChars.length)
    // pushes character from pwChars based on index generated by indexGen into pwGenConvert
    pwGenConvert.push(pwChars[indexGen])
    // Takes the pwGenConvert array, removes the commas, and places the resulting elements into password variable.
    password = pwGenConvert.join("")
  }
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

