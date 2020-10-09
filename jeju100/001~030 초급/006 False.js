/*
다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.

1)  NaN
2)  1    <- 정답
3)  ""
4)  0
5)  undefined
*/

// falsy : 0, "", NaN, null, undefined, false
// truthy : 나머지

console.log(isNaN("abc")); // true
console.log(isNaN(1)); // false
