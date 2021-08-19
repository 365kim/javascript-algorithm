/*
N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램을 작성하세요.
정렬기준은 먼저 x값의 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬합니다.
*/

const solution = (positions) => {
  return positions.sort(([ax, ay], [bx, by]) => {
    if (ax === bx) {
      return ay - by;
    }
    return ax - bx;
  });
};

console.log(
  solution([
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);
/*
1 2
1 3
2 5
2 7
3 6
*/
