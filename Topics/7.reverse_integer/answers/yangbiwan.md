#### 方法 1
```javascript
var reverse = function(x) {
    if (x > 2147483647 || x < -2147483648 || !x) {
      return 0;
    }

    var num = x;
    if (x < 0) {
        num = 0 - x;
    }
    var strX = '' + num;
    var resX = '';
    var noZeroIndex = 0;
    for(var i = strX.length - 1; i < strX.length; i--) {
        if (strX[i] !== '0') {
            noZeroIndex = i;
            break;
        }
    }

    for(var j = noZeroIndex; j >= 0; j--) {
        resX += strX[j];
    }

    var res = x < 0 ? 0 - resX : +resX;

    if (resX > 2147483647 || resX < -2147483648) {
      return 0;
    }

    return res;
};
```

解题思路：先反向找到第一个非 0 索引，再将所有非 0 合并。时间复杂度 O(n);

#### 方法 2
```javascript
var reverse = function(x) {
    var num = x;
    if (x < 0) {
        num = 0 - x;
    }
    var res = 0;
    
    while (num !== 0) {
      res = res * 10 + num % 10;
      num = Math.floor(num / 10);
    }

    var result = x < 0 ? 0 - res : +res;

    if (result > 2147483647 || result < -2147483648) {
      return 0;
    }
    return result;
};
```
解题思路：用取 10 的模运算