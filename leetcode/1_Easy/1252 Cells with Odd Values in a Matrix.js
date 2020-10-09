/* https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/ */

let oddCells = (n, m, indices) => {
  let countOdds = 0;
  let arr = new Array(n).fill().map(() => new Array(m).fill(0));
  for (indice of indices) {
    let row = indice[0];
    let col = indice[1];
    for (let i = 0; i < m; i++) {
      arr[row][i]++;
    }
    for (let i = 0; i < n; i++) {
      arr[i][col]++;
    }
  }
  console.log(arr);
  return arr.reduce((acc, curr) => acc.concat(curr.filter((v) => v % 2)), [])
    .length;
};

console.log(
  oddCells(
    (n = 2),
    (m = 3),
    (indices = [
      [0, 1],
      [1, 1],
    ])
  )
);
