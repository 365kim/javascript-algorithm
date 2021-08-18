/*
괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
*/

const solution = (str) => {
  const stack = [];

  for (let char of str) {
    if (char === '(') {
      stack.push(char);
    } else {
      // pop 할게 남아있지 않다면 올바르지 않다.
      if (stack.length === 0) {
        return 'NO';
      }
      stack.pop();
    }
  }

  // 순회를 마쳤는데도 pop 할게 남아있다면 올바르지 않다.
  if (stack.length !== 0) {
    return 'NO';
  }
  return 'YES';
};

console.log(solution('(()(()))(()'));
// NO
console.log(solution('(()())(())'));
// YES
