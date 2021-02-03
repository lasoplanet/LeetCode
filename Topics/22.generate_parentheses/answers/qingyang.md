```JavaScript
/**
 * @param {number} n
 * @return {string[]}
 */

function next(leftNum, rightNum, prefix, arr) {
    if (rightNum === 1 && leftNum === 0) {
        arr.push(prefix + ')');
        return 
    }
    if (leftNum === rightNum) {
        next(leftNum - 1, rightNum, prefix + '(', arr);
        return;
    } else if(leftNum > 0) {
        next(leftNum, rightNum - 1, prefix + ')', arr);
        next(leftNum - 1, rightNum, prefix + '(', arr);
        return;
    } else {
        next(leftNum, rightNum - 1, prefix + ')', arr);
        return;
    }
}

var generateParenthesis = function(n) {
    if (n === 0) return '';
    const tab = []
    next(n - 1, n, '(', tab);
    return tab
};
```
