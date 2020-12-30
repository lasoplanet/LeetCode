```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    } else {
        let temp = x;
        let res = 0;
        while (x > 0) {
            res = res * 10 + x % 10;
            x = Math.floor(x / 10);
        }
        return res === temp;
    }
};