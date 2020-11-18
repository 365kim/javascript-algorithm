/*
빈 종이에 stamp 모양으로 생긴 도장을 90*k 도로 회전하며 찍습니다.
도장은 N*N 크기이며 각 도장이 찍히는 부분은 1 이상의 자연수와 도장이 찍히지 않는 부분은 0으로 이루어져 있습니다.

도장의 크기 N과 종이에 찍힌 도장 횟수를 표현한 stamp 배열, 그리고 얼마만큼 회전할 것인지를 알려주는 회전수 k를 입력받았을 때
각 위치에서 몇 번 도장이 찍혔는지 그 결과값을 출력하세요
https://www.notion.so/95-e12ca260de0e44bb927abe54ff8c6692

입력
도장 = [
[1,1,1,2],
[2,0,0,0],
[1,1,1,1],
[0,0,0,0]]
회전 = 1

출력
[[1, 2, 3, 3], [2, 1, 0, 1], [1, 2, 1, 2], [0, 1, 0, 2]]
*/

const solution = (stamp, k) => {
  let acc = JSON.parse(JSON.stringify(stamp));
  let N = stamp.length;
  for (let i = 0; i < k; i++) {
    let rotate = new Array(N).fill().map((v) => new Array());
    stamp.reverse().forEach((v) => v.forEach((u, i) => rotate[i].push(u)));
    acc = acc.map((v, i) => v.map((u, j) => u + rotate[i][j]));
  }
  return acc;
};

console.log(
  solution(
    [
      [1, 1, 1, 2],
      [2, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
    ],
    1
  )
);

function rotate90(arr) {
  N = arr.length;
  let res = new Array(N).fill().map((v) => new Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      res[j][N - 1 - i] = arr[i][j];
    }
  }
  return res;
}
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let arr90 = rotate90(arr);
console.log(arr90);
/*
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];
*/
let arr180 = rotate90(arr90);
console.log(arr180);
/*
[
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];
*/
let arr270 = rotate90(arr180);
console.log(arr270);
/*
[
  [3, 6, 9],
  [2, 5, 8],
  [1, 4, 7],
];
*/
let arr360 = rotate90(arr270);
console.log(arr360);
/*
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
*/

// let rotate90 = new Array(arr.length).fill().map((v) => []);
// [...arr].reverse().forEach((v) => v.forEach((u, i) => rotate90[i].push(u)));
// console.log(rotate90);
// /*
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];
// */

// let rotate180 = [];
// [...arr].reverse().forEach((v) => rotate180.push(v));
// console.log(rotate180);
// /*
// [
//   [9, 8, 7],
//   [6, 5, 4],
//   [3, 2, 1],
// ];
// */

// let rotate270 = new Array(arr.length).fill().map((v) => []);
// [...arr].forEach((v) => v.reverse().forEach((u, i) => rotate270[i].push(u)));
// console.log(rotate270);
// /*
// [
//   [3, 6, 9],
//   [2, 5, 8],
//   [1, 4, 7],
// ];
// */
