/*
공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.
*/

// Math.pow(base, exponent) 메서드 활용
// power메서드는 문자열도 알아서 숫자로 처리해줌
let args = "2 6";

const aPoweredByB = (args) => {
  let [a, b] = args.split(" ");

  return Math.pow(a, b);
};

console.log(aPoweredByB(args));
