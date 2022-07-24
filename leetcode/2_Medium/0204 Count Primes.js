/**
 * 에라토스테네스의 체
 * Reference: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * */

const countPrimes = (n) => {
  const array = Array(n)
    .fill(0)
    .map(() => true);

  array[0] = false;
  array[1] = false;

  // 제곱근까지만 검사하면 소수여부를 알 수 있다.
  for (let i = 2; i < Math.sqrt(n); i++) {
    // 소수가 아니면, 넘어간다
    if (!array[i]) {
      continue;
    }

    // 소수라면, cross out 해준다.
    // i ** 2 이전거는 그 전에 다 지워졌기 때문에 i ** 2 부터 시작한다.
    for (let j = i ** 2; j < n; j += i) {
      array[j] = false;
    }
  }

  return array.filter(Boolean).length;
};

console.log(countPrimes(10)); // 4
console.log(countPrimes(0)); // 0
console.log(countPrimes(1)); // 0
console.log(countPrimes(2)); // 0
console.log(countPrimes(499979)); // 41537
console.log(countPrimes(5000000)); // 348513

describe('countPrimes', () => {
  test('case', () => {
    expect(countPrimes(10).toEqual(4));
  });
});
