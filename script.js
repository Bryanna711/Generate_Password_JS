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
  else if (passLength<8 || passLength>128) {
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
            
            else{
              for (var i=0, i=passLength; i++;){
              randomPass=randompass + charChoices.charAt(Math.floor(Math,random() * Math.floor(charChoices.length -1)));
            }
          }
        }
      }
    }
  }

  var charChoices=[
    {"lower":["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]},
    {"capital": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]},
    {"numeric":[0,1,2,3,4,5,6,7,8,9]},
    {"symbol":["!","@","#","$","%","^","&","*","(",")", "`","?","/","+","-"]},
  ]
 
var randomPass=("")

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
