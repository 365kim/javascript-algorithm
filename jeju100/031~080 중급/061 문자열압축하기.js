/*
문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

입력
aaabbbbcdddd

출력
a3b4c1d4
*/

const countChar = (str) => {
  let cur = str[0];
  let count = 1;
  let result = "";
  for (let i = 1; i < str.length; i++) {
    if (cur !== str[i]) {
      result += cur + count;
      count = 1;
      cur = str[i];
    } else {
      count++;
    }
  }
  result += cur + count;
  return result;
};

console.log(countChar("aaabbbbcdddd"));
