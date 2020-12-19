```javascript
var reverse = function(x) {
  const isNegative = x < 0;
  const str = isNegative ? x.toString().slice(1) : x.toString();
  let idx = str.length;
  let res = '';
  
  while (idx--) {
    if (idx === str.length - 1 && str[idx] === '0') {
      continue;
    }
    res += str[idx];
  }
  isNegative && (res = '-' + res);
  res = +res;

  if (res < -Math.pow(2, 31) || res > Math.pow(2, 31) - 1) return 0;

  return res;
};
```
