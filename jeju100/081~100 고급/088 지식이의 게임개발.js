/*
지식이는 게임을 만드는 것을 좋아합니다. 
하지만 매번 다른 크기의 지도와 장애물을 배치하는데 불편함을 겪고 있습니다. 
이런 불편함을 해결하기 위해 지도의 크기와 장애물의 위치, 캐릭터의 위치만 입력하면 게임 지형을 완성해 주는 프로그램을 만들고 싶습니다.
지식이를 위해 게임 지형을 만드는 프로그램을 작성해 주세요.

- 가로(n), 세로(m)의 크기가 주어집니다.
- 지형의 테두리는 벽으로 이루어져 있습니다.
- 캐릭터가 있는 좌표가 배열 형태로 주어집니다.
- 장애물이 있는 좌표가 2차원 배열 형태로 주어집니다.

지도는 n x m 크기의 배열이며 배열 안의 값은
   -움직일 수 있는 공간(0)
   -캐릭터(1)
   -벽(2)
3개로 구분되어 있습니다.

입력예시
가로 = 4
세로 = 5
캐릭터위치 = [0,0]
장애물 = [[0,1],[1,1],[2,3],[1,3]]

출력예시
[2, 2, 2, 2, 2, 2]
[2, 1, 2, 0, 0, 2]
[2, 0, 2, 0, 2, 2]
[2, 0, 0, 0, 2, 2]
[2, 0, 0, 0, 0, 2]
[2, 0, 0, 0, 0, 2]
[2, 2, 2, 2, 2, 2]
*/

const [EMPTY, PLAYER, WALL] = [0, 1, 2];
const make_map = (width, height, pos, items) => {
  let board = new Array(height + 2)
    .fill()
    .map((v) => new Array(width + 2).fill().map((v) => 0));
  for (let y = 0; y < height + 2; y++) {
    board[y][0] = WALL;
    board[y][width + 1] = WALL;
  }
  for (let x = 0; x < width + 2; x++) {
    board[0][x] = WALL;
    board[height + 1][x] = WALL;
  }
  board[pos[0] + 1][pos[1] + 1] = PLAYER;
  for (let item of items) {
    board[item[0] + 1][item[1] + 1] = WALL;
  }
  console.log(board);
  return board;
};

make_map(
  4,
  5,
  [0, 0],
  [
    [0, 1],
    [1, 1],
    [2, 3],
    [1, 3],
  ]
);
