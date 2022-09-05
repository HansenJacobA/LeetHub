/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head == null) return head;
    const list = [];
    while (head) {
        list.push(head);
        head = head.next;
    }
    head = list[list.length - 1];
    for (let i = list.length - 2; i >= 0; i -= 1) {
        head.next = list[i];
        head = head.next;
    }
    head.next = null;
    return list.pop();
};