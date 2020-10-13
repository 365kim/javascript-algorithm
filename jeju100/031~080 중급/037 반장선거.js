/*
새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  
그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.


입력
원범 원범 혜원 혜원 혜원 혜원 유진 유진

출력
혜원(이)가 총 4표로 반장이 되었습니다.
*/

const solution = (str) => {
  let array = str.split(" ");
  let res = {};

  for (let i in array) {
    let v = array[i];
    res[v] = res[v] === undefined ? 1 : ++res[v];
  }
  // {원범: 2, 혜원: 4, 유진: 2}
  let winner = Object.keys(res).reduce((acc, cur) =>
    res[acc] >= res[cur] ? acc : cur
  );
  console.log(`${winner}(이)가 총 ${res[winner]}표로 반장이 되었습니다`);
};

solution("원범 원범 혜원 혜원 혜원 혜원 유진 유진");

const printResult = (str) => {
  let candidates = Array.from(new Set(str.split(" ")));
  let scores = new Array(candidates.length).fill(0);
  for (let vote of str.split(" ")) {
    let idx = candidates.indexOf(vote);
    scores[idx]++;
  }
  let res = [];
  for (let i = 0; i < candidates.length; i++) {
    res.push([candidates[i], scores[i]]);
  }
  res.sort((a, b) => b[1] - a[1]);
  console.log(`${res[0][0]}(이)가 총 ${res[0][1]}표로 반장이 되었습니다`);
};

printResult("원범 원범 혜원 혜원 혜원 혜원 유진 유진");
