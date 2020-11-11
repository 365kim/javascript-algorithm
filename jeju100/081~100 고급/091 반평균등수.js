/*
한 반에 30명인 학생, 총 7개의 반 점수가 '국어, 영어, 수학, 사회, 과학' 순서로 있는 다중 리스트를 랜덤 한 값으로 만들어주시고 아래 값을 모두 출력하세요.

1. 반 점수 모두가 담긴 전교 점수 다중 리스트를 만들어주세요.
2. 반 평균을 구하세요.
3. 반 1등 점수를 구하세요.
4. 전교 평균을 구하세요.

(출력 형식은 상관없습니다.)
*/

const generateData = (classNum, classSize, subjectNum) => {
  let res = [];
  while (res.length < classNum) {
    let oneClass = [];
    while (oneClass.length < classSize) {
      let oneStudent = [];
      while (oneStudent.length < subjectNum) {
        let score = Math.round(Math.random() * 100);
        oneStudent.push(score);
      }
      oneClass.push(oneStudent);
    }
    res.push(oneClass);
  }
  return res;
};

const getClassAverage = (data) => {
  let res = [];
  for (let oneClass of data) {
    let sum = 0;
    for (let oneStudent of oneClass) {
      oneStudent.forEach((v) => (sum += v));
    }
    res.push(Math.round(sum / (data[0].length * data[0][0].length)));
  }
  return res;
};

const getAce = (data) => {
  let res = [];
  for (let oneClass of data) {
    let ace = [];
    let aceSum = 0;
    for (let oneStudent of oneClass) {
      let tmp = oneStudent.reduce((acc, val) => (acc += val), 0);
      if (tmp > aceSum) {
        ace = oneStudent;
        aceSum = tmp;
      } else if (tmp === aceSum) {
        ace.push(oneStudent);
      }
    }
    res.push(ace);
  }
  return res;
};

const getWholeAverage = (data) => {
  let sum = 0;
  for (let oneClass of data) {
    for (let oneStudent of oneClass) {
      oneStudent.forEach((v) => (sum += v));
    }
  }
  return Math.round(sum / (data.length * data[0].length * data[0][0].length));
};

const data = generateData(7, 30, 5);
const classAverage = getClassAverage(data);
const ace = getAce(data);
const wholeAverage = getWholeAverage(data);
console.log(
  "data",
  data,
  "classAverage",
  classAverage,
  "ace",
  ace,
  "wholeAverage",
  wholeAverage
);
