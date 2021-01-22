#### 使用递归
```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var res = [];
    if (!digits) {
        return res;
    }
    var digit2Letter = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };
    var findCombination = function(digits, index, str) {
        if (!digits[index]) {
            res.push(str);
            return;
        }
        var letters = digit2Letter[digits[index]];
        for (var i = 0, lenI = letters.length; i < lenI; i++) {
            findCombination(digits, index + 1, str + letters[i]);
        }
    }

    findCombination(digits, 0, '');

    return res;
};
```