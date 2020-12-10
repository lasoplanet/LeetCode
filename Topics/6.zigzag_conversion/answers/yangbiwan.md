```javascript
var getColunms = function (s, numRows) {
  var sLen = s.length;
  var gap = numRows - 1;
  var zItems = numRows - 2;
  var fullz = Math.floor(sLen / (numRows + zItems));
  if (fullz === 0) {
    return sLen - gap;
  }
  var remain = sLen - fullz * (numRows + zItems);
  if (remain >= numRows) {
    return fullz * gap + remain % numRows + 1
  } else if (remain > 0) {
    return fullz * gap + 1;
  } else {
    return fullz * gap;
  }
}

var convert = function(s, numRows) {
  var sLen = s.length;
  if (s.length === 1 || numRows === 1 || numRows > sLen) {
    return s;
  }
  var gap = numRows - 1;
  var columns = getColunms(s, numRows);
  
  var arr = new Array(numRows);
  for(var k = 0; k < arr.length; k++){
    arr[k] = new Array(columns);
  }
  
  var sIndex = 0;

  for (i = 0; i < columns; i++) {
    for(var j = 0; j < numRows; j++) {
      if (i % gap === 0 || (i + j) % gap === 0) {
        arr[j][i] = s[sIndex++];
      } else {
        arr[j][i] = '';
      }
    }
  }
  return arr.map(item => item.join('')).join('');
};
```

解题思路：生成 Z 型的二维数组来存储所有字符，然后再 join。