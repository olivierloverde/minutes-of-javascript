// Minutes of Javascript #05 - Weakmap() ?
// See: https://playcode.io/610831/

// In WeakMap, the key has to be an Object
// A Weakmap holds a weak reference to the key inside of the map. 
// It means if the object is destroyed, GC will remove the entire entry from the Weakmap too

let myWeakMap = new WeakMap();
let element2 = { foo: 'bar'};
myWeakMap.set(element2, 'hello');
console.info(myWeakMap.get(element2)) // prints "hello"

element2 = null;
console.info(myWeakMap.get(element2)) // prints undefined, Memory is free
// Also, you can not get the size of a WeakMap and can not iterate on it

// WeakMap Cheatsheet:
WeakMap.set
WeakMap.get
WeakMap.has
WeakMap.delete
WeakMap.clear