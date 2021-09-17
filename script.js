// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowAlpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var capAlpha= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sym=["!","@","#","$","%","^","&","*","(",")", "`","?","/"];




function generatePassword() {
  console.log( "You clicked the Button");

  var choices =[];  
  var passLength = window.prompt("How many characters would you like your password?", 10);
  
  if(!passLength) {
    return;
  }

  else if (passLength<8 || passLength>128 || isNaN(passLength)) {
    alert("Please enter a number between 8-128");
  }
    
  else {
      var capital = window.confirm("Do you want Capital Letters?");
      var lower = window.confirm("Do you want Lowercase Letters?");
      var numeric = window.confirm("Do you want numeric characters?");
      var symbol = window.confirm("Do you want special characters?");
  }

  if(!capital && !lower && !numeric && !symbol) {
    alert("Please make at least one selection.");
  }

   else if(capital) {
    choices= choices.concat(capAlpha);
  }

   else if(lower) {
    choices = choices.concat(lowAlpha);
  }

  else if(numeric) {
    choices = choices.concat(num);
  }

  else if(symbol){
    choices = choices.concat(sym);
  }

      
    var pass= "";

    for (var i = 0; i < passLength; i++) {
      var passOptions = choices[Math.floor(Math.random()*choices.length)];
      pass= pass.concat(passOptions);
    }


    return pass;
  }


// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
