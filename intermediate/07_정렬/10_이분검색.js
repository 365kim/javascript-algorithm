/*
임의의 N개의 숫자가 입력으로 주어집니다.
N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하세요.
단 중복값은 존재하지 않습니다.

순차탐색: n
이분탐색: logn
*/

const solution = (array, target) => {
  const sorted = array.sort((a, b) => a - b);
  // 우선 배열을 정렬한다.
  let start = 0;
  let end = sorted.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (sorted[mid] === target) {
      break;
    }
    if (sorted[mid] > target) {
      end = mid;
      continue;
    }
    if (sorted[mid] < target) {
      start = mid;
    }
  }

  return mid + 1;
};

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));
// 3
