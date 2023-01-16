/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const len = String(n).length;
  let cur = n;

  for (let i = 0; i < len * 10; i++) {
    let sum = 0;
    while (cur > 0) {
      sum += Math.pow(cur % 10, 2);
      cur = Math.floor(cur / 10);
    }

    if (sum === 1) return true;
    cur = sum;
  }
  return false;
};
