// Assignment code here

/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

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
    /* console.log(length);
     console.log(typeof(length)); */

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

  createPassword();

  // Validating that password hits all criteria selected
  // Use Includes Method

  let validLow = false
  let validUpper = false
  let validNum = false
  let validSpec = false

  for (let index = 0; index < genPass.length; index++) {
    console.log(genPass[index]);

    if (low) {

      validLow = lowChar.includes(genPass[index]);

    }

    if (upper) {

      validUpper = upChar.includes(genPass[index]);

    }

    if (numeric) {

      validNum = numChar.includes(genPass[index]);

    }

    if (special) {

      validSpec = specChar.includes(genPass[index]);

    }

  }
/*
  let rerunCrit = false;

  let counter = 0

  do {

    counter++

    if (low && !validLow) {
      createPassword();
    } else if (upper && !validUpper) {
      createPassword();
    } else if (numeric && !validNum) {
      createPassword();
    } else if (special && validSpec) {
      createPassword();
    } else {
      break;
      rerunCrit = true;
  
    }

    console.log(counter)

  } while (!rerunCrit || counter < 10);
*/
  

   


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


