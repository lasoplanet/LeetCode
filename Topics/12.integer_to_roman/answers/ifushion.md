```js
const arr = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
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
```

* 初始化i= 4；
* 循环i--，给定数字按位求余；
* 通过`2 * i`、`2 * i + 1`、`2 * i + 2`取得当前位在`arr`中的位置 1、5、10倍数字符；

[leetcode](https://leetcode-cn.com/problems/integer-to-roman/solution/xun-huan-qiu-mei-wei-zheng-shu-yi-tong-p-pnv1/)地址