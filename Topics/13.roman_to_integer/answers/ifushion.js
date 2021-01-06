const enume = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

var romanToInt = function(s) {
  let len = s.length;
  let max = 0;
  let res = 0;
  while(len--) {
    let num = enume[s[len]];
    if (max > num) {
      res -= num;
      continue;
    };
    max = num;
    res += num;
  }
  return res;
}