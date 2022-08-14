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
    matrix[i][col] = 0;
  }
};

const setZeroes = (matrix) => {
  const iMap = new Array(matrix.length).fill().map(() => false);
  const jMap = new Array(matrix[0].length).fill().map(() => false);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        iMap[i] = true;
        jMap[j] = true;
      }
    }
  }

  iMap.forEach((v, i) => v && setRowZero(i, matrix));
  jMap.forEach((v, j) => v && setColZero(j, matrix));

  return matrix;
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
