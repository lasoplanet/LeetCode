#### 实现代码
```
var findMedianSortedArrays = function(nums1, nums2) {
     let totalNum = nums1.concat(nums2);
     let totalNum1 = totalNum.sort(function(a,b){return a>b?1:-1});
     if (totalNum1.length <=1){
          return totalNum1[0]; 
     }
     if(totalNum1.length%2 === 0){
          let number1 = totalNum1[totalNum1.length/2-1];
          let number2 = totalNum1[totalNum1.length/2];
          return (number1+number2)/2;
     }else {
         let length = totalNum1.length/2;
         return totalNum1[parseInt(length)]
     }
};
```
#### codepan链接
https://codepen.io/xiaoxuan520/pen/LYRGYOj
