// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// password info
var content = {
  lower: ["abcdefghijklmnopqrstuvwxyz"],
  upper: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  specialChar: ["!@#$%^&*"],
  numberic: ["1234567890"],
  options: " ",
  }

function writePassword() {
  var random = " ";

  //prompt//
  var length = prompt("Choose your password length! Min 8 Max 128");
  if(length < 8 || length > 128) {
  alert("Select a minimum of 8 characters.");
  var length = prompt("Choose your password length! Min 8 Max 128");  
}
var lower = confirm("Do you want to use lowercase letters?");
var upper = confirm("Do you want to use UPPERCASE letters?");
var specialChar = confirm ("Do you want to use $pec!@l Ch@r@acter$?");
var numberic = confirm ("Do you want to use any numbers? 0-9");

  

      if(upper && lower && specialChar && numberic) {
        content.options += content.upper + content.lower + content.specialChar + content.numberic;
      }
      else if (!upper && lower && specialChar && numberic) {
        content.options += content.lower + content.specialChar + content.numberic;
      }
      else if (upper && !lower && specialChar && numberic) {
        content.options += content.upper + content.specialChar + content.numberic;
      }
      else if (upper && lower && !specialChar && numberic) {
        content.options += content.upper + content.lower + content.numberic;
      }
      else if (upper && lower && specialChar && !numberic) {
        content.options += content.upper + content.lower + content.specialChar;
      }

      for (var i = 0; i<length; i++){
        random += content.options.charAt(Math.floor(Math.random()*content.options.length));
      }
      password.value = random
}


// event listener
generateBtn.addEventListener("click", writePassword);
