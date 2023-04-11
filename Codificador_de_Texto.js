function encrypt() {
  let originalText = document.getElementById("original-text").value;
  let shift = parseInt(document.getElementById("shift").value);
  let encryptedText = "";
  for (let i = 0; i < originalText.length; i++) {
    let charCode = originalText.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      encryptedText += String.fromCharCode((charCode - 65 + shift) % 26 + 65); // uppercase letter
    } else if (charCode >= 97 && charCode <= 122) {
      encryptedText += String.fromCharCode((charCode - 97 + shift) % 26 + 97); // lowercase letter
    } else {
      encryptedText += originalText.charAt(i); // non-alphabetic character
    }
  }
  document.getElementById("encrypted-text").value = encryptedText;
}

function decrypt() {
  let encryptedText = document.getElementById("encrypted-text").value;
  let shift = parseInt(document.getElementById("shift").value);
  let decryptedText = "";
  for (let i = 0; i < encryptedText.length; i++) {
    let charCode = encryptedText.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      decryptedText += String.fromCharCode((charCode - 65 - shift + 26) % 26 + 65); // uppercase letter
    } else if (charCode >= 97 && charCode <= 122) {
      decryptedText += String.fromCharCode((charCode - 97 - shift + 26) % 26 + 97); // lowercase letter
    } else {
      decryptedText += encryptedText.charAt(i); // non-alphabetic character
    }
  }
  document.getElementById("original-text").value = decryptedText;
}
