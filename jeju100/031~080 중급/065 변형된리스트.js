/*

아래와 같은 리스트가 있을 때,
[[1, a], [b, 4], [9, c], [d, 16]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
*/

let a = [1, 4, 9, 16];
let b = ["a", "b", "c", "d"];

// map 사용 : 리턴값 있음
let arrByMap = a.map((v, i) => {
  if (i % 2 === 0) {
    return [v, b[i]];
  } else {
    return [b[i], v];
  }
});
console.log(arrByMap);

// forEach 사용 : 리턴값 없음
let arrByForEach = [];
a.forEach((v, i) => {
  if (i % 2 === 0) {
    arrByForEach.push([v, b[i]]);
  } else {
    arrByForEach.push([b[i], v]);
  }
});
console.log(arrByForEach);
