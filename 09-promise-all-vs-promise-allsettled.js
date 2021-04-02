// Minutes of Javascript #09 - Promise.all vs Promise.allSettled
// See: https://playcode.io/613524/
const p1 = new Promise((resolve, reject) => setTimeout(resolve({'foo': 'bar'}), 500));
const p2 = new Promise((resolve, reject) => setTimeout(resolve({'moe': 'hey'}), 1500));
const p3 = new Promise((resolve, reject) => setTimeout(reject(new Error('ko')), 800));

(async function() {
    const p = [p1,p2,p3];
    // Promise.allSettled waits for all promises to be done (rejected or resolved/fulfilled)
    const settledPromises = await Promise.allSettled(p);
    console.info(settledPromises); 
    /*[
        { status: 'fulfilled', value: { foo: 'bar' } },
        { status: 'fulfilled', value: { moe: 'hey' } },
        { status: 'rejected', reason: Error: ko}
    ]*/
    // Promise.all resolves if and only if all promises are resolved/fulfilled
    // Promise.all rejects if one of the promises rejects
    const okPromises = [p1,p2];
    try {
        // Promise.all(okPromises) resolves because p1 and p2 resolves and no promise rejects
        const okResolvedPromises = await Promise.all(okPromises);
        console.info('all promises resolved !', okResolvedPromises);

        // Promise.all(p) won't resolve because p3 rejects
        const allResolvedPromises = await Promise.all(p);
        console.info('all promises resolved !', allResolvedPromises);
    } catch(err) {
        console.info(err); // returns Error: ko from the second Promise.all
    }
})();
