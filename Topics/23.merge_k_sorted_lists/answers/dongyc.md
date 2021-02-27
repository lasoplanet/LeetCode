```javascript
var mergeKLists = function(lists) {
  let res;
  let resCurr;
  const currs = lists.filter(Boolean);
  // 仅遍历所有非空链表
  const len = currs.length;
  if (!len) {
    return null;
  }
  while (currs.some(Boolean)) {
    let idx = minIdx = 0;
    // 默认[0]为最小节点, 从[1]开始遍历比较
    while (++idx < len) {
      const min = currs[minIdx];
      if (currs[idx] === null) {
        // 已到尾部，跳过
        continue;
      }
      const curr = currs[idx];
      if (min === null || curr.val < min.val) {
        // 若[0]已无其他节点或比上次的min更小
        minIdx = idx;
      }
    }
    const min = currs[minIdx];
    const node = new ListNode(min.val);
    if (!res) {
      res = resCurr = node;
    } else {
      resCurr = resCurr.next = node;
    }
    currs[minIdx] = min.next;
    minIdx = 0;
    // 将节点指向下一个并重置索引
  }
  return res;
};
```
