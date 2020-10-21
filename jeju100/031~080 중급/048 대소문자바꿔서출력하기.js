/*
문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD

*/

const swapUpperWithLower = (str) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res +=
      str[i].toUpperCase() === str[i]
        ? str[i].toLowerCase()
        : str[i].toUpperCase();
  }
  console.log(res);
};

swapUpperWithLower("AAABBBcccddd");
// "aaabbbCCCDDD"
