const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],
  getLength() {
    return this.array.Length;
  },
  addLink(value) {
    let elem = '( ' + value + ' )';
    this.array.push(elem);
    return this;
  },
  removeLink(position) {
    if (!this.array[position - 1]) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let result = this.array.join('~~');
    this.array = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
