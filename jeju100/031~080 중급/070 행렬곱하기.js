/*
행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.

입력
a = [[1, 2],
		[2, 4]]

b = [[1, 0],
		[0, 3]]

출력
[[1, 6], [2, 12]]
*/

// let xx = 1 스칼라
// let yy = [1,2,3] 벡터
// let zz = [[1,2,3], [1,2,3]] 행렬

const solution = (a, b) => {
  let result = [];

  if (a[0].length !== b.length) {
    return -1;
  }

  for (let i = 0; i < a.length; i++) {
    let row = [];

    for (let j = 0; j < a[0].length; j++) {
      let val = 0;

      for (let k = 0; k < a[0].length; k++) {
        val += a[i][k] * b[k][j];
      }
      row.push(val);
    }
    result.push(row);
  }
  return result;
};

console.log(
  solution(
    (a = [1]),
    (b = [
      [1, 0],
      [0, 3],
    ])
  )
);

console.log(
  solution(
    (a = [
      [1, 2],
      [2, 4],
    ]),
    (b = [
      [1, 0],
      [0, 3],
    ])
  )
);
