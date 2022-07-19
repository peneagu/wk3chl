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

  //prompt//
  var legnth = prompt("Choose your password length! Min 8 Max 128");
  if(length <8 || length > 128) {
  alert("Select a minimum of 8 characters.");
  var length = prompt("Choose your password length! Min 8 Max 128");  
}

  // selected info
  if (upper && lower && specialChar && numberic|| 
      upper !=true && lower && specialChar && numberic||
      upper && lower !=true && specialChar && numberic|| 
      upper && lower && specialChar !=true && numberic |
      upper && lower && specialChar && numberic != true||
      upper !=true && lower !=true && specialChar !=true && numberic !=true||
      upper !=true && lower !=true && specialChar !=true && numberic||
      upper && lower !=true && specialChar !=true && numberic !=true||
      upper !=true && lower && specialChar !=true && numberic !=true||
      upper !=true && lower !=true && specialChar && numberic !=true||
      upper !=true && lower !=true && specialChar && numberic ||
      upper !=true && lower && specialChar !=true && numberic ||
      upper !=true && lower && specialChar && numberic !=true||
      upper && lower !=true && specialChar !=true && numberic||
      upper && lower !=true && specialChar && numberic !=true||
      upper  && lower && specialChar !=true && numberic !=true||
  )
      alert("Select a minimum of 3 variables for your new password.")
      var lower = confirm("Do you want to use lowercase letters?")
      var upper = confirm("Do you want to use UPPERCASE letters?")
      var specialChar = confirm ("Do you want to use $pec!@l Ch@r@acter$?")
      var numberic = confirm ("Do you want to use any numbers? 0-9")

      if(upper && lower && specialChar && numberic){
        content.options +=content.upper + content.lower + content.specialChar + content.numberic;
      }
      else if(!upper && lower && specialChar && numberic){
        content.options += + content.lower + content.specialChar + content.numberic;
      }
      else if(upper && !lower && specialChar && numberic){
        content.options +=content.upper + content.specialChar + content.numberic;
      }
      else if(upper && lower && !specialChar && numberic){
        content.options +=content.upper + content.lower + content.numberic;
      }
      else if(upper && lower && specialChar && !numberic){
        content.options +=content.upper + content.lower + content.specialChar;
      }

    


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
