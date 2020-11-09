/*
제코베의 도움을 받아 성공적으로 지도를 만들어낸 지식이는 캐릭터의 움직임을 구현했습니다. 
하지만 지도 위의 캐릭터 위치를 나타내는데 문제가 발생했습니다.
지식이는 지도 위에서 캐릭터의 위치를 나타내기 위해 다시 한번 제코베에 도움을 요청합니다.

지도 위에서 캐릭터의 위치를 나타내주세요

1. 지도는 88번 문제의 해답을 사용해 주세요
2. 입력값은 지도, 캐릭터의 움직임입니다.
3. 캐릭터의 움직임은 { 상:1, 하:2, 좌:3, 우:4 }로 정수로 이루어진 배열이 들어갑니다.
4. 벽과 장애물은 통과할 수 없습니다. 
5. 마지막 캐릭터의 위치를 반영한 지도를 보여주고 위치를 반환하는 함수를 작성해 주세요.

데이터
가로 = 4
세로 = 5
캐릭터위치 = [0, 0]
장애물 = [[0,1],[1,1],[2,3],[1,3]]
console.log('캐릭터 이동 전 지도')
지도 = make_map(가로, 세로, 캐릭터위치, 장애물)

움직임 = [2,2,2,4,4,4]
console.log('캐릭터 이동 후 지도')
캐릭터 위치 = move(지도, 움직임)

출력
캐릭터 이동 전 지도
[2, 2, 2, 2, 2, 2]
[2, 1, 2, 0, 0, 2]
[2, 0, 2, 0, 2, 2]
[2, 0, 0, 0, 2, 2]
[2, 0, 0, 0, 0, 2]
[2, 0, 0, 0, 0, 2]
[2, 2, 2, 2, 2, 2]

캐릭터 이동 후 지도
[2, 2, 2, 2, 2, 2]
[2, 0, 2, 0, 0, 2]
[2, 0, 2, 0, 2, 2]
[2, 0, 0, 0, 2, 2]
[2, 0, 0, 0, 1, 2]
[2, 0, 0, 0, 0, 2]
[2, 2, 2, 2, 2, 2]
캐릭터위치 : [4, 4]
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
  return board;
};

const map = make_map(
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

const [UP, DOWN, LEFT, RIGHT] = [1, 2, 3, 4];

const move = (map, movements) => {
  let [posX, posY] = [0, 0];
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[0].length; x++) {
      if (map[y][x] === PLAYER) {
        posX = x;
        posY = y;
        map[y][x] = EMPTY;
        break;
      }
    }
    if (posX !== 0) break;
  }

  for (let m of movements) {
    if (m == UP) {
      posY = map[posY - 1][posX] === EMPTY ? --posY : posY;
    } else if (m == DOWN) {
      posY = map[posY + 1][posX] === EMPTY ? ++posY : posY;
    } else if (m == LEFT) {
      posX = map[posY][posX - 1] === EMPTY ? --posX : posX;
    } else if (m == RIGHT) {
      posX = map[posY][posX + 1] === EMPTY ? ++posX : posX;
    }
  }
  map[posY][posX] = 1;
  console.log(map);
  return [posX, posY];
};

console.log(move(map, [2, 2, 2, 4, 4, 4]));
