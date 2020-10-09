/*
자바스크립트 객체를 다음과 같이 만들었다. 
출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )
*/

let d = {
  height: 180,
  weight: 78,
  weight: 84,
  temperature: 36,
  eyesight: 1,
  1: 180,
  2: 84,
};

// 객체에서 key 값이 중복될 경우 마지막 key 값을 가져온다
console.log(d["weight"]); // 84 (각괄호 접근자로 가져오기)
console.log(d.weight); // 84 (점 접근자로 가져오기)
console.log(d[2]); // 84 (숫자 key값도 가능)
