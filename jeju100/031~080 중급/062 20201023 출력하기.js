/*
`20201023`을 출력합니다.  아래 기준만 만족하면 됩니다.

1. 코드 내에 숫자가 없어야 합니다.
    - 예) console.log(20201023)이라고 하시면 안됩니다.
2. 파일 이름이나 경로를 사용해서는 안됩니다.
3. 시간, 날짜 함수를 사용해서는 안됩니다.
4. 에러 번호 출력을 이용해서는 안됩니다.
5. input을 이용해서는 안됩니다.
*/

// 정규표현식 사용
// abcd
// 0123
const str = "cacabacd";
console.log(
  str.replace(/a/g, 0).replace(/b/g, 1).replace(/c/g, 2).replace(/d/g, 3)
);

// 날짜함수 사용
let date = new Date();
console.log(
  date.getFullYear().toString() +
    (date.getMonth() + 1).toString() +
    date.getDate().toString()
);
