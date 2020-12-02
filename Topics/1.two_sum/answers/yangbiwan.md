代码
```
function getTwoSum(nums, target) {
  let totals = [];
  let len = nums.length;
  for(let i = 0; i < len; i++) {
    let item = nums[i];
    for (let j = i + 1; j < len; j++) {
      totals.push({
        target: item + nums[j],
        from: i,
        to: j
      })
    }
  }
  let targetInfo = {
    from: -1,
    to: -1,
  }
  for (let k = 0, klen = totals.length; k < klen; k++) {
    if (totals[k].target === target) {
      targetInfo = totals[k];
    }
  }
  return [targetInfo.from, targetInfo.to]
}
```

codepen 链接：https://codepen.io/ybwdaisy/pen/bGwNzaO

解题思路：先将 `nums` 中所有元素两两相加求和，并将和与索引缓存在数组中，最后循环该数组找到与 `target` 匹配的元素。