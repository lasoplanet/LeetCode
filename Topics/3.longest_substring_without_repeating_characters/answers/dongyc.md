```javascript
function getLongestChars(str) {
  let repeatedIdxes = [];
  let prev = 0;
  let result = 0;
  let idx = -1;
  const dict = {};
  for (let i = 0;i < str.length;i++) {
    if (str[i] in dict) {
      // 记录所有重复索引
      repeatedIdxes.push(i);
    } else {
      dict[str[i]] = void 0;
    }
  }

  while (++idx < repeatedIdxes.length) {
    // 用上次 - 本次索引得到无重复字串长度
    result = repeatedIdxes[idx] - prev > result ? repeatedIdxes[idx] - prev : result;
    // 记录上个重复索引
    prev = repeatedIdxes[idx];
  }
  return result;
}```
