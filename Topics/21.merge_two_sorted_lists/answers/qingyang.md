```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) {
        return null;
    }
    var node1 = l1;
    var node2 = l2;
    var retNode = new ListNode();
    var tmpRetNode = retNode;
    while(node1 || node2) {
        if (!node1) {
            tmpRetNode.val = node2.val
            tmpRetNode.next = node2.next;
            break;
        }
        if (!node2) {
            tmpRetNode.val = node1.val;
            tmpRetNode.next = node1.next;
            break;
        }
        if (node1.val > node2.val) {
            tmpRetNode.val = node2.val;
            node2 = node2.next;
        } else {
            tmpRetNode.val = node1.val;
            node1 = node1.next;
        }
        if (node1 || node2) {
            tmpRetNode.next = new ListNode();
            tmpRetNode = tmpRetNode.next;
        }
    }

    return retNode;

};
```
