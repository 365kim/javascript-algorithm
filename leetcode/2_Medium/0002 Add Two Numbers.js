/* https://leetcode.com/problems/add-two-numbers/ */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const addTwoNumbers = (list1, list2) => {
  let root = new ListNode(-1);
  let cur = root;
  let carry = 0;

  while (list1 || list2 || carry !== 0) {
    const val1 = list1?.val ?? 0;
    const val2 = list2?.val ?? 0;
    let sum = val1 + val2 + carry;

    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }

    cur.next = new ListNode(sum);
    cur = cur.next;

    if (list1) list1 = list1.next;
    if (list2) list2 = list2.next;
  }

  return root.next;
};
