/*
N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 target이하가 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
(중복 가능)
*/

const solution = (arr, target) => {
  let left = 0;
  let sum = 0;
  let answer = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    if (sum <= target) {
      answer += right - left + 1;
      continue;
    }
    sum -= arr[left];
    left++;
  }

  return answer;
};

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));
// 10
console.log(solution([1, 1, 1, 1], 5));
// 10
