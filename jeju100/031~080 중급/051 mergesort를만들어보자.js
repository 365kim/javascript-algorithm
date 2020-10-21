/*
병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
3. 각 부분 리스트를 '재귀적으로' 합병 정렬을 이용해 정렬한다.
4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
출처: 위키피디아

예시)
[1, 3, 5, 4, 8, 6, 7, 2]
[1, 3, 5, 4][8, 6, 7, 2]
[1, 3][5, 4][8, 6][7, 2]
[1][3][5][4][8][6][7][2] // 크기가 1
[1, 3][4, 5][6, 8][2, 7] // 맨 앞에 것끼리 비교
[1, 3, 4, 5][2, 6, 7, 8]
[1, 2, 3, 4, 5, 6, 7, 8]

다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.
*/

// 반으로 쪼개며 1개까지 분할하는 부분
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

// 정렬하고 합치는 부분
const merge = (left, right) => {
  let result = [];

  // 한쪽 길이가 끝날 때까지
  while (left.length && right.lenfth) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
};

console.log(mergeSort([1, 3, 5, 4, 8, 6, 7, 2]));
