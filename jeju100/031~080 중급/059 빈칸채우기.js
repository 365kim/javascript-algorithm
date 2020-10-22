/*
총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면
그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.

입력
hi

출력
========================hi========================
*/

const alignCenter = (str) => {
  let totalLen = 50;
  let left = str.padStart(totalLen / 2 + str.length / 2, "-");
  // 시작하는 부분을 25 + 1 까지 채워준다
  return left.padEnd(totalLen, "-");
  // 끝나는 부분을 50까지 채워준다
};

console.log(alignCenter("hi"));
