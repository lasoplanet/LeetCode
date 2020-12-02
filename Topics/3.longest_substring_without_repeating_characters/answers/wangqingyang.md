## 代码实现

```JavaScript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = []
    let start = 0;
    let end = 0;
    let maxlength = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s.charCodeAt(i);

        if (map[char] >= start) {
           start = map[char] + 1; 
        }

        map[char] = i;
        end = i + 1;

        if (end - start > maxlength) {
            maxlength = end - start;
        }
    }
    return maxlength;
};
```
## codepen

[😹codepen](about:blank)

## 思路

- 采用双指针方法，start 指向没有重复字符串的开始，end指向没有重复字符串的结尾，每次判断当前字符是否已经在[start, end]区间存在，如果存在，start指向已存在位置的下一位，每次循环 判断 end - start 是否比当前存储的 maxLength 长，如果长就更新 maxLength,最后返回maxLength 值