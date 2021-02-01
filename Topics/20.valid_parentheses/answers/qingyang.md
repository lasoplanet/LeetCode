```JavaScript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const tabLeft = {
        '[': ']',
        '{': '}',
        '(': ')',
    }
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (tabLeft[char]) {
            stack.push(char);
        } else {
            if (char !== tabLeft[stack.pop()]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
```
