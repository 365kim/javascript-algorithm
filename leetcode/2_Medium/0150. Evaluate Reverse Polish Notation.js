const operate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return Math.trunc(a / b);
  }
};

/**
 * @param {string[]} tokens
 * @return {number}
 */

const evalRPN = (tokens) => {
  const getValidNumberTokens = (cur) => {
    let backwardIndex = cur;
    const answer = [];

    while (backwardIndex >= 0 && answer.length !== 2) {
      const char = tokens[backwardIndex];
      const num = Number(char);
      const visited = char === null;
      if (!visited && !Number.isNaN(num)) {
        answer.push(num);
        tokens[backwardIndex] = null;
      }
      backwardIndex--;
    }
    return answer;
  };

  let i = 0;

  while (i < tokens.length) {
    const char = tokens[i];

    if (!Number.isNaN(Number(char))) {
      i++;
      continue;
    }

    const [a, b] = getValidNumberTokens(i);
    const result = operate(b, a, char);

    tokens[i] = result;
    i++;
  }

  return tokens[tokens.length - 1];
};
