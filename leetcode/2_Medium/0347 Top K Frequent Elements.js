/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const mergeSort = (entries, start, end) => {
  const clone = JSON.parse(JSON.stringify(entries));

  //   p
  //   i                  j
  // [ start ~ mid ]    [ mid + 1 ~ end ]
  const mid = Math.floor((start + end) / 2);
  let i = start;
  let j = mid + 1;

  let p = start;

  if (start >= end) return;

  mergeSort(entries, start, mid);
  mergeSort(entries, mid + 1, end);

  while (p <= end) {
    if (i > mid) {
      clone[p++] = entries[j++]; // 왼쪽 파트에서는 더 넣을게 없음
    } else if (j > end) {
      clone[p++] = entries[i++]; // 오른쪽 파트에서는 더 넣을게 없음
    } else if (entries[i][1] < entries[j][1]) {
      clone[p++] = entries[i++]; // 왼쪽게 더 작음
    } else {
      clone[p++] = entries[j++];
    }
  }

  // 옮겨적기
  for (let i = start; i <= end; i++) {
    entries[i] = clone[i];
  }
};

const topKFrequent = (nums, k) => {
  const obj = {};
  nums.forEach((num) => (obj[num] = obj[num] === undefined ? 1 : obj[num] + 1));

  const entries = Object.entries(obj); // [key, freq]
  mergeSort(entries, 0, entries.length - 1);

  return entries
    .reverse()
    .slice(0, k)
    .map(([key]) => key);
};

console.log(topKFrequent((nums = [1, 1, 1, 2, 2, 3]), (k = 2))); // [1, 2]
console.log(topKFrequent((nums = [1]), (k = 1))); // [1]
console.log(topKFrequent((nums = [3, 0, 1, 0]), (k = 1))); // [0]
console.log(topKFrequent((nums = [4, 1, -1, 2, -1, 2, 3]), (k = 2))); // [-1,2]
