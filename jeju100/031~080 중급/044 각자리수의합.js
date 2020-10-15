/*
사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요

예를 들어
18234 = 1+8+2+3+4 이고 정답은 18 입니다.
3849 = 3+8+4+9 이고 정답은 24입니다.

입력 : 18234
출력 : 18

입력 : 3849
출력 : 24

*/

const sumEachRemainder = (n) => {
  let result = 0;
  while (n) {
    result += n % 10;
    n = Math.floor(n / 10);
  }
  return result;
};

console.log(sumEachRemainder(18234));
console.log(sumEachRemainder(3849));

const sumEachDigit = (n) => {
  let result = 0;
  let nSplit = n.toString().split("");
  for (digit of nSplit) {
    result += +digit;
  }
  return result;
};

console.log(sumEachDigit(18234));
console.log(sumEachDigit(3849));
