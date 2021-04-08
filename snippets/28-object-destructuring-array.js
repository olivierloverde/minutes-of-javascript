// Minutes of Javascript #28 - Object destructuring on Array
// Source: https://github.com/olivierloverde/minutes-of-javascript/blob/main/snippets/28-object-destructuring-array.js

const myArray = ['first', 'second', 'third', 'last'];

// Examples
const { 1: sec } = myArray;
console.info(sec); // returns 'second'

// You can destructure the length property too
const { length, 0: first, [length-1]: last } = myArray;
console.info(first); // returns 'first'
console.info(last); // returns 'last'
console.info(length); // returns 4
