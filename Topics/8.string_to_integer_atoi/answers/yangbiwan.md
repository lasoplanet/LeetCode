```javascript
var myAtoi = function(s) {
    var res = '';
    var isPositive = true;
    var ss = s.trim();
    if (ss[0] === '-') {
        isPositive = false;
        ss = ss.slice(1);
    } else if (ss[0] === '+') {
        isPositive = true;
        ss = ss.slice(1);
    } else if (isNaN(+ss[0])) {
        return 0;
    }
    for (var i = 0, len = ss.length; i < len; i++) {
        var item = ss[i];
        if (!isNaN(+item) && item !== ' ') {
            res += item;
        } else {
            break;
        }
    }

    var result = isPositive ? (+res) : 0 - (+res);

    if (result > 2147483647) {
        return 2147483647;
    }

    if (result < -2147483648) {
        return -2147483648;
    }

    return result;
};
```
