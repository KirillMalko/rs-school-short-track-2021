/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const Arr = [];
  let res = 0;

  matrix.forEach((elem) => {
    elem.forEach((el, i) => {
      if (Arr.includes(i)) return;

      if (el === 0)Arr.push(i);
      else res += el;
    });
  });
  return res;
}

module.exports = getMatrixElementsSum;
