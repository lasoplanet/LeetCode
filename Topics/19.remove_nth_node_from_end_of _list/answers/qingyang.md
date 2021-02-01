```JavaScript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const tmpTab = [];
    let tmpNode = head;
    while(tmpNode) {
        tmpTab.push(tmpNode);
        if (tmpTab.length > n + 1) {
            tmpTab.shift();
        }
        tmpNode = tmpNode.next;
    }
    if (tmpTab.length === n + 1) {
        tmpTab[0].next = n === 1 ? null : tmpTab[2];
    }  else {
        return head.next;
    }
    return head;
    
};
```
