/*
숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.

(소수 : 1과 자기 자신만으로 나누어 떨어지는, 1보다 큰 양의 정수)
*/

const isPrime = (n) => {
  let sqrtN = Math.sqrt(n);
  for (let i = 2; i < sqrtN; i++) {
    if (n % i === 0) {
      console.log("NO");
      return;
    }
  }
  if (n > 1) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

isPrime(1);
isPrime(3);
isPrime(6);
isPrime(7);
