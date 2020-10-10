/* 
유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.

입력으로 키가 주어지면
키가 150보다 크거나 같으면 'YES'를, 틀리면 'NO'를 출력하는 프로그램을 작성하세요.
*/

const checkHeight = (height) => {
  if (height > 150) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};
