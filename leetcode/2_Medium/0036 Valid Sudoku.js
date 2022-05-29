/*
  Each row must contain the digits 1-9 without repetition.
  Each column must contain the digits 1-9 without repetition.
  Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
*/

const validateEachRow = (board) => {
  for (let i = 0; i < 9; i++) {
    const row = board[i];
    const numbersInRow = row.filter((v) => v !== '.');

    if (numbersInRow.length !== new Set(numbersInRow).size) {
      return false;
    }
  }
  return true;
};

const validateEachColumn = (board) => {
  for (let i = 0; i < 9; i++) {
    const column = Array(9)
      .fill()
      .map((_, j) => board[j][i]);
    const numbersInColumn = column.filter((v) => v !== '.');

    if (numbersInColumn.length !== new Set(numbersInColumn).size) {
      return false;
    }
  }
  return true;
};

const validateEachSubBox = (board) => {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      const subBox = [];

      for (a = 0; a < 3; a++) {
        for (b = 0; b < 3; b++) {
          subBox.push(board[3 * i + a][3 * j + b]);
        }
      }
      const numbersInSubBox = subBox.filter((v) => v !== '.');
      if (numbersInSubBox.length !== new Set(numbersInSubBox).size) {
        return false;
      }
    }
  }
  return true;
};

const isValidSudoku = (board) => {
  return validateEachRow(board) && validateEachColumn(board) && validateEachSubBox(board);
};

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
); // true

console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
); // false

console.log(
  isValidSudoku([
    ['7', '.', '.', '.', '4', '.', '.', '.', '.'],
    ['.', '.', '.', '8', '6', '5', '.', '.', '.'],
    ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '9', '.', '.', '.'],
    ['.', '.', '.', '.', '5', '.', '5', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ])
); // false

console.log(
  isValidSudoku([
    ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
    ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
    ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
    ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
    ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
  ])
); // false
