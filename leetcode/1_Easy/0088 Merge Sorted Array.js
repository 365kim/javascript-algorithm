const merge = (nums1, m, nums2, n) => {
  if (n === 0) return nums1;
  let p1 = 0;
  let p2 = 0;
  let temps = [];

  while (p1 < nums1.length) {
    const num1 = nums1[p1];
    const num2 = nums2[p2];
    const temp = temps[0];

    /* 케이스0: 종료 */
    if (temp === undefined && num2 === undefined) return nums1;

    const min =
      p1 < m
        ? Math.min(num1 ?? +Infinity, num2 ?? +Infinity, temp ?? +Infinity)
        : Math.min(num2 ?? +Infinity, temp ?? +Infinity);

    /* 케이스1: num1 */
    if (p1 < m && min === num1) {
      p1++;
      continue;
    }

    /* 케이스2: num2 */
    if (temp === undefined || min === num2) {
      p1 < m && temps.push(num1);
      nums1[p1] = num2;
      p1++;
      p2++;
      continue;
    }

    /* 케이스3: temp */
    if (num2 === undefined || min === temp) {
      p1 < m && temps.push(num1);
      temps.shift();
      nums1[p1] = temp;
      p1++;
      continue;
    }
  }

  return nums1;
};

console.log(merge((nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3)));
console.log(merge([1], 1, [], 0));
console.log(merge([2, 0], 1, [1], 1));
console.log(merge([1, 2, 4, 5, 6, 0], 5, [3], 1));
