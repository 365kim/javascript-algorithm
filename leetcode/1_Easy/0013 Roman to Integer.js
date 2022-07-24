const map = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

const romanToInt = (s) => {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length) {
      const twoDigits = s[i] + s[i + 1];
      const twoDigitsToInt = map[twoDigits];

      if (twoDigitsToInt) {
        result += twoDigitsToInt;
        i++;
        continue;
      }
    }

    const oneDigit = s[i];
    const oneDigitToInt = map[oneDigit];
    result += oneDigitToInt;
  }

  return result;
};

console.log(romanToInt('III')); // 3
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
