/*
수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다.
괄호는 소괄호와 중괄호가 있습니다.

5 + 7 * {(3 * 5)}
true

5 + 7){ * (3 * 5)
false

*/

const math = (ex) => {
  const obj = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];
  for (let c of ex) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
      continue;
    }
    if (c === ")" || c === "}" || c === "]") {
      let lastBracket = stack.pop();
      if (lastBracket !== obj[c]) {
        return false;
      }
    }
  }
  return true;
};

console.log(math("5 + 7 * {(3 * 5)}"));
console.log(math("5 + 7){ * (3 * 5)"));
