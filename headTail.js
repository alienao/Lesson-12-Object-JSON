//2. Write functions that willreturn head and tail of Array

// getHead([1, 2, 3]);
// // => [1]
// getTail([1, 2, 3]);
// // => [2, 3]

const arr = [1, 2, 3];

const getHead = ([h]) => [h];
console.log(getHead(arr));

const getTail = ([, ...t]) => t;
console.log(getTail(arr));
