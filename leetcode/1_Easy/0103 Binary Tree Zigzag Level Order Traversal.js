/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
  if (!root) return [];
  let answer = [];
  let curLevelNodes = [root];
  let level = 0;

  while (curLevelNodes.length > 0) {
    const isFromLeftToRight = level % 2 === 0;
    const curLevelValues = curLevelNodes.map((node) => node.val);

    answer.push(isFromLeftToRight ? curLevelValues : curLevelValues.reverse());

    // 다음 level 준비
    curLevelNodes = curLevelNodes.reduce((acc, cur) => {
      if (cur.left) acc.push(cur.left);
      if (cur.right) acc.push(cur.right);
      return acc;
    }, []);
    level++;
  }

  return answer;
};
