/*
영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
단, 소숫점 자리는 모두 버립니다.

입력 : 20 30 40
출력 : 30
*/

let score = "20 30 40";

const getAverage = (score) => {
  let scoreArr = score.split(" ");
  let num = scoreArr.length;
  return Math.floor(
    scoreArr.reduce((acc, cur) => (acc += parseInt(cur, 10)), 0) / num
  );
};

console.log(getAverage(score));
