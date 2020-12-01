function getResult(all, value) {
  const obj = {};
  all.forEach((n, idx) => {
    if (n.toString() in obj && !n.toString() + '|' in obj) {
      obj[n + '|'] = idx;
    } else {
      obj[n] = idx;
    }
  });

  let idx = -1;
  while (++idx < all.length) {
    const curr = all[idx];
    const diff = (value - curr).toString();
    const result = [idx];

    if (diff in obj) {
      result.push(obj[diff]);
      return result;
    } else if (value / curr === 2 && curr + '|' in obj) {
      // 如果有重复并且结果为当前值2倍
      result.push(obj[curr.toString()]);
    }
  }
}

codepen: https://codepen.io/rebel-witout-cause/pen/KKgpXab

解题思路：生成一个key为数字，值为索引的map，并且用key标示出重复，之后再遍历一次去找对应key的值有无存在，如果map中存在或此数字*2为结果，则返回索引
