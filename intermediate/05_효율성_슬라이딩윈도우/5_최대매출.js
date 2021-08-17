/*
N일 동안의 매출기록을 주고 연속된 K일 동안의 최대 매출액이 얼마인지 구하세요.

- 이중 for문: n^2
- 슬라이딩 윈도우: n
*/

const solution = (revenues, n) => {
  let max = revenues.slice(0, n).reduce((acc, cur) => (acc += cur), 0);
  let sum = max;

  for (i = n; i < revenues.length; i++) {
    sum += revenues[i] - revenues[i - n];
    max = sum > max ? sum : max;
  }

  return max;
};

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));
