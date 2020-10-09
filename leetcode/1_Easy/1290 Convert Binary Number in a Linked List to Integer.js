/* https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/ */

const getDecimalValue = (head) => {
  let value = 0;
  let curr = head;

  while (curr) {
    value = value * 2 + curr.val;
    curr = curr.next;
  }
  return value;
};

console.log(getDecimalValue((head = [1, 0, 1])));

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
