/* https://leetcode.com/problems/queries-on-a-permutation-with-key/ */

const processQueries = (queries, m) => {
  let len = queries.length;
  let answers = new Array();
  let permutation = new Array(m).fill().map((v, i) => i + 1);

  for (let i = 0; i < len; i++) {
    let q = queries[i];
    let p = permutation.indexOf(q);

    answers.push(p);
    permutation = [].concat(
      q,
      permutation.slice(0, p),
      permutation.slice(p + 1)
    );
  }
  return answers;
};

console.log(processQueries([10, 7, 3, 3, 9, 4, 1, 4, 9, 9], 10));
// Expected [9,7,4,0,9,6,5,1,2,0]
