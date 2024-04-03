// RANDOM PASSWORD GENERATOR

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    // Define character sets
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-={}[]|:;<>,.?/~`";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return "(password length must be at least 1)";
    }
    
    if(allowedChars.length === 0){ 
        return "(at least 1 set of characters needs to be selected)";
    }

    for(let i = 0; i < length; i++){
        // Generate a random index within the range of allowed characters
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

// Event listener for the button
document.getElementById("generate").addEventListener("click", function() {
    const passwordLength = 12;
    const includeLowercase = true;
    const includeUppercase = true;
    const includeNumbers = true; 
    const includeSymbols = true;

    const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    
    document.getElementById("password").textContent = password;
});
