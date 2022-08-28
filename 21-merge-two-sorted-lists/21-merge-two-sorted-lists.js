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
var mergeTwoLists = function(headOne, headTwo) {
    if (!headOne) return headTwo;
    if (!headTwo) return headOne;
      let p1 = headOne; 
      let prev = null;
      let p2 = headTwo;

      while (p1 && p2) {
        if (p1.val < p2.val) {
          prev = p1;
          p1 = p1.next;
        } else {
          if (prev !== null) {
            prev.next = p2;
          }
          prev = p2;
          p2 = p2.next;
          prev.next = p1;
        }
        if (p1 === null) prev.next = p2;
      }
      return headOne.val < headTwo.val ? headOne : headTwo;
};