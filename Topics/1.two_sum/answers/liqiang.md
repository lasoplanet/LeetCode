### 代码

```javascript
function getTwoSum(nums, target) {
	const saveNums = [];
	for (let i = 0; i < nums.length; i++) {
		const item = nums[i];
		const differ = target - item;
		if (typeof saveNums[differ] === 'number') {
			return [saveNums[differ], i];
		} else if (typeof saveNums[item] !== 'number') {
			saveNums[item] = i;
		}
	}
	return []
}
```

codepan: https://codepen.io/ifushion/pen/OJRVPRR?editors=1010

解题思路：遍历数组，用`target`跟每一项求差`differ`，用差值在`saveNums`中找对应的key，如果有值则`saveNums[differ]`就是要找的第二个数。如果没有值，则将当前项的值做`key`，index做`value`，如果saveNums中存在有相同的`key`值，则无操作，继续下次循环。