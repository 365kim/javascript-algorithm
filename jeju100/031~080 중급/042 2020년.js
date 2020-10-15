/*
2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

제한 조건
2020년은 윤년입니다.
2020년 a월 b일은 실제로 있는 날입니다. 
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
*/

const daysEng = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const daysKor = ["일", "월", "화", "수", "목", "금", "토"];

const solution = (a, b) => {
  let theDate = new Date(`2020-${a}-${b}`);
  console.log(theDate);
  // 2020-10-15T00:00:00.000Z

  let theDay = theDate.getDay();
  console.log(theDay);
  // 4 (0부터 시작)

  let theDayEng = daysEng[theDay];
  let theDayKor = daysKor[theDay];
  console.log(theDayEng);
  // THU
  console.log(theDayKor);
  // 목
};

solution(10, 15);

const daysEn = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const daysKo = ["일", "월", "화", "수", "목", "금", "토"];

const dateToDay = (y, m, d) => {
  let theDate = new Date(`${y}-${m}-${d}`);
  console.log(theDate);
  // 2020-10-15T00:00:00.000Z

  let theDay = theDate.getDay();
  console.log(theDay);
  // 4 (0부터 시작)

  let theDayEn = daysEn[theDay];
  let theDayKo = daysKo[theDay];
  console.log(theDayEn);
  // THU
  console.log(theDayKo);
  // 목
};

dateToDay(2020, 10, 15);
