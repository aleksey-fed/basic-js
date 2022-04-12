const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let nameTeam = [];
  
  if (typeof members != 'string' && Array.isArray(members) != true) {
    return false;
  } else {
    members.forEach( item => {
      if (typeof item == 'string') {
        item = item.trim();
        nameTeam.push(item[0].toUpperCase());
      }
    });
  }

  return nameTeam.sort().join('');
}

module.exports = {
  createDreamTeam
};
