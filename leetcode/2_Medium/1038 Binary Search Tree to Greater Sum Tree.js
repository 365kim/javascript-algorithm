/* https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/ */

var bstToGst = function (root) {
  let sum = 0;
  const rightParentLeft = (parent) => {
    if (parent === null) return;

    rightParentLeft(parent.right);
    parent.val += sum;
    sum = parent.val;
    rightParentLeft(parent.left);
  };

  rightParentLeft(root);
  return root;
};

console.log(
  bstToGst([4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8])
);
