/* https://leetcode.com/problems/remove-outermost-parentheses/ */

const removeOuterParentheses = (S) => {
  let answer = "";
  let [OPENER, CLOSER] = ["(", ")"];
  let balance = 0;
  let start = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === OPENER) {
      balance++;
    } else {
      balance--;
    }
    if (balance === 0) {
      answer += S.slice(start + 1, i);
      start = i + 1;
    }
  }
  return answer;
};

console.log(removeOuterParentheses("(()())(())"));
