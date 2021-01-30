#### 解法类似三数之和
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var res = [];
    var len = nums.length;
    if (len < 4) {
        return res;
    }
    if (len === 4) {
        var sum = nums.reduce((prev, current)=>{
            return prev + current;
        })
        if (sum === target) {
            return [nums];
        } else {
            return res;
        }
    }
    nums.sort((a, b) => a - b);
    for (var m = 0; m < len - 3; m++) {
        var n0 = nums[m];

        if (n0 === nums[m - 1]) {
            continue;
        }

        for (var i = m + 1; i <= len - 2; i++) {
            var n1 = nums[i];
            if (n1 === nums[i - 1] && i > m + 1) {
                continue;
            }
    
            var left = i + 1;
            var right = len - 1;
    
            while(left < right) {
                var n2 = nums[left];
                var n3 = nums[right];
    
                if (n0 + n1 + n2 + n3 === target) {
                    res.push([n0, n1, n2, n3]);
                    while(left < right && nums[left] == n2) {
                        left++;
                    }
                    while(left < right && nums[right] == n3) {
                        right--;
                    }
                } else if (n0 + n1 + n2 + n3 < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return res;
};
```