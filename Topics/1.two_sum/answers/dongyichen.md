const all = [1, 3, 4, 5, 1];
const getResult = (all, value) => {
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

console.log(getResult(all, 2));

codepen: https://codepen.io/rebel-witout-cause/pen/KKgpXab
