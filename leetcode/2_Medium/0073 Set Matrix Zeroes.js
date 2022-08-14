/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const setRowZero = (row, matrix) => {
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0;
  }
};

const setColZero = (col, matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    console.log(i, col);
    matrix[i][col] = 0;
  }
};

const setZeroes = (matrix) => {
  const jmap = new Array(matrix[0].length).fill().map(() => false);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (jmap[j]) continue;

      if (matrix[i][j] === 0) {
        setRowZero(i, matrix);
        setColZero(j, matrix);

        jmap[j] = true;
        break;
      }
    }
  }

  return matrix;
};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
