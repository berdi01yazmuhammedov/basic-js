const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    return this.process(message, key, "encrypt");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    return this.process(encryptedMessage, key, "decrypt");
  }

  process(input, key, mode) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const keyUpper = key.toUpperCase();
    const inputUpper = input.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < inputUpper.length; i++) {
      const char = inputUpper[i];
      if (alphabet.includes(char)) {
        const charIndex = alphabet.indexOf(char);
        const keyCharIndex = alphabet.indexOf(keyUpper[keyIndex % keyUpper.length]);

        let newCharIndex;
        if (mode === "encrypt") {
          newCharIndex = (charIndex + keyCharIndex) % alphabet.length;
        } else if (mode === "decrypt") {
          newCharIndex = (charIndex - keyCharIndex + alphabet.length) % alphabet.length;
        }

        result += alphabet[newCharIndex];
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
