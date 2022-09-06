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
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    let prev = null;
    let p1 = list1;
    let p2 = list2;
    while (p1 && p2) {
        if (p1.val <= p2.val) {
            prev = p1;
            p1 = p1.next;
        } else {
            if (prev !== null) prev.next = p2;
            prev = p2;
            p2 = p2.next;
            prev.next = p1;
        }
        if (p1 == null) prev.next = p2;
    }
    return list1.val <= list2.val ? list1 : list2;
};