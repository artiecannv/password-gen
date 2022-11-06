function generatePassword() {
  //Logs to the console, to show the button is working
  console.log("Button Test!")

  // Variables that will be used in the function
  let length = 0;
  let low = false;
  let upper = false;
  let numeric = false;
  let special = false;


  //Storage of all possible characters
  let validCrit = [];
  const lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const upChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const specChar = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", ":", "|", "}", "~"];
  let genPass = "";

  //Storage and Access of Chosen Characters
  function createPassword() {
    genPass = "";
    for (let index = 0; index < length; index++) {

      // Create way to generate random number to reference valid characters
      let x = Math.floor(Math.random() * validCrit.length);
      genPass += validCrit[x];
      console.log(genPass);
    }
  }

  // Validate user prompts for Acceptable Criteria
  do {

    length = prompt("Password length can be between 8 and 128 characters", 8);
    length = Number(length);

  } while (length < 8 || length > 128 || isNaN(length));

  let charCrit = false;

  /* Checking to see if at least one of the character criteria options are being selected
   and adding to the validCrit Array */
  while (!charCrit) {

    if (!charCrit) {
      alert("Make sure that the OK button is selected for at least one of the following options.");
    }

    low = confirm("Include Lowercase Characters?");
    upper = confirm("Include Uppercase Characters?");
    numeric = confirm("Include Numeric Characters? (0-9)");
    special = confirm("Include Special Characters? (!<>@?)");
    console.log('testing loop');

    if (low) {
      charCrit = true;
      validCrit = validCrit.concat(lowChar);
      console.log(validCrit);
    }

    if (upper) {
      charCrit = true;
      validCrit = validCrit.concat(upChar);
      console.log(validCrit);
    }

    if (numeric) {
      charCrit = true;
      validCrit = validCrit.concat(numChar);
      console.log(validCrit);
    }

    if (special) {
      charCrit = true;
      validCrit = validCrit.concat(specChar);
      console.log(validCrit);
    }

  }
console.log(validCrit)

  createPassword();

  // Validating that password hits all criteria selected
  // Use Includes Method

  let validLow = false
  let validUpper = false
  let validNum = false
  let validSpec = false

  for (let index = 0; index < genPass.length; index++) {
    console.log(genPass[index]);

    if (lowChar.includes(genPass[index])) {
      validLow = true;
    }

    if (upChar.includes(genPass[index])) {
      validUpper = true;
    }

    if (numChar.includes(genPass[index])) {
      validNum = true;
    }

    if (specChar.includes(genPass[index])) {
      validSpec = true;
    }

  }
console.log(validLow, validUpper, validNum, validSpec)

if ((!validLow && low) || (!validUpper && upper) || (!validNum && numeric) || (!validSpec && special)) {
  createPassword();
}

 
  //Return the validated new password
  return genPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


