```javascript
var myAtoi = function(s) {
  let idx = -1;
  let res = '';
  let hasFoundFirst = false;

  while (++idx < s.length) {
    const char = s[idx];
    
    if (!hasFoundFirst && char === ' ') continue;
    if (!hasFoundFirst && isNaN(+char) && !['+', '-'].includes(char)) return 0;
    if (hasFoundFirst && isNaN(+char) || char === ' ') break;
    if (!hasFoundFirst) hasFoundFirst = true;
    res += s[idx];
  }
  const min = -Math.pow(2, 31);
  const max = Math.pow(2, 31) - 1;

  res = isNaN(+res) ? 0 : +res;
  if (res < min) {
    return min;
  } else if (res > max) {
    return max;
  }

  return res;
};

myAtoi(" -88827   5655  U");
```
