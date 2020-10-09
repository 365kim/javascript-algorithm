/* https://leetcode.com/problems/max-increase-to-keep-city-skyline/ */

var maxIncreaseKeepingSkyline = function (grid) {
  let iLen = grid.length;
  let jLen = grid[0].length;

  let iMax = Array(iLen).fill(0);
  let jMax = Array(jLen).fill(0);

  for (i = 0; i < iLen; i++) {
    for (j = 0; j < jLen; j++) {
      iMax[i] = grid[i][j] > iMax[i] ? grid[i][j] : iMax[i];
      jMax[j] = grid[i][j] > jMax[j] ? grid[i][j] : jMax[j];
    }
  }

  let answer = 0;
  for (i = 0; i < iLen; i++) {
    for (j = 0; j < jLen; j++) {
      let temp = Math.min(iMax[i] - grid[i][j], jMax[j] - grid[i][j]);
      if (temp <= 0) continue;
      answer += temp;
    }
  }
  return answer;
};

console.log(
  maxIncreaseKeepingSkyline([
    [13, 47, 91, 34, 20, 33, 39, 22, 80, 62],
    [73, 97, 88, 51, 38, 36, 52, 75, 25, 99],
    [95, 43, 32, 26, 82, 74, 60, 69, 59, 55],
    [20, 41, 77, 95, 79, 46, 70, 50, 17, 51],
    [51, 0, 93, 27, 46, 41, 58, 49, 8, 5],
    [92, 58, 38, 56, 73, 93, 34, 47, 23, 62],
    [97, 66, 57, 72, 26, 46, 4, 90, 82, 74],
    [7, 44, 67, 96, 0, 82, 75, 22, 53, 100],
    [95, 48, 46, 68, 41, 53, 69, 42, 13, 87],
    [79, 48, 96, 39, 21, 35, 3, 12, 22, 42],
  ])
);

// console.log(
//   maxIncreaseKeepingSkyline([
//     [3, 0, 8, 4],
//     [2, 4, 5, 7],
//     [9, 2, 6, 3],
//     [0, 3, 1, 0],
//   ])
// );
