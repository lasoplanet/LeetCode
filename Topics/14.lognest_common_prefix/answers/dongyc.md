```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const len = strs.length;
  let res = '';
  if (!len) {
    return res;
  }
  let shortestLen = strs[0].length;
  let idx = 0;

  while (++idx < len) {
    shortestLen = Math.min(shortestLen, strs[idx].length);
  }
  idx = -1;

  outer: while (++idx < shortestLen) {
    let innerIdx = 0;
    const other = strs[innerIdx][idx];
    
    while (innerIdx < len) {
      const current = strs[innerIdx][idx];

      if (current !== other) {
        break outer;
      } else {
        if (innerIdx === len - 1) {
          res += current;
        }
        innerIdx++;
      }
    }
  }

  return res;
};
```
