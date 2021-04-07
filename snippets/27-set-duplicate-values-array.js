// Minutes of Javascript #27 - Using new Set() to get rid of duplicate values in array
// Source: https://github.com/olivierloverde/minutes-of-javascript/blob/main/snippets/27-set-duplicate-values-array.js

const myArray = [1,2,2,2,6,8,99,2,6,99,8,7];
const uniqueValuesOfMyArray = [...new Set(myArray)];

console.info(uniqueValuesOfMyArray); // returns [ 1, 2, 6, 8, 99, 7 ]
