```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let end = height.length;
  let res = 0;

  while (end--) {
    let start = -1;
    while (++start < end) {
      const currHeight = Math.min(height[start], height[end]);
      res = Math.max(currHeight * (end - start), res);
    }
  }

  return res;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
```
