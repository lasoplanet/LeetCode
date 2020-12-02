### 代码

```javascript
function isNumber(val) {
    return typeof val === 'number';
}
 
var addTwoNumbers = function(l1, l2) {
    const newArr = [];
    let index = 0;
    let isAdd = false;
    let l1Save = l1;
    let l2Save = l2;
    while(isNumber(l1Save.val) || isNumber(l2Save.val) || isAdd) {
    const addNum = l1Save.val + l2Save.val + (isAdd ? 1 : 0);
    isAdd = addNum > 9;
    newArr[index] = addNum % 10;
    index++;
    l1Save = l1Save.next || {val: null};
    l2Save = l2Save.next || {val: null};
    }
    return newArr.reverse().reduce((pre, cur) => {
        return new ListNode(cur, pre)
    }, undefined);
}
```

leetcode: https://leetcode-cn.com/problems/add-two-numbers/solution/ifushionxun-huan-bian-li-by-bo-zhou/

解题思路：while循环判断两个链表`l1Save`、`l2Save`是否有`val`或者否有进位`isAdd`。循环体中对val相加，有进位`isAdd`则再加1，根据相加结果重置`isAdd`状态，将结果取余后存入`newArr`中。最后链表移到下一位，再次循环。最后将`newArr`循环生成新的链表