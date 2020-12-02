#### 方法 1——数组
```javascript
var addTwoNumbers = function(l1, l2) {
  let len = l1.length > l2.length ? l1.length : l2.length;
  let result = [];
  let addOne = false;
  for(let i = 0; i < len; i++) {
    let sum = (l1[i] || 0) + (l2[i] || 0);
    if (addOne) {
      sum += 1;
    }
    if (sum > 9) {
      sum -= 10;
      addOne = true;
    } else {
      addOne = false;
    }
    result.push(sum);
  }
  if (addOne) {
    result.push(1);
  }
  return result;
}

```

codepen 链接：https://codepen.io/ybwdaisy/pen/bGwdoxQ

#### 方法 2——链表
```javascript
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function(l1, l2) {
  let listNode = new ListNode()
  let addOne = false;
  let ln = listNode;
  while(l1 || l2) {
    let sum = (l1 && l1.val || 0) + (l2 && l2.val || 0);
    if (addOne) {
      sum += 1;
    }
    if (sum > 9) {
      sum -= 10;
      addOne = true;
    } else {
      addOne = false;
    }

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;

    ln.val = sum;
    if (l1 || l2) {
      ln.next = new ListNode();
      ln = ln.next;
    }
  }

  if (addOne) {
    ln.next = new ListNode(1);
  }

  return listNode;
}

```

codepen 链接：https://codepen.io/ybwdaisy/pen/BaLoobB