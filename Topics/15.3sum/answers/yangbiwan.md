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