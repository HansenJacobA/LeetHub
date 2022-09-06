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
    if (!list1 || !list2) return list1 ? list1 : list2;
    const arr = [];
    while (list1) {
        arr.push(list1.val);
        list1 = list1.next;
    }
    while (list2) {
        arr.push(list2.val);
        list2 = list2.next;
    }
    arr.sort((a, b) => a - b);
    let newList = new ListNode(arr[0]);
    let newHead = newList;
    for (let i = 1; i < arr.length; i += 1) {
        newList.next = new ListNode(arr[i]);
        newList = newList.next;
    }
    return newHead;
};