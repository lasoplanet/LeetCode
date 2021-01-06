```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const dict = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let idx = s.length;
  let res = 0;

  while (idx--) {
    const letter = s[idx];
    const prev = s[idx - 1];
    if (
      (prev === 'I' && (letter === 'V' || letter === 'X')) ||
      (prev === 'X' && (letter === 'L' || letter === 'C')) ||
      (prev === 'C' && (letter === 'D' || letter === 'M'))
    ) {
      res += dict[prev + letter];
      idx--;
    } else {
      res += dict[letter];
    }
  }

  return res;
};
```
