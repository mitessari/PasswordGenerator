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

//var buildArray = numericCharacters.concat(lowerCasedCharacters,upperCasedCharacters,specialCharacters);
//console.log(buildArray);

// Function to prompt user for password options
function getPasswordOptions() {
  const options = []
  options.length = prompt("How many Characters from 10-64?");
  options.lowercase = confirm("Include Lowercase Characters?");
  options.Uppercase = confirm("Include Uppercase Characters?");
  options.Numeric = confirm("Include Numeric Characters?");
  options.special = confirm("Include Special Characters?");
return options;
}
  
  

// Function for getting a random element from an array
 /* function getRandom(arr) {
  let randomPassword = "";
  for (let i = 0; i <= passLength; i++) {
    randomPassword += Math.floor(Math.random()*bigArray.length); }
  } */
    


  
  
  




//let bigArray = [];
// Function to generate password with user input
function generatePassword(){
  let bigArray = "";
  randomPassword = "";
  passLength = generatePassword.length;
  const passwordOptions = getPasswordOptions();
  if(passwordOptions.lowercase) {
    bigArray = bigArray.concat(lowerCasedCharacters);
  }
  if(passwordOptions.Uppercase) {
    bigArray = bigArray.concat(upperCasedCharacters);
  }
  if(passwordOptions.special) {
    bigArray = bigArray.concat(specialCharacters);
  }
  if(passwordOptions.Numeric) {
    bigArray = bigArray.concat(numericCharacters);

  }


  for (let i = 0; i <= passLength; i++) {
    randomPassword += bigArray[Math.floor(Math.random()*bigArray.length)];
    
  } 



  console.log(randomPassword);
}

/*
let practicePassword = getRandom();
  for (let i = 0; i < options.length; i++) {
    
    practicePassword += getRandom
    
  



  return practicePassword;

  }*/



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


//bigArray[Math.floor(Math.random()*bigArray.length)]