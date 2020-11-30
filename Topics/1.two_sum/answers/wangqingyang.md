### 实现代码

```JavaScript

var twoSum_ = function(nums, target) {
  for (var i = 1; i < nums.length; i++) {
    for (var j = 0 ; j < i; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (map[target - num] || map[target - num] === 0) {
            return [map[target - num], i] ;
        }
        map[num] = i;
    }
    return [];
};
```
### codepen链接

[codepen链接](https://codepen.io/wiseqingyang/pen/dypoyym)

### 思路

- 最简单办法就是双循环实现，但是性能不好，每两个值相加计算做了两次
- 优化办法，让两个值只相加一次，方法就是值只加自己前面的或者后面的，没有区别，先选择跟自己前面的相加
- 暂定正序遍历，每个值只跟自己前面的值做加法，这样需要保存自己前面的值的一个数组，或者通过自己的下标遍历自己前面的数值，总之是需要在自己之前的这段数组中找到与自己和为 target 的值，现在的主要问题是，在一个值之前的数组里寻找一个特定的值并返回下标，`twoSum_` On!
- 通过值找下标需要遍历，然而通过下标找值只需要直接访问对应下标，所以这个数组生成的时候就需要把下标和值反过来存储，这样就不需要多余的遍历了