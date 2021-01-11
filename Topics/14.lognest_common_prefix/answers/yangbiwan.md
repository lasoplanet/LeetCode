#### 解法一
```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    var firstStr = strs[0];
    var res = '';
    for(var i = 0, lenI = firstStr.length; i < lenI; i++) {
        res += firstStr[i];
        for(var j = 1, lenJ = strs.length; j < lenJ; j++) {
            if (!strs[j].startsWith(res)) {
                return res.substr(0, res.length - 1);
            }
        }
    }
    return res;
};
```