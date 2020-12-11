```javascript
var longestPalindrome = function(s) {
  var sLen = s.length;
  var arr = new Array(sLen);
  for(var m = 0; m < sLen; m++){
    arr[m] = new Array(sLen).fill(false);
  }

  var str = '';

  for(var k = 0; k < sLen; k++) {
    for(var i = 0; i + k < sLen; i++) {
      var j = i + k;

      if (k === 0) {
        arr[i][j] = true;
      } else if (k === 1) {
        arr[i][j] = s.charAt(i) === s.charAt(j);
      } else {
        arr[i][j] = s.charAt(i) === s.charAt(j) && arr[i + 1][j - 1];
      }

      if (arr[i][j] && k + 1 > str.length) {
        str = s.substring(i, j + 1);
      }
    }
  }
  return str;
};

```