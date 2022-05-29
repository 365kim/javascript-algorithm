/**
  Do not return anything, modify matrix in-place instead.

  n == matrix.length == matrix[i].length
  1 <= n <= 20
  -1000 <= matrix[i][j] <= 1000
 */

function rotate(matrix) {
  const n = matrix.length;
  const clone = Array(n)
    .fill(0)
    .map(() => Array(n));

  // rotate
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      clone[j][n - 1 - i] = matrix[i][j];
    }
  }

  // copy
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = clone[i][j];
    }
  }
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); //  [[7,4,1],[8,5,2],[9,6,3]]

console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
); //  [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
