/*
입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
*/

const solution = (str) => {
  const stack = [];

  for (const char of str) {
    if (char === ')') {
      while (stack.pop() !== '(');
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
};

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
// 'EFLM'
