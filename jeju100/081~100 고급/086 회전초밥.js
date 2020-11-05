/*
쉔은 회전 초밥집에 갔습니다.
초밥집에 간 쉔은 각 초밥에 점수를 매기고 낮은 점수의 순서로 초밥을 먹으려 합니다.
이때 n위치에 놓여진 초밥을 먹고자 할 때 접시가 몇 번 지나가고 먹을 수 있을지 출력하세요.

1. 초밥은 놓여진 위치에서 옮겨지지 않습니다.
2. 지나간 초밥은 나머지 초밥이 지나간 후에 다시 돌아옵니다.
3. 초밥은 1개 이상 존재합니다.

예)
A, B, C, D, E 초밥이 있고 각 점수가 1, 1, 3, 2, 5 일 때 3번째(C초밥)을 먹게 되는 순서는
점수가 1인 초밥 A와 B를 먹고 다음으로 점수가 2인 D 초밥을 먹어야 .
A B C D E 의 순서로 접시가 도착하지만 C가 도착했을때 먹지 못하는 상황이 옵니다.
2점을 주었던 D를 먼저 먹어야 C를 먹을 수 있습니다. 
즉, A B C D E C 의 순서로, 접시가 5번 지나가고 먹게 된다.

1, 1, 3, 2, 5
▲
0, 1, 3, 2, 5
   ▲
0, 0, 3, 2, 5
      ▲
0, 0, 3, 2, 5
         ▲
0, 0, 3, 0, 5
            ▲
*/
const EMPTY = 0;

const sushi = (list, target) => {
  let i = 0;
  let count = -1;
  let sorted = list.slice().sort((a, b) => b - a);

  while (true) {
    let min = sorted.pop();

    while (true) {
      if (list[i] !== EMPTY) count++;
      if (list[i] === min) break;
      i = i === list.length - 1 ? 0 : ++i;
    }
    if (i === target - 1) break;
    list[i] = EMPTY;
  }
  return count;
};

console.log(sushi([1, 1, 3, 2, 5], 3)); //5
console.log(sushi([5, 2, 3, 1, 2, 5], 1)); //10
console.log(sushi([2, 1, 1], 1)); //3
console.log(sushi([3, 2, 5, 5, 1, 3], 1)); //11
