```javascript
var mergeTwoLists = function(l1, l2) {
  let res;
  let resCurr;
  let curr1 = l1;
  let curr2 = l2;
  if (!curr1 && !curr2) {
    return curr1;
  }
  while (curr1 || curr2) {
    if (!curr1) {
      min = curr2;
      curr2 = curr2.next;
    } else if (!curr2) {
      min = curr1;
      curr1 = curr1.next;
    } else {
      if (curr1.val < curr2.val) {
        min = curr1;
        curr1 = curr1.next;
      } else {
        min = curr2;
        curr2 = curr2.next;
      }
    }
    const node = new ListNode(min.val);
    if (!res) {
      res = resCurr = node;
    } else {
      resCurr = resCurr.next = node;
    }
  }
  return res;
};
```
