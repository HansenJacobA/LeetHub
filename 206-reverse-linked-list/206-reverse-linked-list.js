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

//set the current to head
//set the prev to null
//set the next to null

//while current is not null
    //save next
    //reverse
    //advance prev and curr
//return prev



var reverseList = function(head) {
    let curr = head
    let prev = null
    let next = null
 
    while(curr !== null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev
};