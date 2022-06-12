/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  const head = list1.val <= list2.val ? list1 : list2;
  let cur = head;
  let p1 = list1.val <= list2.val ? list1.next : list1;
  let p2 = list1.val <= list2.val ? list2 : list2.next;

  while (p1 || p2) {
    if (!p2 || (p1 && p1.val <= p2.val)) {
      cur.next = p1;
      cur = cur.next;
      p1 = p1.next;
      continue;
    }
    cur.next = p2;
    cur = cur.next;
    p2 = p2.next;
  }
  return head;
};
