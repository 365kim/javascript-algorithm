/*
N개의 마구간이 수직선상에 있습니다.
각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며, 마구간 간에 좌표가 중복되는 일은 없습니다.
각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다.
C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대값을 출력하는 프로그램을 작성하세요.
*/

const solution = (horseCount, roomPositions) => {
  roomPositions.sort((a, b) => a - b);

  let start = 1;
  let end = roomPositions.slice(-1) - roomPositions[0];
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2); // 최대간격 후보

    if (start === mid) {
      break;
    }

    let currHorseCount = 0;
    let prevPosition = -Infinity;

    for (const position of roomPositions) {
      if (position - prevPosition >= mid) {
        currHorseCount++;
        prevPosition = position;
      }
    }
    if (currHorseCount < horseCount) {
      end = mid;
    } else {
      start = mid;
    }
  }

  return mid;
};

console.log(solution(3, [1, 2, 8, 4, 9]));
