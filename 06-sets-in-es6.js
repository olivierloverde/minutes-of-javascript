// Minutes of Javascript #06 - Sets in ES6
// See: https://playcode.io/611264/

// A set is a list of values that cannot contain duplicates. 
const set = new Set()
console.log(set) // Set {}
const set2 = new Set([1, 2, 3])
console.log(set2) // Set { 1, 2, 3 }
const set3 = new Set([1, 2, 2, 2, 2, 2, 3, 3, 3])
console.log(set2) // Set { 1, 2, 3 }

// Playing with add and size
const set4 = new Set()
set4.size // 0
set4.add('hello')
set4.size // 1
set4.add('hello') // add is ignored if value is already in Set
set4.size // 1

// Iterations
const set5 = new Set(['a', 'b', 'c'])
set5.forEach((value, key, s) => {
    console.log(`${value} ${key}`)
})

// Set to array
const set6 = new Set([1, 2, 3])
const array = [...set6]
console.log(array) // [ 1, 2, 3 ]