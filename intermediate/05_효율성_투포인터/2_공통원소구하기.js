/*
A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로 그램을 작성하세요.

- 이중 for문: n x m
- 각 배열 정렬 후 투포인터 알고리즘: nlogn + n
*/

const solution = (unsortedArr1, unsortedArr2) => {
  const answer = [];
  const arr1 = unsortedArr1.sort((a, b) => a - b);
  const arr2 = unsortedArr2.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    // 값이 같으면 push한다.
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
      continue;
    }
    if (arr1[p1] < arr2[p2]) {
      while (arr1[p1] < arr2[p2]) {
        p1++;
      }
    } else {
      while (arr1[p1] > arr2[p2]) {
        p2++;
      }
    }
  }
  return answer;
};

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
// [ 2, 3, 5 ]
