/* https://leetcode.com/problems/special-positions-in-a-binary-matrix/ */

var numSpecial = function (mat) {
  let count = 0;
  let k;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        continue;
      }
      for (k = 0; k < mat[0].length; k++) {
        if (k === j) {
          continue;
        }
        if (mat[i][k] === 1) {
          break;
        }
      }
      if (k !== mat[0].length) {
        continue;
      }
      for (k = 0; k < mat.length; k++) {
        if (k === i) {
          continue;
        }
        if (mat[k][j] === 1) {
          break;
        }
      }
      if (k !== mat.length) {
        continue;
      }
      //console.log(i, j);
      count++;
    }
  }
  return count;
};

console.log(
  numSpecial(
    (mat = [
      [1, 0, 0],
      [0, 0, 1],
      [1, 0, 0],
    ])
  )
);
console.log(
  numSpecial(
    (mat = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ])
  )
);
console.log(
  numSpecial(
    (mat = [
      [0, 0, 0, 1],
      [1, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ])
  )
);
console.log(
  numSpecial(
    (mat = [
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1],
    ])
  )
);
console.log(
  numSpecial(
    (mat = [
      [0, 1, 0],
      [0, 0, 0],
      [1, 0, 0],
      [1, 0, 0],
    ])
  )
);
