
// 转对象后遍历
// var threeSum = function(nums) {
//   const obj = {};
//   const addObj = {};
//   nums.forEach(item => obj[item] = (obj[item] || 0) + 1);
//   const entriesArr = Object.entries(obj);
//   for(let i = 0; i < entriesArr.length; i++) {
//     const iItem = entriesArr[i];
//     let iVal = iItem[0] * 1;
//     for(let j = i; j < entriesArr.length; j++) {
//       let iCount = iItem[1] - 1;
//       const jItem = entriesArr[j];
//       let jVal = jItem[0] * 1;
//       let jCount = jItem[1] - 1;
//       if (iVal === jVal) iCount--;
//       if (iCount < 0) continue;
//       const qVal = -iVal - jVal;
//       if (!obj[qVal]) continue;
//       if (qVal === iVal && iCount === 0) continue;
//       if (qVal === jVal && jCount === 0) continue;
//       const key = [iVal, jVal, qVal].sort().join(':');
//       addObj[key] = null;
//     }
//   }
//   return Object.entries(addObj).map(item => item[0].split(':'))
// }

// 数组常规循环
// var threeSum = function (nums) {
//   const len = nums.length;
//   const a = {};
//   const b = {};
//   nums.forEach(item => b[item] = true);
//   for (let i = 0; i < len; i++) {
//     const iVal = nums[i];
//     for (let j = i + 1; j < len; j++) {
//       const jVal = nums[j];
//       let val = -iVal - jVal;
//       if (!b[val]) continue;
//       let key = [iVal, jVal, val].sort().join(':');
//       if (!a[key]) {
//         a[key] = `${j}:${val}`;
//       }
//     }
//   }
  
//   let resArr = Object.entries(a);
//   return resArr.filter(item => {
//       const vals = item[1].split(':');
//       const arr = nums.slice(vals[0] * 1 + 1);
//       return arr.includes(vals[1] * 1);
//     })
//     .map(item => item[0].split(':'));
// };

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
