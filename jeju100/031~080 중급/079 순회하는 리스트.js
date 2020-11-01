/*
n번 순회했을 때 변하기 전 원소와 변한 후 원소의 값의 차가 가장 작은 값을 출력하는 프로그램을 작성하세요.

2번 순회했을 때 변하기 전의 리스트와 변한 후의 리스트의 값은 아래와 같습니다.

순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
리스트의_차 = [25, 19, 15, 7, 9, 8, 5]

39와 변한 후의 34 값의 차가 5이므로 리스트의 차 중 최솟값입니다. 
따라서 39와 34의 인덱스인 6과 39와 34를 출력하는 프로그램을 만들어주세요.

입력
순회횟수는 : 2

출력
index : 6
value : 39, 34
```
*/

const rotate = (list, n) => {
  let len = list.length;
  let [index, value1, value2] = [0, list[0], list[len - n]];
  let diff = Math.abs(value1 - value2);

  list.forEach((v, idx1) => {
    let idx2 = (idx1 + (len - n)) % len;
    if (diff > Math.abs(v - list[idx2])) {
      index = idx1;
      value1 = v;
      value2 = list[idx2];
    }
  });
  return `index: ${index} value: ${value1}, ${value2}`;
};

console.log(rotate([10, 20, 25, 27, 34, 35, 39], 2));
