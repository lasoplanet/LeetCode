####实现代码
```
var addTwoNumbers = function(l1, l2) {
     let addSum = new ListNode();
     let addReturnSum = addSum;
     let newl1 = l1;
     let newl2 = l2;
     while(newl1 || newl2){
         var val1 = newl1.val || 0;
         var val2 = newl2.val || 0;
         newl1 = newl1.next || 0;
         newl2 = newl2.next || 0;
         newSum = val1 + val2 + addSum.val;
         if (newSum >= 10){
              addSum.val = newSum-10;
              addSum.next = new ListNode(1);
         }else {
              addSum.val = newSum;
              if(newl1 || newl2){
                   addSum.next = new ListNode();
              }
         }
         addSum = addSum.next;
     }
     return addReturnSum
};
```
### codepan链接
https://codepen.io/xiaoxuan520/pen/qBadJLR


