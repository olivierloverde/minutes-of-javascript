// Minutes of Javascript #22 - Array: .map() vs .filter() vs .reduce()
// Source: https://github.com/olivierloverde/minutes-of-javascript/blob/main/snippets/22-map-vs-filter-vs-reduce.js

const arr = [26, 86, 45, 69, 25, 45]; // Taking random array

// Map function
// Defination:- it returns the new array from the base array after implementing some logic on int.
// length of the new array is always equal to length of the base array
const mapArr = arr.map((value) => value * 2);
console.log(mapArr); // [ 52, 172, 90, 138, 50, 90 ]
console.log(arr.length === mapArr.length); // true

// Filter function
// Defination:- it returns the new array from the base array only if some condition is true
// length of the new can be less than the length of the base array
const filterArr = arr.filter((value) => value > 50);
console.log(filterArr); // [ 86, 69 ]

// Reduce function
// Defination:- it returns the single value from the array.
const reduceArr = arr.reduce((accumulator, value) => accumulator + value, 0);
console.log(reduceArr); // 296

// Bonus for reduce
const pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];
// lets count animals with reduce

const petCount = pets.reduce((obj, pet) => {
  obj[pet] ? obj[pet]++ : (obj[pet] = 1); // explenation:- if object has Dog in it than increase its count else add Dog and assign the value of 1
  return obj;
}, {});

console.log(petCount); // { dog: 2, chicken: 3, cat: 1, rabbit: 1 }

// CheatSheet
// map([🌽, 🐮, 🐔], cook)
// => [🍿, 🍔, 🍳]

// filter([🍿, 🍔, 🍳], isVegetarian)
// =>  [🍿, 🍳]

// reduce([🍿, 🍳], eat)
// => 💩
