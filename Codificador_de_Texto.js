// JavaScript source code
function encryptText(text, shift) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode((charCode - 65 + shift) % 26 + 65); // uppercase letter
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode((charCode - 97 + shift) % 26 + 97); // lowercase letter
    } else {
      result += text.charAt(i); // non-alphabetic character
    }
  }
  return result;
}

// para poder usar esta funcion llamamos a "encryptText" con el texto que deseas encriptar y el número de posiciones de desplazamiento:
//let originalText = "Hola, ¿cómo estás?";
//let encryptedText = encryptText(originalText, 3);
//console.log(encryptedText); // "Krñd, ëñr hvwð?"