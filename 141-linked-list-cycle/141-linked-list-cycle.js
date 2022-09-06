/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false;
    let single = head;
    let double = head && head.next ? head.next : null;
    while (single && double) {
        if (single == double) break;
        single = single.next;
        double = double.next ? double.next.next : null;
    }
    return single == double;
};