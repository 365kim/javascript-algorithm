/* https://leetcode.com/problems/minimum-operations-to-make-array-equal/ */

let minOperations = (n) => {
  if (n % 2 === 0) {
    return (n / 2) * (n / 2);
  }
  n++;
  return (n / 2) * (n / 2 - 1);
};

console.log(minOperations((n = 3)));
