```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    var res = 0;
    var len = s.length;
    for(var i = len - 1; i >= 0; i--) {
        if (romanMap[s[i]] > romanMap[s[i - 1]]) {
            res = res + romanMap[s[i]] - romanMap[s[i - 1]];
            i--;
        } else {
            res += romanMap[s[i]];
        }
    }
    return res;
};

console.log(romanToInt('MCMXCIV'));
```
