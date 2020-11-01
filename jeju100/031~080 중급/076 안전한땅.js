/*
전쟁이 끝난 후, A 나라에서는 폐허가 된 도시를 재건하려고 한다. 
그런데 이 땅은 전쟁의 중심지였으므로 전쟁 중 매립된 지뢰가 아직도 많이 남아 있다는 것이 판명되었다. 
정부는 가장 먼저 지뢰를 제거하기 위해 수색반을 꾸렸다.

수색반은 가장 효율적인 지뢰 제거가 하고 싶다. 
수색반은 도시를 격자무늬로 나눠놓고 자신들이 수색할 수 있는 범위 내에 가장 많은 지뢰가 매립된 지역을 가장 먼저 작업하고 싶다.

가장 먼저 테스트 케이스의 수를 나타내는 1이상 100 이하의 자연수가 주어진다.
각 테스트 케이스의 첫 줄에는 수색할 도시의 크기 a와 수색반이 한 번에 수색 가능한 범위 b가 주어진다. (a와 b 모두 정사각형의 가로 또는 세로를 나타낸다. 예를 들어 10이 주어지면 10x10칸의 크기를 나타낸다.)

그 후 a 줄에 걸쳐 도시 내 지뢰가 있는지의 여부가 나타난다. 
0은 지뢰가 없음 1은 지뢰가 있음을 뜻한다.

각 테스트 케이스에 대해 수색 가능한 범위 bxb 내에서 찾아낼 수 있는 가장 큰 지뢰의 개수를 구하라.

입력
1
5 3 // 전체크기(5x5), 수색크기(3x3)
1 0 0 1 0
0 1 0 0 1
0 0 0 1 0
0 0 0 0 0
0 0 1 0 0

출력
3
*/
let mapSize = 5;
let searchSize = 3;
let map = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];
const minesweeper = (mapSize, searchSize, map) => {
  let max = 0;

  for (let i = 0; i + searchSize < mapSize; i++) {
    for (let j = 0; j + searchSize < mapSize; j++) {
      let temp = 0;
      for (let a = 0; a < searchSize; a++) {
        for (let b = 0; b < searchSize; b++) temp += map[i + a][j + b];
      }
      if (max < temp) {
        max = temp;
      }
    }
  }
  return max;
};

console.log(minesweeper(mapSize, searchSize, map));
