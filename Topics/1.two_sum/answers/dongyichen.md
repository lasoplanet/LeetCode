```javascript
var twoSum = function (nums, target) {
  const obj = {};
  nums.forEach((n, idx) => {
    if (n.toString() in obj && !n.toString() + "|" in obj) {
      obj[n + "|"] = idx;
    } else {
      obj[n] = idx;
    }
  });

  let idx = -1;
  while (++idx < nums.length) {
    const curr = nums[idx];
    const diff = (target - curr).toString();
    const result = [idx];

    if (diff in obj && obj[diff] !== idx) {
      result.push(obj[diff]);
      return result;
    } else if (target / curr === 2 && curr + "|" in obj) {
      // 如果有重复并且结果为当前值2倍
      result.push(obj[curr.toString()]);
    }
  }
};
```

解题思路：生成一个key为数字，值为索引的map，并且用key标示出重复，之后再遍历一次去找对应key的值有无存在，如果map中存在或此数字*2为结果，则返回索引
