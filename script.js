// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  const options = {}
  options.length = prompt("How many Characters from 10-64?");
  options.lowercase = confirm("Include Lowercase Characters?");
  options.uppercase = confirm("Include Uppercase Characters?");
  options.numeric = confirm("Include Numeric Characters?");
  options.special = confirm("Include Special Characters?");
return options;


}
  
  

// Function for getting a random element from an array
 // function getRandom(arr) {
 /* let randomPassword = "";
  for (let i = 0; i <= passLength; i++) {
    randomPassword += Math.floor(Math.random()*bigArray.length); }
  } */ 
    




// Function to generate password with user input
function generatePassword(){
  let bigArray = "";
  let randomPassword = "";
   
  const passwordOptions = getPasswordOptions();
  if(passwordOptions.lowercase) {
    bigArray += lowerCasedCharacters.join("");
  }
  if(passwordOptions.uppercase) {
    bigArray += upperCasedCharacters.join("");
  }
  if(passwordOptions.special) {
    bigArray += specialCharacters.join("");
  }
  if(passwordOptions.numeric) {
    bigArray += numericCharacters.join("");
    
  }

   const passLength = passwordOptions.length;

  for (let i = 0; i < passLength; i++) {
    randomPassword += bigArray[Math.floor(Math.random()*bigArray.length)];
  
   
  } 
  return randomPassword;
}




// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password; 
} 

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


