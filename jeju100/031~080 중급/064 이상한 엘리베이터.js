/*
정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.

예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

입력
정량 N이 입력됩니다.

출력
가장 적게 옮길 수 있는 횟수를 출력합니다.
만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.
*/

const strangeElevator = (n) => {
  let [capacityOfA, capacityOfB] = [7, 3];

  let quotientA = Math.floor(n / capacityOfA);
  let remainderA = n % capacityOfA;

  if (remainderA % capacityOfB !== 0) {
    console.log(-1);
  } else {
    console.log(quotientA + remainderA / capacityOfB);
  }
};

strangeElevator(24);
strangeElevator(4);
