/* https://leetcode.com/problems/add-two-numbers/ */

let addTwoNumbers = (list1, list2) => {
  let root = new ListNode();
  let curr = root;

  let [num1, num2, sum] = ["", "", 0];

  while (list1) {
    num1 += list1.val;
    list1 = list1.next;
  }
  while (list2) {
    num2 += list2.val;
    list2 = list2.next;
  }

  sum =
    BigInt([...num1].reverse().join("")) + BigInt([...num2].reverse().join(""));
  sum = [...sum.toString()].reverse();

  for (let i = 0; i < sum.length - 1; i++) {
    curr.val = sum[i];
    curr.next = new ListNode();
    curr = curr.next;
  }
  curr.val = sum[sum.length - 1];
  return root;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
