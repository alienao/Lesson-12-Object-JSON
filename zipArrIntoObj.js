// 3.Write function that will zip arrays into object
// zipObject(["a", "b", "c"], [1, 2]);
// // => { 'a': 1, 'b': 2, c: null }

const zipObject = (keys, values) => {
  let j = 0;
  let obj = keys.reduce((key, i) => {
    if (values[j] === undefined) {
      values[j] = null;
    }
    key[i] = values[j++];
    return key;
  }, {});
  return obj;
};
console.log(zipObject(["a", "b", "c"], [1, 2]));
