const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let x = String(n).split('');
  let maxNum = Math.max(...x);
  let cutNum = x.lastIndexOf(String(maxNum));

  x.splice(cutNum - 1, 1);

  return +x.join('');
}

module.exports = {
  deleteDigit
};
