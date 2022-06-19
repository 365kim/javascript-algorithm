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
const levelOrder = (root) => {
  let levels = [];

  if (!root || !root.val) levels;

  let queue = [root];

  while (queue.length !== 0) {
    let level = [];
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      let node = queue.shift();

      if (node) level.push(node.val);
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }

    if (level.length !== 0) levels.push(level);
  }

  return levels;
};
