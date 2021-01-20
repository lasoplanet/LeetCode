```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    var res = 0;
    var abs = Math.abs(nums[0] + nums[1] + nums[nums.length - 1] - target);
    
    for (var i = 0; i < nums.length - 2; i++) {
        var n1 = nums[i];
        if (n1 === nums[i - 1] && i - 1 >= 0) {
            continue;
        }

        var left = i + 1;
        var right = nums.length - 1;

        while(left < right) {
            var n2 = nums[left];
            var n3 = nums[right];

            if (Math.abs(n1 + n2 + n3 - target) <= abs) {
                res = n1 + n2 + n3;
                abs = Math.abs(res - target);
            }
            right--;
            if (right === left) {
                left++;
                right = nums.length - 1;
            }
        }
        
    }
    return res;
};

console.log(threeSumClosest([-4,-1,1,2], 1));
console.log(threeSumClosest([-3,0,1,2], -2));
console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82));
```