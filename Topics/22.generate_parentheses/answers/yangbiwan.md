```javascript
var isValid = function(s) {
    // 空字符直接返回 false
    if (!s) {
        return false;
    }
    var len = s.length;
    // 如果长度是奇数直接返回 false
    if (s % 2 === 1) {
        return false;
    }
    var m = {
        '(': ')',
        ')': '(',
        '[': ']',
        ']': '[',
        '{': '}',
        '}': '{',
    };
    var stack = [];
    for(var i = 0; i < len; i++) {
        var last = stack[stack.length - 1];
        if (m[s[i]] === last && s[i].charCodeAt() > last.charCodeAt()) {
            stack.pop();
            continue;
        }
        if (m[s[i]] === s[i + 1] && s[i].charCodeAt() < s[i + 1].charCodeAt()) {
            i++;
            continue;
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};

/**
 * @param {number} n (1 <= n <= 8)
 * @return {string[]}
 */

var generateParenthesis = function(n) {
    var res = [];
    for(var i = 0; i < Math.pow(2, n * 2); i++) {
        var item = parseInt(i).toString(2).padStart(n * 2, '0');
        item = item.replace(/0/g, '(');
        item = item.replace(/1/g, ')');
        if (isValid(item)) {
            res.push(item);
        }
    }
    return res;
};
```