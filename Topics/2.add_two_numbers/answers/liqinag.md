### 代码

```javascript
function isNumber(val) {
    return typeof val === 'number';
}
 
var addTwoNumbers = function(l1, l2) {
    const newArr = [];
    let isAdd = false;
    while(isNumber(l1.val) || isNumber(l2.val) || isAdd) {
        let addNum = l1.val + l2.val;
        if (isAdd) addNum += 1;
        isAdd = addNum > 9;
        newArr.push(addNum % 10);
        l1 = l1.next || {val: null};
        l2 = l2.next || {val: null};
    }
    return newArr.reverse().reduce((pre, cur) => {
        return new ListNode(cur, pre)
    }, undefined);
}
```

leetcode: https://leetcode-cn.com/problems/add-two-numbers/solution/ifushion-xun-huan-qiu-he-xun-huan-sheng-cheng-list/

解题思路：while循环判断两个链表`l1`、`l2`是否有`val`或者否有进位`isAdd`。循环体中对val相加，有进位`isAdd`则再加1，根据相加结果重置`isAdd`状态，将结果取余后存入`newArr`中。最后链表移到下一位，再次循环。最后将`newArr`循环生成新的链表。