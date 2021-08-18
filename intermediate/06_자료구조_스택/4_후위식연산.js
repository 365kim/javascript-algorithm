/*
후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어집니다.

만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.
*/

const solution = (equation) => {
  let stack = [];

  for (let char of equation) {
    if (isNaN(char)) {
      const right = stack.pop();
      const left = stack.pop();
      const temp = eval(`${left}${char}${right}`);

      stack.push(temp);
    } else {
      stack.push(char);
    }
  }

  return stack[0];
};

console.log(solution('352+*9-'));
// 12
