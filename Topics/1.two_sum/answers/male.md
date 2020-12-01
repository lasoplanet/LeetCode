### 实现代码
####第一种  
```JavaScript
for(var i =0 ; i< nums.length;i++){
     for(var j = i+1;j<nums.length;j++){
         if(nums[i] + nums[j] === target){
             return [i,j];
         }
     }
}
```
####第二种
```JavaScript
var twoSum = function(nums, target) {
    let dic = {}; 
    for (var i=0;i<nums.length;i++){
        const y = nums[i];
        if(dic[y] === undefined){
            const x = target - y;
            dic[x] = i;
        }else {
            return [dic[y],i];
        }
    }
};
```
### codepan链接
https://codepen.io/xiaoxuan520/pen/bGwddGv
https://codepen.io/xiaoxuan520/pen/OJRVVpZ


