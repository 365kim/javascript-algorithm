/*
N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 target이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.

이중 for문 : n^2
투포인터 알고리즘: n
*/

const solution = (arr, target) => {
  let left = 0;
  let sum = 0;
  let answer = 0;

  // sum보다 작으면 right를 증가시키면서 범위를 넓힌다.
  // 더할 때는 index를 먼저 옮긴 후 더해준다.
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    if (sum < target) {
      continue;
    }

    if (sum === target) {
      answer++;
    }

    // sum보다 크거나 같으면 left를 증가시키면서 범위를 좁힌다.
    // 뺄 때는 먼저 빼주고 index를 옮겨준다.

    sum -= arr[left];
    left++;

    if (sum === target) {
      answer++;
    }
  }

  return answer;
};

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));
// 3
console.log(solution([1, 2, 1, 3, 1, 1, 1, 3], 6));
// 4
