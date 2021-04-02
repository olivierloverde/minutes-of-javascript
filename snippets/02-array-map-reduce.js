// Minutes of Javascript #02 - .map() & .reduce()
// See: https://playcode.io/609277/
const myArray = [1,2,3,4,5,6];

// Use .map() for applying a transformation on each elements
const mutipliedArray = myArray.map((element) => element*2);
console.info(mutipliedArray); // [ 2, 4, 6, 8, 10, 12 ]

// Use .reduce() for merging together each element of the array
const sumOfArray = myArray.reduce((previous, current) => previous+current);
console.info(sumOfArray); // 21

// These methods can be chained together
const sumOfMultipliedArray = myArray.map((el) => el*2).reduce((prev, cur) => prev+cur);
console.info(sumOfMultipliedArray); // 42