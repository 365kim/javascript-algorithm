const trailingZeroes = function (n) {
  const fivePowers = [];

  for (let i = 1; Math.pow(5, i) < Math.pow(10, 4); i++) {
    fivePowers.push(Math.pow(5, i));
  }

  return fivePowers.reduce((acc, cur) => (acc += Math.floor(n / cur)), 0);
};

console.log(trailingZeroes(30)); // 7
console.log(trailingZeroes(3125)); // 781
