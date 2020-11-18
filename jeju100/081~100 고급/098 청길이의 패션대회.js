/*
패션의 선도주자 청길이는 패션의 발전을 위해 패션쇼를 방문해 유니크한 아이템을 조사하기로 하였습니다.
청길이는 입장하는 사람들의 패션에서 처음보는 아이템 만을 기록합니다. 
이때 청길이의 기록에서 아래 규칙에 맞게 배열로 출력해 주세요.

  1. 청길이는 각 옷의 종류를 정수로 기록해 놓습니다.
    ex) 입력은 "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4" 형태의 문자열입니다.
  2. 기록은 청길이가 번호 순서로 유니크한 옷의 번호를 적습니다.
  3. 유니크한 옷은 기록된 순서로 추출되고 출력됩니다.
    ex) 출력은 [3,1,4,2]입니다.

입출력예시

입력
"1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3"

출력
[4, 2, 3, 1]

입력
"1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4"

출력
[3, 1, 4, 2]
*/

const solution = (records) => {
  let res = [];
  let arrRecords = records
    .split(" ")
    .filter((v, i) => i % 2)
    .map((v) => v.split(","));
  let arrClothes = [];
  arrRecords.forEach((v) => (arrClothes = arrClothes.concat(v)));
  let set = new Set(arrClothes);
  return new Array(...set);
};

console.log(solution("1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3"));
console.log(solution("1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4"));
