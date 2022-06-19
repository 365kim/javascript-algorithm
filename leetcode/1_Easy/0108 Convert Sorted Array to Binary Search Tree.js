/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const recursive = (node, array) => {
  if (array.length === 1) {
    node.val = array[0];
    return;
  }
  let mid = Math.floor(array.length / 2);
  node.val = array[mid];

  const leftArray = array.slice(0, mid);

  if (leftArray.length >= 1) {
    recursive((node.left = new TreeNode()), leftArray);
  }

  const rightArray = array.slice(mid + 1);

  if (rightArray.length >= 1) {
    recursive((node.right = new TreeNode()), rightArray);
  }
};

const sortedArrayToBST = (nums) => {
  const root = new TreeNode();
  const sortedNums = nums.sort((a, b) => a - b);

  recursive(root, sortedNums);

  return root;
};
