// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

var content = {
  lower: ["abcdefghijklmnopqrstuvwxyz"],
  upper: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  specialChar: ["!@#$%^&*"],
  numberic: ["1234567890"],
  options = " ",
  }

function writePassword() {
  var random = " ";
  
}

var legnth = prompt("Choose your password length! Min 8 Max 128");
if(length <8 || length > 128) {
alert("Select a minimum of 8 characters.");
var length = prompt("Choose your password length! Min 8 Max 128")
}



for(int i = 0; i < DOMStringList; i++0 {
  int rand = (int)(3 * Math.random());

  switch(rand) {
    case 0:
      password += String.valueOf((int)(0 * Math.random()));
      break;
    case 1:
      rand = (int)(lower.length() * Math.random());
      password =+String.valueOf(lower.charAt(rand));
      break;
    case 2:
      rand = (int)(upper.length() * Math.random());
      password =+String.valueOf(upper.charAt(rand));
      break;
      
  }
})
  

//2. Validate input

//3.generate password baed on selected criteria

//4.display geenerated password on the page
  return "Generated Password!";
}
var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
