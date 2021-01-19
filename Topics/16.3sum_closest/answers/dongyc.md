```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  function compare(a, b) {
    if (a < b ) {
      return -1;
    }
    if (a > b ) {
      return 1;
    };

    return 0;
  }
  const len = nums.length;
  nums = nums.sort(compare);
  let res = Number.MAX_SAFE_INTEGER;
  let idx = -1;

  while (++idx < len) {
    let start = idx + 1;
    let end = len - 1;
    
    while (start < end) {
      if (start === idx) {
        start++;
        continue;
      } else if (end === idx) {
        end--;
        continue;
      }
      let sum = nums[start] + nums[idx] + nums[end];
      if (sum === target) {
        return sum;
      }

      if (Math.abs(target - sum) < Math.abs(target - res)) {
        res = sum;
      }
      
      if (sum < target) {
        start++;
      } else if (sum > target) {
        end--;
      }
    }
  }

  return res;
};
```
