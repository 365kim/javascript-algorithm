/**
 * @param {string} digits
 * @return {string[]}
 */

const PHONE_MAP = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

const letterCombinations = (digits) => {
  let answer = [];

  for (const digit of digits) {
    const alphas = PHONE_MAP[digit];

    if (answer.length === 0) {
      answer = alphas;
    } else {
      answer = alphas.reduce((acc, cur) => [...acc, ...answer.map((elem) => elem + cur)], []);
    }
  }
  return answer;
};

describe('My Solution', () => {
  test('case 1', () => {
    expect(letterCombinations('23')).toEqual(
      expect.arrayContaining(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
    );
  });

  test('case 2', () => {
    expect(letterCombinations('')).toEqual([]);
  });

  test('case 3', () => {
    expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
  });
});
