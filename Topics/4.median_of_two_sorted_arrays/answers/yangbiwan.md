#### 第一种：快速排序

```javascript
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

#### 第二种：使用 array sort 函数

```javascript
var findMedianSortedArrays = function(nums1, nums2) {
    var array = nums1.concat(nums2);
    var sortedArray = array.sort((a, b) => a - b);
    var len = sortedArray.length;
    if (len % 2 === 0) {
      return (sortedArray[len / 2 - 1] + sortedArray[len / 2]) / 2;
    } else {
      return sortedArray[(len - 1) / 2];
    }
};
```

#### 第三种：二分查找

```javascript

var binarySearch = function(array, target) {
  var low = 0;
  var high = array.length - 1;
  while(low <= high) {
    var middle = Math.floor((low + high) / 2);
    if (target === array[middle]) {
      return middle;
    } else if (target > array[middle]) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return -1;
}

var findMedianSortedArrays = function(nums1, nums2) {
  
};
```