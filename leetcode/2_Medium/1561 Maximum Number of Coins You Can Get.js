/* https://leetcode.com/problems/maximum-number-of-coins-you-can-get/ */

let maxCoins = function (piles) {
  if (piles.length % 3 !== 0) return 0;

  piles.sort((a, b) => a - b);
  const n = piles.length / 3;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += piles[3 * n - 2 * i];
  }
  return sum;
};

console.log(maxCoins([2, 4, 1, 2, 7, 8]));
