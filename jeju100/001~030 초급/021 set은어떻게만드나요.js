/*
다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1)  let x = {1, 2, 3, 5, 6, 7};
2)  let x = {}; //객체
3)  let x = new Set('javascript'); <- 정답
4)  let x = new Set(range(5));
5)  let x = new Set(); <- 정답
*/

// Set : 중복되지 않는 데이터를 저장하는 데이터 구조
// add, delete, has 메서드
const list = [1, 1, 2, 2, 3, 4, 5, 6];
let set = new Set(list);

console.log(set);
console.log(set.add(7)); // 결과 반환
console.log(set.delete(7)); // 삭제여부 반환
console.log(set.has(10)); // 존재여부 반환