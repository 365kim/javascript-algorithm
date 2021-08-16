/*
오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램 을 작성하세요.

- 두 배열을 합치고 sort할 경우: nlogn
- 투포인터 알고리즘: n + m
*/

const solution = (arr1, arr2) => {
  const answer = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    // 더 작은 값을 answer에 push하고 pointer를 옮겨준다.
    if (arr1[p1] < arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
    } else {
      answer.push(arr2[p2]);
      p2++;
    }
  }

  if (p1 === arr1.length) {
    answer.push(...arr2.slice(p2));
  } else {
    answer.push(...arr1.slice(p1));
  }

  return answer;
};

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
// [ 1, 2, 3, 3, 5, 6, 7, 9]
