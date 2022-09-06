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
var hasCycle = function(h) {
    let n = h;
    while (n && h) {
        if (!n.next) return false;
        n = n.next.next;
        if (n == h) return true;
        h = h.next;
    }
    return false;
};