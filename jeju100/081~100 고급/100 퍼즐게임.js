/*
https://www.notion.so/100-f504032e06ba4329808a21d7b49944c8

N x M으로 이루어진 아래와 같은 공간에 퍼즐이 쌓여져 있습니다.

퍼즐을 맞추기 위해서는 반드시 맨 오른쪽 줄로 이동시켜 줘야 합니다.
만약 종류가 같은 퍼즐이 연속될 시에 점수가 추가되며 그 퍼즐은 사라집니다.

점수는 다음과 같습니다.
- 파란색 공 : 1점
- 빨간색 공 : 2점
- 노란색 공 : 3점
- 초록색 공 : 4점
- 주황색 공 : 5점
점수는 공의 개수만큼 추가됩니다

예를 들어 빨간색 공이 2개 연속되어 없어졌을 경우 2*2 = 4점입니다.

게임 플레이어는 게임이 시작되면 어떤 퍼즐을 이동할 것인지 모두 작성합니다.
만약 비어있는 곳을 선택하게 된다면 점수가 1점 감소하며 그대로 진행합니다.
위 규칙에 맞는 점수를 리턴하는 함수를 작성하세요.

입력
퍼즐판 = [[0,0,0,0],[0,1,0,3],[2,5,0,1],[2,4,4,1],[5,1,1,1]]
조작 = [1,1,1,1,3,3,3]

출력
2
*/

const BLUE = 1;
const RED = 2;
const YELLOW = 3;
const GREEN = 4;
const ORANGE = 5;

const solution = (board, manipulation) => {
  let score = 0;
  let [width, height] = [board[0].length, board.length];
  let stack = [];

  let newBoard = new Array(width).fill().map(() => []);
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (board[i][j] !== 0) newBoard[j].push(board[i][j]);
    }
  }

  for (let m of manipulation) {
    if (newBoard[m - 1].length === 0) {
      score--;
      continue;
    }
    stack.push(newBoard[m - 1].shift());
    if (stack.length >= 2 && stack[0] == stack[1]) {
      score += stack[0] * 2;
      stack.splice(0, 2);
    }
  }
  return score;
};

console.log(
  solution(
    [
      [0, 0, 0, 0],
      [0, 1, 0, 3],
      [2, 5, 0, 1],
      [2, 4, 4, 1],
      [5, 1, 1, 1],
    ],
    [1, 1, 1, 1, 3, 3, 3]
  )
);
