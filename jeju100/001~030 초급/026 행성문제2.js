/*
우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.
*/

const planets = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune",
};

let str = "수성"
console.log(planets[str]);
// Mercury
console.log(planets.str);
// undefined
console.log(planets.수성);
// Mercury

// .연산자 다음에는 반드시 (변수가 아닌) 키값이 와야 함
// 객체에서 변수로 접근하려면 각괄호를 사용해야 함