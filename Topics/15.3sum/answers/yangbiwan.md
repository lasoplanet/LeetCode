#### 解法一：先将所有组合计算出来，再用哈希 map 去重；优点是可以扩展为从数组 arr 中取任意 n 个元素和为 m, 缺点是如果数组很长，超过几百之后，由于组合量指数上升导致计算很慢。
```javascript
var pickerItemsSumOfN = (arr, size, m) => {
    var allResult = [];

    var choosing = (arr, size, result) => {
        var arrLen = arr.length;
        if (size > arrLen) {
            return;
        }
        if (size === arrLen) {
            allResult.push([...result, ...arr]);
        } else {
            for (var i = 0; i < arrLen; i++) {
                var newResult = [...result];
                newResult.push(arr[i]);
                if (size === 1) {
                    allResult.push(newResult);
                } else {
                    var newArr = [...arr];
                    newArr.splice(0, i + 1);
                    choosing(newArr, size - 1, newResult);
                }
            }
        }
    };

    choosing(arr, size, []);

    var resMap = {};

    var result = allResult.filter((item) => {
        var key = item.sort((a, b) => a - b).join(',');
        var sum = item.reduce((prev, cur) => prev + cur);
        if (!resMap[key]) {
            resMap[key] = key;
            return sum === m;
        }
    });

    return result;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }
    return pickerItemsSumOfN(nums, 3, 0)
};
```

#### 解法二：使用双指针
```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    var res = [];
    
    for (var i = 0; i < nums.length - 2; i++) {
        var n1 = nums[i];
        if (n1 > 0) {
            break;
        }
        if (n1 === nums[i - 1] && i - 1 >= 0) {
            continue;
        }

        var left = i + 1;
        var right = nums.length - 1;

        while(left < right) {
            var n2 = nums[left];
            var n3 = nums[right];

            if (n1 + n2 + n3 === 0) {
                res.push([n1, n2, n3]);
                while(left < right && nums[left] == n2) {
                    left++;
                }
                while(left < right && nums[right] == n3) {
                    right--;
                }
            } else if (n1 + n2 + n3 < 0) {
                left++;
            } else {
                right--;
            }
        }
        
    }

    return res;
};
```