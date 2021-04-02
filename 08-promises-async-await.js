// Minutes of Javascript #08 - Promises Part 2.  (Part 1. is available here: https://bit.ly/2XD6FnC)
// See: https://playcode.io/612911/
// Init variables for playground
const p1 = new Promise((resolve, reject) => setTimeout(resolve({'foo': 'bar'}), 500));
const p2 = new Promise((resolve, reject) => setTimeout(resolve({'foo2': 'bar2'}), 500));
const p3 = new Promise((resolve, reject) => setTimeout(reject(new Error('oops')), 500));

// Chaining promises using then() and catch()
p1.then((r) => { // r = {'foo': 'bar'} (resolved from p1)
  console.info(r)
  return p2;
}).then((r1) => { // r1 = {'foo2': 'bar2'} (resolved from p2)
  console.info(r1)
  return p3;
}).then((r2) => { // r2 = undefined , p3 throws an error
  console.info(r2)
}).catch((err) => {  // error is catched here
  console.info(err); // display Error: oops (rejected from p3)
});

// Using async/await
(async function() {
  try {
    const r = await p1;
    const r2 = await p2;
    const r3 = await p3;
  } catch(err) {
    console.info(err); // display Error: oops (rejected from p3)
  }
})();