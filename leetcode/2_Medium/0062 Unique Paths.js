/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  const grid = Array(m)
    .fill(undefined)
    .map(() =>
      Array(n)
        .fill(undefined)
        .map(() => 1)
    );

  for (i = 1; i < m; i++) {
    for (j = 1; j < n; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }
  return grid[m - 1][n - 1];
};

console.log(uniquePaths((m = 3), (n = 7))); // 28
console.log(uniquePaths((m = 3), (n = 2))); // 3
