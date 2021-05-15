//1. Write function that will do reverse operation for Object.entries

// fromPairs([
// ["a", 1],
// ["b", 2],
// ]);
// // => { 'a': 1, 'b': 2 }

function fromPairs(arr) {
  return arr.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}
console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
  ])
);
