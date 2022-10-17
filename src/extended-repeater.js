const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes;
  let separator = options.separator ? options.separator : '+';
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

  let additionString = '';
  let result = '' + str;

  function repeat(str, times, separator) {
    let string = '' + str;    
    return Array(times).fill(string).join(separator);
  }

  function repeatAddition (str, times, separator) {
    let string = '' + str;    
    return Array(times).fill(string).join(separator);
  }

  if (additionRepeatTimes) {
    additionString = repeatAddition(addition, additionRepeatTimes, additionSeparator);
  } else if (addition) {
    result += addition;
  }

  if (repeatTimes) {
    result = repeat(result + additionString, repeatTimes, separator);
  }

  return result;
}

module.exports = {
  repeater
};
