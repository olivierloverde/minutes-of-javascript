// Minutes of Javascript #10 - Promise.race
// See: https://playcode.io/613524/
const Promise = require('bluebird'); // very complete promises library

const p1 = new Promise((resolve, reject) => setTimeout(resolve({'foo': 'bar'}), 500));
const p2 = new Promise((resolve, reject) => setTimeout(resolve({'moe': 'hey'}), 1500));

(async function() {
    // Promise.race resolves the first promise to resolve
    const res1 = await Promise.race([p1,p2]);
    console.info(res1); // As p1 resolves before p2, it returns {'foo': 'bar'}

    // Promise.any resolve the first promises to resolve 
    // and keep resolving the others unless all within the iterable object reject
    const res2 = await Promise.any([p1,p2]);
    console.info(res2); // returns {'foo': 'bar'}

    // More performant than Promise.all if you have a static amount of discrete promises to resolves
    const res3 = await Promise.join(p1,p2)
    console.info(res3); // returns [ { foo: 'bar' }, { moe: 'hey' } ]
})();
