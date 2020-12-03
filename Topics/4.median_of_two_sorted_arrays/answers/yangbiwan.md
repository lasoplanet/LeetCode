```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var quickSort = function(array) {
    var len = array.length;
    if (len === 0) {
      return [];
    }
    var middle = array[0];
    var leftItems = [];
    var rightItems = [];
    for (var i = 1; i < len; i++) {
      if (array[i] < middle) {
        leftItems.push(array[i]);
      } else {
        rightItems.push(array[i])
      }
    }
    return [...quickSort(leftItems), middle, ...quickSort(rightItems)];
}

var findMedianSortedArrays = function(nums1, nums2) {
    var array = nums1.concat(nums2);
    var sortedArray = quickSort(array);
    var len = sortedArray.length;
    if (len % 2 === 0) {
      return (sortedArray[len / 2 - 1] + sortedArray[len / 2]) / 2;
    } else {
      return sortedArray[(len - 1) / 2];
    }
};
```