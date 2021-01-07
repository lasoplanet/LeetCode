## 方法一 分类校验

```js
var myAtoi = function (s) {
  let end = 0;
  let t = 0; // 0: 空格; 1: +-; 2: 数字
  for (let i = 0; i < s.length; i++) {
    let c = s.charCodeAt(i);
    if (t === 0) {
      if (c === 32) continue;
      t += 1;
    }
    if (t === 1) {
      t += 1;
      if ([43, 45].includes(c)) continue;
    }
    if (c > 47 && c < 58) {
      end = i;
      continue;
    }
    break;
  }
  s = Number(s.slice(0, end + 1));
  if (isNaN(s) || !s) return 0;
  if (s > 2147483647) return 2147483647;
  if (s < -2147483648) return -2147483648;
  return s;
};
```
### 解题思路
* 初始化截止末位为0；类型校验位0：空格；
* for循环取每一位字符的charCodeAt；
* 如果类型校验为0则进行下次循环，否则类型校验设为1：+-；
* 如果类型校验为1设置类型校验为2：数字，正负号校验通过的话进行下次循环；正负号校验不通过开始下一步校验；
* 校验是否为数字，如果是数字则end = i；否则终止循环，判断结束；
* 最后根据end截出字符串转成数字判断其他条件；

注意到三个条件是有先后顺序的就可以大致理解上述思路：
* 第一个非空字符之后的空字符都是非法的
* +-号只能出现一次
* 之后全是数字；

## 方法二 简单粗暴怎么想的怎么来

```js
var myAtoi = function (s) {
  s = s.trimStart();
  let symbol = '';
  let sliceEnd = 0;
  let maxNum = Math.pow(2, 31) - 1;
  if ('+-'.includes(s.charAt(0))) {
    symbol = s.charAt(0);
    if (symbol === '-') maxNum += 1;
    s = s.slice(1);
  }
  if (!s.length || !'1234567890'.includes(s.charAt(0))) return 0;
  for (let i = 0; i < s.length; i++) {
    const item = s.charAt(i);
    if (isNaN(item) || item === ' ') {
      break;
      return;
    }
    sliceEnd += 1;
  }
  s = s.slice(0, sliceEnd);
  if (s > maxNum) s = maxNum;
  return +(symbol + s);
};
```
