// Minutes of Javascript #12 - Proxies Part 2. (with Reflect)
// See: https://playcode.io/648696/

// You can't set a deep object value directly without creating each level of the object
// Let's make it possible with Proxy and Reflect!
function SuperObject() {
    const handler = {
        // Before calling [[set]](), Proxy will call [[get]]()
        // So let's implement the creation logic in the get
        get: function (target, key, receiver) {
            if (!target[key]) {
                target[key] = SuperObject(); // if key does not exists, we call SuperObject recursively
            }
            // now we can call the default behavior of delegating to target[[get]]()
            // this is what Reflect is meant for
            return Reflect.get(target, key, receiver); 
        }
    };
    return new Proxy({}, handler);
}

// Example!
let myObject = SuperObject();
myObject.prop1.prop2.prop3 = "values"; 
console.info(myObject); // returns { prop1: { prop2: { prop3: 'values' } } }