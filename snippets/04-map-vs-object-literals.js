// Minutes of Javascript #04 - Using Map() vs Object literals
// See: https://playcode.io/610224/

// Drawback #1 of object literals (i.e {}): All keys can only be strings
const obj = {}
obj[['a','b',1]] = "value"
console.info(obj) // {a,b,1:"value"} => key has been converted to string "a,b,1"

// Drawback #2: property/key orders are not guaranteed
const obj2 = {}
obj2['1'] = ''
obj2['2'] = ''
for(key in obj2) console.log(key) // return 1 2 but not order not guaranteed

// Drawback #3: forEach() can not be called return error "obj.forEach is not a function"

// Map() addresses these drawbacks
// Init using methods .set()
const m = new Map()
m.set('first', 1)
m.set(obj, 2)
// Init using 2D arrays
const m2 = new Map([
  ['second', 3],
  [obj, '4']
]);

m.forEach(function(value, key) {
  console.info(key, value)
}) // returned in order
console.info(m.get(obj)) // return 2

// Merging two arrays using spread operators
const m3 = new Map([...m, ...m2]); // last key wins
console.info(Array.from(m3)) // Display in 2D arrays

// Cheatsheet
console.info(m.size) // return the size of the map
console.info(m.keys()) // return the keys of the map
m.delete('first') // Deletes a key and returns if the delete was successful.')
m.clear() // Clears the map of all entries