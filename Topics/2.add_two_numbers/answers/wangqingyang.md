## 实现代码

```JavaScript
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
var addTwoNumbers = function(l1, l2) {
    var ret = new ListNode(0);
    var value1 = l1;
    var value2 = l2;
    var retValue = ret;
    while (value1 || value2) {
        var val1 = value1 ? value1.val : 0;
        var val2 = value2 ? value2.val : 0;
        var tmp = val1 + val2;

        var ten = Math.floor((tmp + retValue.val) / 10 );
        var one = (tmp + retValue.val) % 10;

        retValue.val = one;
        value1 = value1 ? value1.next : null;
        value2 = value2 ? value2.next : null;
        if (value1 || value2 || ten) {
            retValue.next = new ListNode(ten);
            retValue = retValue.next;
        }
    } 
    return ret;
};
```

## codepen

[链接](https://codepen.io/wiseqingyang/pen/BaLNPJX?editors=1112)


## 思路

