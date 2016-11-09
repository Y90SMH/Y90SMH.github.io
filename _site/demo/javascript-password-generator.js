(function(){var elementPhoneticPassword=document.getElementById("phoneticPassword");var elementDisplayPhonetic=document.getElementById("displayPhonetic");var elementGeneratePassword=document.getElementById("generatePassword");var elementGeneratedPassword=document.getElementById("generatedPassword");var elementPasswordLength=document.getElementById("passwordLength");var elementMeter = document.getElementById('generatedPasswordStrengthMeter');elementDisplayPhonetic.addEventListener('change',function(){displayPhonetic(elementPhoneticPassword,elementDisplayPhonetic.checked,elementGeneratedPassword.value);});elementGeneratePassword.addEventListener('click',function(){assignPassword(elementGeneratedPassword,elementMeter,elementPhoneticPassword,elementPasswordLength.value,elementDisplayPhonetic.checked);});elementPasswordLength.addEventListener('input',function(){assignPassword(elementGeneratedPassword,elementMeter,elementPhoneticPassword,elementPasswordLength.value,elementDisplayPhonetic.checked);});})();function assignPassword(elementGeneratedPassword,elementMeter,elementPhoneticPassword,length,showPhonetic){var password=generatePassword(length);elementGeneratedPassword.value=password;elementMeter.value = zxcvbn(password).score;displayPhonetic(elementPhoneticPassword,showPhonetic,password);}function displayPhonetic(elementPhoneticPassword,show,password){elementPhoneticPassword.innerHTML=(show)?generatePhonetic(password):"";}function generatePassword(length){var response="";var alphanumeric="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";length=(isNaN(parseInt(length,10)))?24:parseInt(length,10);for(var i=0;i<length;i++){response+=alphanumeric.charAt(Math.floor(Math.random()*alphanumeric.length));}return response;}function generatePhonetic(password){var response="";for(i=0;i<password.length;i++){switch(password[i]){case"A":response+="ALFA"+" ";break;case"B":response+="BRAVO"+" ";break;case"C":response+="CHARLIE"+" ";break;case"D":response+="DELTA"+" ";break;case"E":response+="ECHO"+" ";break;case"F":response+="FOXTROT"+" ";break;case"G":response+="GOLF"+" ";break;case"H":response+="HOTEL"+" ";break;case"I":response+="INDIA"+" ";break;case"J":response+="JULIET"+" ";break;case"K":response+="KILO"+" ";break;case"L":response+="LIMA"+" ";break;case"M":response+="MIKE"+" ";break;case"N":response+="NOVEMBER"+" ";break;case"O":response+="OSCAR"+" ";break;case"P":response+="PAPA"+" ";break;case"Q":response+="QUEBEC"+" ";break;case"R":response+="ROMEO"+" ";break;case"S":response+="SIERRA"+" ";break;case"T":response+="TANGO"+" ";break;case"U":response+="UNIFORM"+" ";break;case"V":response+="VICTOR"+" ";break;case"W":response+="WHISKEY"+" ";break;case"X":response+="X-RAY"+" ";break;case"Y":response+="YANKEE"+" ";break;case"Z":response+="ZULU"+" ";break;case"a":response+="alfa"+" ";break;case"b":response+="bravo"+" ";break;case"c":response+="charlie"+" ";break;case"d":response+="delta"+" ";break;case"e":response+="echo"+" ";break;case"f":response+="foxtrot"+" ";break;case"g":response+="golf"+" ";break;case"h":response+="hotel"+" ";break;case"i":response+="india"+" ";break;case"j":response+="juliet"+" ";break;case"k":response+="kilo"+" ";break;case"l":response+="lima"+" ";break;case"m":response+="mike"+" ";break;case"n":response+="november"+" ";break;case"o":response+="oscar"+" ";break;case"p":response+="papa"+" ";break;case"q":response+="quebec"+" ";break;case"r":response+="romeo"+" ";break;case"s":response+="sierra"+" ";break;case"t":response+="tango"+" ";break;case"u":response+="uniform"+" ";break;case"v":response+="victor"+" ";break;case"w":response+="whiskey"+" ";break;case"x":response+="x-ray"+" ";break;case"y":response+="yankee"+" ";break;case"z":response+="zulu"+" ";break;default:response+=password[i]+" ";break;}}return response;}