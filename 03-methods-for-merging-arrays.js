// Minutes of Javascript #03 - Methods for merging (aka concatenating) arrays
// See: https://playcode.io/609806/
const arr1 = ['a', 'b', 'c'];
const arr2 = ['1', '2', '3'];

// Using .concat()
console.info(arr1.concat(arr2)); // ["a","b","c","1","2","3"]

// Using spread operators
console.info([...arr1, ...arr2]); // ["a","b","c","1","2","3"]

// This works too:
console.info(['a', 'b', 'c', ...arr2]); // ["a","b","c","1","2","3"]

// Using Array.of
console.info(Array.of(...arr1, ...arr2)); // ["a","b","c","1","2","3"]

// With reduce
console.info(arr2.reduce(function(array,value) {
  array.push(value);
  return array;
}, arr1)); // ["a","b","c","1","2","3"]