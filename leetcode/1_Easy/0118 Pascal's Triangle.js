/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const result = new Array(numRows).fill().map((_, i) => new Array(i + 1).fill().map(() => 1));

  for (let i = 2; i < numRows; i++) {
    const row = result[i];
    const prevRow = result[i - 1];

    for (let j = 1; j < row.length - 1; j++) {
      row[j] = prevRow[j - 1] + prevRow[j];
    }
  }

  return result;
};

console.log(generate((numRows = 1)));
console.log(generate((numRows = 5)));
/* [
 *        [1],
 *      [1, 1],
 *     [1, 2, 1],
 *    [1, 3, 3, 1],
 *   [1, 4, 6, 4, 1]
 * ];
 */
