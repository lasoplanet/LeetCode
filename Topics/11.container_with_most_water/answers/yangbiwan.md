#### 解法一：双重循环，计算所有可能性
```javascript
var maxArea = function(height) {
    var maxValue = 0;
    var len = height.length;
    for(var i = 0; i < len - 1; i++) {
        for(var j = 0; j < len - i - 1; j++) {
            var maxHeight = Math.min(height[j], height[j + i + 1]);
            maxValue = Math.max(maxValue, maxHeight * (i + 1))
        }
    }
    return maxValue;
};
```

#### 解法二：双指针
```javascript
var maxArea = function(height) {
    var maxValue = 0;
    var len = height.length;
    var left = 0;
    var right = len - 1;
    while(left < right) {
        var res = Math.min(height[left], height[right]) * (right - left);
        maxValue = Math.max(res, maxValue);
        if (height[left] <= height[right]) {
            ++left;
        } else {
            --right;
        }
    }
    return maxValue;
}
```