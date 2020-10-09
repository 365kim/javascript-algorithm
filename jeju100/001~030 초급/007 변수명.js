/*
다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

1)  age
2)  Age
3)  let <- 정답
4)  _age
5)  1age <- 정답
*/

let let;
// SyntaxError: let is disallowed as a lexically bound name;
let 1age;
// SyntaxError : Invalid or unexpected token

/*
변수의 식별자로 사용할 수 없는 것

1. 특수기호 (_ $ 2가지만 가능)
2. 문자열 (단, 예약어 제외)
3. 숫자 (단, 첫번째 순서로는 불가능)
*/
