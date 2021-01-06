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

console.log(romanToInt('IIV'))


function format(a, i) {
  if (!a) return '';
  if (a < 4) return arr[i].repeat(a);
  if (a === 4) return `${arr[i]}${arr[i + 1]}`;
  if (a === 5) return `${arr[i + 1]}`;
  if (a < 9) return `${arr[i + 1]}${arr[i].repeat(a - 5)}`;
  if (a === 9) return `${arr[i]}${arr[i + 2]}`;
}

var intToRoman = function (num) {
  let i = 4;
  let roman = '';
  while (num > 0 && i-- > 0) {
    const div = Math.pow(10, i);
    const a = Math.floor(num / div);
    num = num % div;
    if (a) roman += format(a, 2 * i);
  }
  return roman;
};

// console.log(intToRoman(2900))