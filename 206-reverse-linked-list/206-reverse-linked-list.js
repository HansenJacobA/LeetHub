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
    // Input - Linked List
    // Output - Reversed LL
    
    // Push all nodes into an array,
    // Reassign each node in reversed order
    // Return the reversed LL
    
    {ListNode} curr = head, prev = null, next = null;
    while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};