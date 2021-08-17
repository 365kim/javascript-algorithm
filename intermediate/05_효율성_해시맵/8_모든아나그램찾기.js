/*
T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
아나그램 판별시 대소문자가 구분됩니다.
부분문자열은 연속된 문자열이어야 합니다.

- 투포인터, 슬라이딩윈도우, 해시 모두 적용

*/

const solution = (str1, str2) => {
  const strLong = str1.length > str2.length ? str1 : str2;
  const strShort = str1.length > str2.length ? str2 : str1;
  const mapLong = new Map();
  const mapShort = new Map();
  const lenLong = strLong.length;
  const lenShort = strShort.length;

  const isSameMap = (map1, map2) => {
    if (map1.size !== map2.size) {
      return false;
    }
    for (const [key, value] of map1.entries()) {
      if (map2.get(key) !== value) {
        return false;
      }
    }
    return true;
  };
  let answer = 0;

  strShort.split('').forEach((char) => {
    const newValue = mapShort.has(char) ? mapShort.get(char) + 1 : 1;

    mapShort.set(char, newValue);
  });

  for (let i = 0; i < lenShort; i++) {
    const char = strLong[i];
    const newValue = mapLong.has(char) ? mapLong.get(char) + 1 : 1;

    mapLong.set(char, newValue);
  }

  for (let i = lenShort - 1; i < lenLong; i++) {
    answer += Number(isSameMap(mapLong, mapShort));

    const leftKey = strLong[i - lenShort + 1];
    const leftValue = mapLong.get(leftKey);
    const newRightKey = strLong[i + 1];

    // left 삭제를 right 추가보다 먼저 해야 로직이 꼬이지 않는다.
    if (leftValue === 1) {
      mapLong.delete(leftKey);
    } else {
      mapLong.set(leftKey, leftValue - 1);
    }

    if (mapLong.has(newRightKey)) {
      mapLong.set(newRightKey, mapLong.get(newRightKey) + 1);
    } else {
      mapLong.set(newRightKey, 1);
    }
  }

  return answer;
};

console.log(solution('bacaAacba', 'abc'));

// 3
