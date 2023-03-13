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
  const answer = [];
  if (root === null) return answer;

  let parents = [root];

  while (parents.length > 0) {
    const valuesOfLevel = parents.map((node) => node.val);
    const filteredValuesOfLevel = valuesOfLevel.filter((v) => v !== null);

    const level = answer.length;
    const isLeftToRight = level % 2 === 0;
    answer.push(isLeftToRight ? filteredValuesOfLevel : filteredValuesOfLevel.reverse());

    const children = parents.reduce((acc, cur) => [...acc, cur.left, cur.right], []);
    const filteredChildren = children.filter((v) => v !== null);
    parents = filteredChildren;
  }

  return answer;
};

/**
 * @link https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/2008737
 */
function zigzagLevelOrder2(root) {
  let answer = [];
  traverse(root, answer, 0);

  return answer;
}

function traverse(node, answer, level) {
  if (!node) return;

  if (answer[level] === null) {
    answer.push([]);
  }

  if (level % 2 === 0) {
    answer[level].push(node.val);
  } else {
    answer[level].unshift(node.val);
  }

  traverse(node.left, answer, level + 1);
  traverse(node.right, answer, level + 1);
}
