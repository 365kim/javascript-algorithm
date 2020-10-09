/* https://leetcode.com/problems/subrectangle-queries/ */

class SubrectangleQueries {
  constructor(rectangle) {
    this.rectangle = rectangle;
  }

  updateSubrectangle = (row1, col1, row2, col2, newValue) => {
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        this.rectangle[i][j] = newValue; //[row][col]
      }
    }
  };

  getValue = (row, col) => {
    return this.rectangle[row][col];
  };
}

let obj = new SubrectangleQueries([
  [1, 2, 1],
  [4, 3, 4],
  [3, 2, 1],
  [1, 1, 1],
]);

obj.updateSubrectangle(0, 0, 3, 2, 5);
console.log(obj.getValue(0, 2));
console.log(obj.getValue(3, 1));

obj.updateSubrectangle(3, 0, 3, 2, 10);
console.log(obj.getValue(3, 1));
console.log(obj.getValue(0, 2));
