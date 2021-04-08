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
  let isNotOneArr = [];
  const resultArr = [];
  let i = 0;

  isNotOneArr = arr.filter((number) => number !== -1);

  isNotOneArr.sort((a, b) => a - b);
  arr.forEach((item) => {
    if (item === -1) {
      resultArr.push(item);
    } else {
      resultArr.push(Number(isNotOneArr[i]));
      i++;
    }
  });

  return resultArr;
}

module.exports = sortByHeight;
