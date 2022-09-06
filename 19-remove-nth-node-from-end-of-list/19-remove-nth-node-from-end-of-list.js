var removeNthFromEnd = function(head, n) {
    let prev = null;
    let curr = head;
    let next = head ? head.next : null;
    while (curr) {
        curr.next = prev;
        prev = curr;
        curr = next;
        next = curr ? curr.next : null;
    }
    let nodePrev = null;
    let node = prev;
    while (n > 1 && node) {
        n -= 1;
        nodePrev = node;
        node = node.next;
    }
    if (nodePrev && node) {
        nodePrev.next = node.next;
    } else {
        prev = prev.next;
    }
    curr = prev;
    next = prev ? prev.next : null;
    prev = null;
    while (curr) {
        curr.next = prev;
        prev = curr;
        curr = next;
        next = curr ? curr.next : null;
    }
    return prev;
};