// Minutes of Javascript #23 - Generator function* and yield usage
// Source: https://github.com/olivierloverde/minutes-of-javascript/blob/main/snippets/23-generator-function-yield-usage.js

// Generators are a special class of functions that simplify the task of writing iterators.
// A generator is a function that generates a series of values.
function* generatorFunction() {
    let i = 0;
    while (i < 2) {
        yield ++i;
    }
    return i;
}

const fn = generatorFunction();
console.info(fn); // Object [Generator] {}

// Generator stops execution at first yield instruction
// Use .next() to start execution again from the last stop point
console.info(fn.next()); // { value: 1, done: false } // i = 0, return ++0 = 1
console.info(fn.next()); // { value: 2, done: false } // i = 1, return ++1 = 2
console.info(fn.next()); // { value: 2, done: true } //  i = 2, exit loop, return i = 2
console.info(fn.next()); // { value: undefined, done: true } // already done, return undefined

// You can use for...of statement on generator
const fn2 = generatorFunction();
for (index of fn2) {
    console.log(index);  // return 1, then 2
}
