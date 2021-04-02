// Minutes of Javascript #07 - Promises
// See: https://playcode.io/612623/

// Promise takes two functions as arguments
// You call resolve when the function succeeds
const okPromise = new Promise(function(resolve, reject) {
    resolve({result: ['1','2']}) // you can pass data to the callback
  });
  
   // You call reject when it fails
   const koPromise = new Promise(function(resolve, reject) {
    reject(new Error('not found')) // you can pass data to the callback
  });
  
  // The promise rejects if you throw an error
  const throwedPromise = new Promise(function(resolve, reject) {
    throw new Error('not found') // you can pass data to the callback
  });
  
  // Promise can be created using "async" keyword
  // It resolves with returned value
  // Rejects if an error is thrown
  const asyncPromise = async function() {
    return true;
  }
  
  // You can call other promises by using .then for getting the result
  okPromise.then(function(result) {
    console.info(result) // {result: ['1','2']}
  }).catch((err) => console.info(err)) // nothing displayed
  // Use .catch for catch the error of a promise
  koPromise.then(function(result) {
    console.info(result) // nothing displayed
  }).catch((err) => console.info(err)) // Error: not found 