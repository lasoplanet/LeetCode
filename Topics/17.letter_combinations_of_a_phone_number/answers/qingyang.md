
```
/**
 * @param {string} digits
 * @return {string[]}
 */

const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

var letterCombinations = function(digits, prefix="") {
    if (digits.length <= 0) {
        return prefix.length > 0 ? [prefix] :[];
    } else {
        const char = digits.charAt(0);
        const tabs = map[char].map((letter) => {
            return letterCombinations(digits.slice(1), prefix+letter)
        })
        return tabs.flat();
    }
};
```
