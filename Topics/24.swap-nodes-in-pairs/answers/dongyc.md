```javascript
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let count = 0;
  const res = head.next;
  let curr = head;
  let prev = null;
  while (curr) {
    if (count % 2 === 0 && curr.next) {
      // 只在偶数次执行，与相邻交换并且将上次遍历结束的节点next指针指向交换后的
      const tmp = curr;
      curr = curr.next;
      tmp.next = curr.next;
      curr.next = tmp;
      if (prev) {
        prev.next = curr;
      }
    }
    count++;
    prev = curr;
    curr = curr.next;
  }
  return res;
};
```
