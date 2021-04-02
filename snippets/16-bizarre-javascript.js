// Minutes of Javascript #16 - Some bizarre things in Javascript
// See: https://playcode.io/652366/

// null is an Object
console.info(typeof null); 
console.info(null instanceof Object); // returns false 🤔

// NaN is not equal to anything. You can use isNan() to check NaN value
console.info(typeof NaN); // NaN is a Number 
console.info(NaN instanceof Number); // returns false
console.info(NaN === NaN); // returns false
console.info(isNaN(NaN)); // returns true

// About number
console.info(0.1 + 0.2 === 0.3); // return false;
console.info(0.1+0.2); // returns 0.30000000000000004