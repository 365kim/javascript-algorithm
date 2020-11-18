/*
수연이는 밭농사를 시작하기로 마음을 먹었다. 
집 앞 텃밭을 만들기로 하고 돌들을 제거하고 있는데 매우 큰 바위는 옮기지 못해 고심하고 있다.

이에 수연이는 다음과 같은 규칙을 정한다. 바위는 '1'로 표기한다.

1. 바위를 피해 텃밭을 만들되 정사각형 모양으로 텃밭을 만든다.
2. 텃밭은 가장 넓은 텃밭 1개만 만들고 그 크기를 반환한다.
3. 만든 텃밭은 모두 '#'으로 처리한다.

입력

0 0 0 0 0
0 1 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 1 0

출력

3 X 3

0 0 # # #
0 1 # # #
0 1 # # #
0 0 1 0 0
0 0 0 1 0

입력

0 0 0 1 0
0 0 0 0 0
0 0 1 0 0
0 0 1 0 0
0 0 0 1 0

출력

2 X 2

# # 0 1 0
# # 0 0 0
1 0 1 0 0
0 0 1 0 0
1 0 0 1 0
*/

const STONE = '1';

const printResult = (field, size, a, b) => {
  console.log(`${size} X ${size}`);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      field[a + i][b + j] = '#';
    }
  }
  console.log(field);
}

const isAvailable = (field, size, a, b) => {
  for (let i = 0; a + i < size; i++) {
    for (let j = 0; b + j < size; j++) {
      if (field[a + i][b + j] == STONE)
         return false;
    }
  }
  return true;
}

const getBiggestField = (field) => {
  let max = field.length;
  for (let size = max; size >= 1 ; size--) {
    for (let a = 0; a + size <= max; a++) {
      for (let b = 0; b + size <= max; b++) {
        if (isAvailable(field, size, a, b)) {
          return printResult(field, size, a, b);
        }
      }
    }
  }
  return printResult(field, 0, 0, 0);
}

getBiggestField([
  [ '0', '0', '0', '0', '0' ],
  [ '0', '1', '0', '0', '0' ],
  [ '0', '1', '0', '0', '0' ],
  [ '0', '0', '1', '0', '0' ],
  [ '0', '0', '0', '1', '0' ]
]);