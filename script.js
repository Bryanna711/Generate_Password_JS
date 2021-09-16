// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log( "You clicked the Button");

  var passLength = window.prompt("How many characters would you like your password?", 10);
  
  if(!passLength) {
    return;
  }
  else{
    passLength = parseInt(passLength);
    if(isNaN(passLength)) {
      alert("You did not enter a number.")
  }
  else if (passLength<8 || passLenth>128) {
    alert("Please enter a number between 8-128")
  }
    
    else {
      var capital = window.confirm("Do you want Capital Letters?");

      if (!capital) {
        return;
      }

      else{
        var lower = window.confirm("Do you want Lowercase Letters?");

        if (!lower) {
          return
        }

        else{
          var numeric = window.confirm("Do you want numeric characters?");

          if(!numeric) {
            return
          }

          else{
            var symbol = window.confirm("Do you want special characters?")

            if(!symbol){
              return
            }
          }
        }
      }
    }
  }



  return "Generated PassWord Will Go Here"
}




// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
