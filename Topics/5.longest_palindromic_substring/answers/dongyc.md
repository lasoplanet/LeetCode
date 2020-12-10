```javascript
const reverse = str => {
  let res = '';
  let idx = str.length;
  while (~ --idx) {
    res += str[idx];
  }
  return res === str;
}
var longestPalindrome = function(s) {
  let res = '';
  let idx = -1;
  while (++idx < s.length) {
    let temp = '';
    let resIdx = idx - 1;

    if (res.length < s.length - idx) {
      while (++resIdx < s.length) {
        temp += s[resIdx];
        if (temp.length > res.length && reverse(temp)) {
          res = temp;
        }
      }
    }
  }
  return res.length ? res : s[0];
}
```
