// 4. Write function that will group by some rule
// groupBy([6.1, 4.2, 6.3], Math.floor);
// // => { '4': [4.2], '6': [6.1, 6.3] }
// groupBy(["one", "two", "three"], (i) => i.length);
// // => { '3': ['one', 'two'], '5': ['three'] }

function groupBy(arr, action) {
  return arr.reduce(function (obj, item) {
    let key = typeof action === "function" ? action(item) : item[action];
    if (!obj.hasOwnProperty(key)) {
      obj[key] = [];
    }
    obj[key].push(item);
    return obj;
  }, {});
}
groupBy(["one", "two", "three"], (i) => i.length);
