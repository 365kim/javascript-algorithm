/**
 * @param {number} n
 * @return {string[]}
 */

const generateParenthesis = (n) => {
  const queue = [{ str: '(', open: 1, close: 0 }];
  const answer = [];

  while (queue.length) {
    const item = queue.shift();
    const { str, open, close } = item;

    if (open === n && close === n) {
      answer.push(str);
      continue;
    }

    if (open < n) queue.push({ str: str + '(', open: open + 1, close });
    if (open > close) queue.push({ str: str + ')', open, close: close + 1 });
  }
  return answer;
};

describe('My Solution', () => {
  test('case 1', () => {
    expect(generateParenthesis(1)).toEqual(['()']);
  });

  test('case 2', () => {
    expect(generateParenthesis(2)).toEqual(expect.arrayContaining(['()()', '(())']));
  });

  test('case 3', () => {
    expect(generateParenthesis(3)).toEqual(expect.arrayContaining(['((()))', '(()())', '(())()', '()(())', '()()()']));
  });
});
