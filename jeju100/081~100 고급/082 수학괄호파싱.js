/*
수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다. 
괄호는 소괄호밖에 없습니다.

입출력 예시

입력: 3 + 5
출력: true

입력: 5 + 7) * (3 * 5)
출력: false

*/
function math(ex) {
  let count = 0;
  for (let c of ex) {
    if (c === "(") count++;
    if (c === ")") count--;
    if (count < 0) {
      return false;
    }
  }
  return true;
}

console.log(math("3 + 5"));
console.log(math(")3 + 5("));
console.log(math("5 + 7) * (3 * 5)"));
