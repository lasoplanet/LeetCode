```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let $x = x;
    let $y = 0;
    while(x > 0) {
        $y = $y * 10 + x % 10
        x = Math.floor(x/10);
    }
    return $y === $x;
};
```

[LeetCode](https://leetcode-cn.com/problems/palindrome-number)地址