// Minutes of Javascript #11 - Proxies Part 1.
// See: https://playcode.io/648685/

// The Proxy object enables you to create a proxy for another object, 
// which can intercept and redefine fundamental operations for that object.
let target = {}, handler = {}; 
let proxy = new Proxy(target, handler); // All of proxy’s internal methods are forwarded to target.
proxy.name = 'Joe'; // will call handler.[[Set]]() if defined else fallback to target.[[Set]]() 
console.info(target.person) // Returns "Joe"
console.info(proxy === target) // Return false /!\ proxy !== target

// Now let's redefine proxy.[[set]]()
target = {}, handler = {
    set: function (target, key, value, receiver) {
        throw new Error("You can't set properties on this object.");
      }
};
proxy = new Proxy(target, handler); 
proxy.name = 'Joe'; // will throw 'Error: You can't set properties on this object.'
