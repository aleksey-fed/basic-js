const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(`.` + arr[i].split('.').reverse().join('.'))) {
      obj[`.` + arr[i].split('.').reverse().join('.')]++;
    } else {
      obj[`.` + arr[i].split('.').reverse().join('.')] = 1;
    }
  

    console.log('************************************************')

    let address = arr[i].slice(0);
    console.log(address);
    
    while (address.length > 3) {
      let index = address.indexOf('.');
      address = address.slice(index + 1);

      console.log(`.` + address.split('.').reverse().join('.'));
      if (obj.hasOwnProperty(`.` + address.split('.').reverse().join('.'))) {
        obj[`.` + address.split('.').reverse().join('.')]++;
      } else {
        obj[`.` + address.split('.').reverse().join('.')] = 1;
      }
    }
  }

  console.log(obj);
  return obj;
}

module.exports = {
  getDNSStats
};
