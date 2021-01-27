/* https://leetcode.com/problems/most-common-word/ */

var mostCommonWord = function (paragraph, banned) {
  let string = paragraph
    .slice()
    .replace(/[!?',;.]/g, ' ')
    .toLowerCase()
    .split(' ')
    .filter((v) => v);
  let frequency = {};
  let mostCommon = '';
  let candidates = [];

  string.forEach(
    (v) => (frequency[v] = frequency[v] === undefined ? 1 : ++frequency[v])
  );
  candidates = Object.keys(frequency);
  for (let c of candidates) {
    if (banned.includes(c)) {
      continue;
    }
    if (frequency[c] > (frequency[mostCommon] || 0)) {
      mostCommon = c;
    }
  }
  return mostCommon;
};

console.log(
  mostCommonWord(
    (paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.'),
    (banned = ['hit'])
  )
); // "ball"
