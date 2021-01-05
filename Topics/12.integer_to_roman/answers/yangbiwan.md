```javascript
var one = ['I', 'X', 'C', 'M'];
var five = ['V', 'L', 'D']

var getRoman = function(num, index) {
    if (num < 4) {
        return Array(num).fill(one[index]).join('');
    }
    if (num === 4) {
        return `${one[index]}${five[index]}`;
    }
    if (num === 5) {
        return five[index];
    }
    if (num > 5 && num < 9) {
        return `${five[index]}${Array(num - 5).fill(one[index]).join('')}`;
    }
    if (num === 9) {
        return `${one[index]}${one[index + 1]}`;
    }
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var s = num.toString();
    var res = ''
    for(var i = 0, len = s.length; i < len; i++) {
        res += getRoman(+s[i], len - 1 - i);
    }
    return res;
};
```