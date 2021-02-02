```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValidParentheses = function(s) {
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
```