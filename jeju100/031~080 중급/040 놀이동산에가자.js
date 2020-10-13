/*
테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다. 

원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

입력
50 <- 제한무게
5 <- 인원수
20
20
20
20
20

출력
2
*/

const weightLimit = prompt("무게 제한을 입력해주세요");
const memberNum = prompt("몇 명이 탈 계획인가요?");
let count = 0;
let accWeight = 0;
for (let i = 0; i < memberNum; i++) {
  accWeight += parseInt(prompt("몸무게를 입력해주세요"), 10);
  if (accWeight <= weightLimit) {
    count++;
  }
}

console.log(count);
