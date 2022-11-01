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


//Password needs to be between 8 and 128 characters
//User needs the ability to choose 1-4 types of characters
//Needs number generator
//Needs to validate that their criteria has been met at least once

function generatePassword() {
  //Logs to the console, to show the button is working
  console.log("Button Test!")

  // Variables that will be used in the function
  let length = prompt("Password length can be between 8 and 128 characters", 8);
  let low = confirm("Include Lowercase Characters?");
  let upper = confirm("Include Uppercase Characters?");
  let numeric = confirm("Include Numeric Characters? (0-9)");
  let special = confirm("Include Special Characters? (!<>@?)");


// TO DO - validate user prompts for acceptable criteria

// Need to check that the password is greater than 8 and less than 128 characters
// Need to confirm the user is using numbers
// If the Value is Invalid, reprompt the user (or cancel it)

// x >= 8 && x <= 128 && !isNaN(length)

// Use a while or do while loop

do {


  
} while ( length >= 8 && length <= 128 && !isNaN(length));

// TO DO - create way to store and/or access valid characters

// TO DO - create way to generate random number to reference valid characters

/* TO DO - store references to randomly selected valid characters
  AND/OR store randomly selected characters
*/

// TO DO - validate one of each user criteria used in new password

// TO DO - if not already, turn password into a string
// TO DO - save new password to variable

// TO DO - return the validated new password




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


