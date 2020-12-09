## 代码实现

```JavaScript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const maxInfo = {
        length: 1,
        start: 0,
        end: 0,
    }
    let center = 0.5;
    while (center < s.length) {
        let tmpMaxLength = 0;
        if (center % 1 === 0) {
            tmpMaxLength = 1;
        }
        let step  = 1;
        let index1 = center;
        let index2 = center;
        while (
                index1 = Math.ceil(center - step),
                index2 = Math.floor(center + step),
                index1 >= 0 && index2 <= s.length - 1
            ) {
            const char1 = s.charAt(index1);
            const char2 = s.charAt(index2);
            if (char1 === char2) {
                step++;
                tmpMaxLength += 2;
                if (maxInfo.length < tmpMaxLength) {
                    maxInfo.length = tmpMaxLength;
                    maxInfo.start = index1;
                    maxInfo.end = index2;
                }
            } else {
                break;
            }
        }
        if (s.length - center < maxInfo.length / 2) {
            break;
        }
        center += 0.5;
    }

    return s.slice(maxInfo.start, maxInfo.end + 1)
};
```

## 思路
- 遍历所有可能的回文中心点，然后记录中心点存在的长度最长的回文长度和起止索引

- 进一步思考
    - 从中间开始遍历，毕竟只有以中间为中心点才有较长回文的可能
