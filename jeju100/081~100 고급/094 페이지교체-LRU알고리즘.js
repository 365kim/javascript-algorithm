/*
LRU 알고리즘이란 페이지 교체 알고리즘으로써, Least Resently Used의 약자입니다. 즉 페이지 부재가 발생했을 경우 가장 오랫동안 사용되지 않은 페이지를 제거하는 알고리즘입니다.
이 알고리즘의 기본 가설은 가장 오랫동안 이용되지 않은 페이지는 앞으로도 사용할 확률이 적다는 가정하에 페이지 교체가 진행됩니다.
다음 그림을 참고해주세요.

메모리의 크기가 i로 주어지고 들어올 페이지들이 n으로 주어졌을 때, 전체 실행시간을 구해주세요.

만약 스택 안에 같은 스케줄이 있다면 hit 이라고 하며 실행시간은 1초 입니다. 스택 안에 스케줄이 없다면 miss 라고 하며 실행시간은 6초 입니다.

입출력예시
BCBAEBCE, 3
33

*/

const replacePage = (pages, nFrame) => {
  let frame = [];
  let count = 0;
  for (let p of pages) {
    let idx = frame.indexOf(p);
    if (idx != -1) {
      frame.splice(idx, 1);
      frame.push(p);
      count += 1;
      continue;
    }
    if (frame.length === 3) {
      frame.shift();
    }
    frame.push(p);
    count += 6;
  }
  return count;
};

console.log(replacePage("BCBAEBCE", 3));
