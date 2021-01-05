```javascript
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  num = num.toString();
  const dict = {
    '01': 'I',
    '04': 'IV',
    '05': 'V',
    '09': 'IX',
    '11': 'X',
    '14': 'XL',
    '15': 'L',
    '19': 'XC',
    '21': 'C',
    '24': 'CD',
    '25': 'D',
    '29': 'CM',
    '31': 'M',
  };
  const tails = [9, 5, 4, 1];
  let idx = len = num.length;
  let res = '';
  
  while (idx--) { 
    const place = len - 1 - idx;
    let newRes = '';
    const n = '' + place + num[idx];

    if (n in dict) {
      res = dict[n] + res;
    } else {
      let current = num[idx];
      let count = -1;

      while (++count < tails.length && current > 0) {
        const tail = tails[count];
        const diff = current - tail;
        if (diff >= 0) {
          current = diff;
          count = -1;
          newRes += dict['' + place + tail];
          console.log(newRes);
        }
      }
      res = newRes + res;
    }
  }
  return res;
};

intToRoman(24);
```
