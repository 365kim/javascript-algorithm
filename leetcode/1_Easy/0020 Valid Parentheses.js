/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function (s) {
  const STARTS = ['(', '[', '{'];
  const stack = [];
  const top = () => stack[stack.length - 1];

  for (let char of s) {
    if (STARTS.includes(char)) {
      stack.push(char);
      continue;
    }
    if (stack.length === 0) return false;

    if (char === ')') {
      if (top() !== '(') return false;
      stack.pop();
      continue;
    }
    if (char === ']') {
      if (top() !== '[') return false;
      stack.pop();
      continue;
    }
    if (char === '}') {
      if (top() !== '{') return false;
      stack.pop();
    }
  }

  if (stack.length > 0) return false;

  return true;
};

console.log(isValid((s = '()')));
console.log(isValid((s = '()[]{}')));
