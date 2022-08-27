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
 * @return {number[]}
 */

// inorder(중위순회): left-visit-right
const inorderTraversal = (root) => {
  const answer = [];

  const recursive = (parent) => {
    if (!parent) return;

    recursive(parent.left);
    answer.push(parent.val);
    recursive(parent.right);
  };

  recursive(root);

  return answer;
};
