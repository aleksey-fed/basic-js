const { NotImplementedError } = require('../extensions/index.js');
/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 * 
 */

class DepthCalculator {
  calculateDepth(array , count = 1) {
    if (!Array.isArray(array)) throw new Exception('not an array');
    
    var max = count;
  
    for (let i = 0; i < array.length; i++) {  
      if (Array.isArray(array[i])) {
          var subDepth = this.calculateDepth(array[i], count + 1);
  
          if (subDepth > max) {
            max = subDepth;
          }
  
          count = 1;
        }
    }

    return max;
  }
}

module.exports = {
  DepthCalculator
};
