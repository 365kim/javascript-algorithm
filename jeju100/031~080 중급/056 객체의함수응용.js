/*
다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

출력예시
England 22023
 */

let nationWidth = {
  Korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

let w = nationWidth.Korea;
delete nationWidth.Korea;
let entries = Object.entries(nationWidth);
console.log(entries);
let values = Object.values(nationWidth);
console.log(entries);
let gap = Math.max(...values);
let entry;
console.log(gap);
for (let i in entries) {
  if (gap > Math.abs(entries[i][1] - w)) {
    gap = Math.abs(entries[i][1] - w;
    entry = entries[i];
  }
}
console.log(entry[0], entry[1] - w);
