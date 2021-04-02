// Minutes of Javascript #13 - Proxies Part 3.
// See: https://playcode.io/648707/

// Let's explore full power of Proxies by implementing a readOnly functions
// This function will turn any object in read-only mode
function makeReadOnly(target) {
  // Making sure `target` is an object before going further
  if (target === undefined || target === null || typeof(target) != 'object') return target;

  const reflectMethod = (method) => (target, key, receiver) => {
    var result = Reflect[method](target, key, receiver);
    if (Object(result) === result) {
      return makeReadOnly(result);
    }
    return result;
  }
  const handler = {
    set: () => false,
    setPrototypeOf: () => false,
    defineProperty: () => false,
    deleteProperty: () => false,
    preventExtensions: () => false,
    getPrototypeOf: reflectMethod('getPrototypeOf'),
    getOwnPropertyDescriptor: reflectMethod('getOwnPropertyDescriptor'),
    get: reflectMethod('get'),
  }

  return new Proxy(target, handler);
}

// Example
let myObject = makeReadOnly({a: {b: 'value'}});

myObject.a = 'newValue'; // on direct property
console.info(myObject); // returns { a: { b: 'value' } }

myObject.a.b = 'newValue'; // on sub-property
console.info(myObject); // returns { a: { b: 'value' } }

var proto = Object.getPrototypeOf(myObject); // also works on prototype
console.info(proto) // return {}
proto.bar = function() {
  console.log("bar - new method");
};
console.info(proto); // returns {}