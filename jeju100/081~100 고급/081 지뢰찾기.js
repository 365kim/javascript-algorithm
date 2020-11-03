/*
다음 그림처럼 깃발 주위에는 지뢰가 사방으로 있습니다. 
깃발의 위치를 입력받아 지뢰와 함께 출력해주는 프로그램을 만드세요.
https://www.notion.so/81-b18ce0051ecd4d7d9aa6cebbb966b679

입력
0 1 0 0 0
0 0 0 0 0
0 0 0 1 0
0 0 1 0 0
0 0 0 0 0
//"0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0"

출력
* f * 0 0
0 * 0 * 0
0 0 * f *
0 * f * 0
0 0 * 0 0

*/

const solution = (str) => {
  let strFlag = str.replace(/1/g, "f");
  let arr = strFlag.split("\n").map((v) => v.split(" "));
  let [height, width] = [arr.length, arr[0].length];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (arr[i][j] != "f") {
        continue;
      }
      i > 0 ? (arr[i - 1][j] = "*") : 0;
      j > 0 ? (arr[i][j - 1] = "*") : 0;
      i < height - 1 ? (arr[i + 1][j] = "*") : 0;
      j < width - 1 ? (arr[i][j + 1] = "*") : 0;
    }
  }
  return arr;
};

console.log(solution("0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0"));
