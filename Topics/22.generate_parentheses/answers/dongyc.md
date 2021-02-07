```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let idx = 0;
  let res = ['()'];
  while (++idx < n) {
    // 每次的新组合结果依赖于上一次的结果
    res = res.reduce((acc, curr) => {
      let charIdx = -1;
      const currrLen = curr.length;
      while (++charIdx < currrLen) {
        const left = curr.substring(0, charIdx);
        const right = curr.substring(charIdx);
        const newRes = left + '()' + right;
        // 在上一次结果每个成员的每个位置插入括号
        !acc.includes(newRes) && acc.push(newRes);
      }
      return acc;
    }, []);
  }
  return res;
};
```
