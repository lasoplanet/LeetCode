```javascript
var lengthOfLongestSubstring = function(s) {
    var strFrag = [];
    var cur = s[0];
    for(var i = 0, lenI = s.length; i < lenI; i++) {
        var next = s[i + 1];
        var index = cur.indexOf(next);
        if (index > -1) {
            strFrag.push(cur.length);
            cur = cur.slice(index + 1) + next;
        } else {
            cur += next || '';
        }
        if (i === lenI - 1) {
            strFrag.push(cur.length);
        }
    }
    var target = strFrag[0] || 0;
    for(var j = 0, lenJ = strFrag.length; j < lenJ; j++) {
        if (strFrag[j] > target) {
            target = strFrag[j];
        }
    }
    return target;
};
```

解题思路：
将字符串切分为不重复字符串段，再找到最长的。
切分规则：从左往右匹配下一个字符串，如果与之前的不重复，更新缓存不重复字符串，如果重复，将重复字符串之前的丢弃。
