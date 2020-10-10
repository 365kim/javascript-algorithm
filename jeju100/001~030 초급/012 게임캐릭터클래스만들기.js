/*
다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
주어진 소스코드를 수정해선 안됩니다.

출력결과:
545 210 10
파이어볼

*/

// class 작성
class Wizard {
  constructor(health, mana, armor) {
    // 객체 초기화 : 객체 생성시 반드시 실행되는 생성자 함수

    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack() {
    console.log("파이어볼");
  }
}

// 소스코드
const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
