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
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
  regexp = /[a-z]/gi

  constructor(direct) {
    this.direct = direct;
  }

  encrypt(string, keyWord) {
    if (!string || !keyWord) throw new Error('Incorrect arguments!');

    let keyWordArray = [];
    let index = 0;

    for (let i = 0; i < string.length; i++) {    
        if (index === keyWord.length) {
          index = 0;
        }

        if (string[i].match(this.regexp)) {
          keyWordArray.push(keyWord[index].toUpperCase());
          index++;
        } else {
          keyWordArray.push(string[i]);
        }
    }

    // find result
    let result = [];

    for (let i = 0; i < string.length; i++) {
      if (string[i].match(this.regexp)) {
        let index1 = this.alphabet.indexOf(string[i].toUpperCase());
        let index2 = this.alphabet.indexOf(keyWordArray[i].toUpperCase());

        let index = index1 + index2;

        if (index >= 25) {
          index = index % 26;
        }
        result.push(this.alphabet[index]);
      } else {
        result.push(string[i]);
      }
    }

    this.direct === false ? result = result.reverse().join('') : result = result.join('');

    return result;    
  }

  decrypt(string, keyWord) {
    if (!string || !keyWord) throw new Error('Incorrect arguments!');

    let keyWordArray = [];
    let index = 0;

    for (let i = 0; i < string.length; i++) {    
      if (index === keyWord.length) {
        index = 0;
      }

      if (string[i].match(this.regexp)) {
        keyWordArray.push(keyWord[index].toUpperCase());
        index++;
      } else {
        keyWordArray.push(string[i]);
      }
    }

    // find result
    let result = [];

    for (let i = 0; i < string.length; i++) {
      if (string[i].match(this.regexp)) {
        let index1 = this.alphabet.indexOf(string[i].toUpperCase());
        let index2 = this.alphabet.indexOf(keyWordArray[i].toUpperCase());
  
        let index = index1 - index2;
  
        if (index < 0) {
          index = 26 - Math.abs(index);
        }
        
        result.push(this.alphabet[index]);
      } else {
        result.push(string[i]);
      }
    }

    this.direct === false ? result = result.reverse().join('') : result = result.join('');

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
