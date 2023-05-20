// Assignment code here

function generatePassword() {

    //variables for password criteria 
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var spclchars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    //stores possible characters
    var possibleoutputs = "";
  
  
    //prompts user to choose a password length between 8 and 128. Alerts invalid if condition is not met
  var passwordlength = prompt("Choose a length of at least 8 characters and no more than 128 characters:");
  if (isNaN(passwordlength) || passwordlength < 8 || passwordlength > 128) {
    alert("Please enter a valid length between 8 and 128 characters.");
  } else if  (isNaN(passwordlength)) {
    passwordlength = prompt("Please enter a valid number.");
  } else {
    alert("The length of your password will be " + passwordlength + " characters long.");
  }
  
  // prompts user to include uppercase letters and appends the uppercase letters to the possibleoutputs variable
  var includeUppercase = confirm("Will your password include uppercase letters?");
  if (includeUppercase) {
    possibleoutputs += uppercase;
    alert("Your password will include an uppercase letter");
  }
   
  // prompts user to include lowercase letters and appends the lowercase letters to the possibleoutputs variable
  var includeLowercase = confirm("Will your password include lowercase letters?");
    if (includeLowercase) {
      possibleoutputs += lowercase;
      alert("Your password will include lowercase letters.");
    }
    
    // prompts user to include special characters and appends the special characters to the possibleoutputs variable
    var includeSpecialCharacters = confirm("Will your password include special characters?");
    if (includeSpecialCharacters) {
      possibleoutputs += spclchars;
      alert("Your password will include special characters.");
    }
    
    
    // prompts user to include numbers and appends numbers to the possibleoutputs variable
    var includeNumbers = confirm("Will your password include numbers?");
      if (includeNumbers) {
        possibleoutputs += numbers;
        alert("Your password will include numbers.");
      }
     
  
      // Checks if password criteria was selected, if criteria is not met it prompts user to
     if (includeUppercase === false && includeLowercase === false && includeSpecialCharacters === false && includeNumbers === false) {
      return "You must select the recommended criteria for your password.";
    }
    
   
    // for loop that generates password for chosen length and criteria
    var password = "";
    for (var i = 0; i < passwordlength; i++) {
      var randomIndex = Math.floor(Math.random() * possibleoutputs.length);
      password += possibleoutputs[randomIndex];
    }
  
    return password;
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
  