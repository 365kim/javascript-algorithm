/*
다음 빈 칸을 채워 퀵 정렬을 완성해주세요.

예시)
[1, 3, 2, 7, 5, 6, 4, 8, 9, 10]
pivot 하나설정 : 6 (보통 맨끝 or 중앙)
[1, 3, 2, 7, 5][6][4, 8, 9, 10]
[1, 3, 2, 5, 4][6][7, 8, 9, 10]
[1][2][3, 5, 4][6][7, 8][9][10]
[1][2][3, 4][5][6][7][8][9][10]
[1][2][3][4][5][6][7][8][9][10]
// 길이가 하나라면 리턴
*/

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[t] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([1, 3, 2, 7, 5, 6, 4, 8, 9, 10]));
