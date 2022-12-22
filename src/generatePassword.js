const generatePassword = (length, includeObject) => {
  const characterObject = {
    lowercase: "qwertyuiopasdfghjklzxcvbnm",
    uppercase: "QWERTYUIOPASDFGHJKLZXCVBNM",
    numbers: "1234567890",
    symbols: "~!@#$%^&*()_+`-=.></?:;][{}|",
  };
  let includedCharacters = "";
  let password = "";
  if (includeObject.uppercase) {
    includedCharacters += characterObject.uppercase;
  }
  if (includeObject.lowercase) {
    includedCharacters += characterObject.lowercase;
  }
  if (includeObject.numbers) {
    includedCharacters += characterObject.numbers;
  }
  if (includeObject.symbols) {
    includedCharacters += characterObject.symbols;
  }
  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * includedCharacters.length);
    password += includedCharacters.substring(randomNumber, randomNumber + 1);
  }
  return password;
};

export default generatePassword;
