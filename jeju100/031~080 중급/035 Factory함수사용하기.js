/*
2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 

코드를 작성하여 two함수를 완성하세요.
*/

// function one(n) {
//   const two = (x) => Math.pow(x, n)
//   return two;
// }
const one = (n) => (x) => Math.pow(x, n);

const a = one(2); // 2제곱 해주는 함수
const b = one(3); // 3제곱 해주는 함수
const c = one(4); // 4제곱 해주는 함수

console.log(a(10));
console.log(b(10));
console.log(c(10));
