const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  const negativeIndices = [];
  arr.forEach((value, index) => {
    if (value === -1) {
      negativeIndices.push(index);
    }
  });

  const sortedHeights = arr.filter(value => value !== -1).sort((a, b) => a - b);

  negativeIndices.forEach(index => {
    sortedHeights.splice(index, 0, -1);
  });

  return sortedHeights;
}

module.exports = {
  sortByHeight
};
