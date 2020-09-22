/* https://leetcode.com/problems/flipping-an-image/ */

let flipAndInvertImage = (A) => {
  let result = [];

  for (row of A) {
    row.reverse();
    result.push(row.map((v) => !v));
  }
  return result;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
