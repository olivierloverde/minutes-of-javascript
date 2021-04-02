// Minutes of Javascript #14 - flat() and flatMap()
// See: https://playcode.io/651129/

/*
    arr.flat([depth]); where depth is a number; defaults to 1; can equal Infinity
    The depth level specifying how deep a nested array structure should be flattened.
    It returns a new array with the sub-array elements concatenated into it.
*/ 
const flat = ['New Delhi', ['Bombay', 'Bangalore', ['Paris']]].flat(); 
console.info(flat); // [ 'New Delhi', 'Bombay', 'Bangalore', [ 'Paris' ] ]

const flat2 = ['New Delhi', ['Bombay', 'Bangalore', ['Paris']]].flat(2);
console.info(flat2); // [ 'New Delhi', 'Bombay', 'Bangalore', 'Paris' ]

// Using Infinity for deep flattening
const flatInf = ['New Delhi', ['Bombay', ['Bangalore', [['Paris']]]]].flat(Infinity);
console.info(flatInf); // [ 'New Delhi', 'Bombay', 'Bangalore', 'Paris' ]

/*
    arr.flatMap(callback); with callback(currentValue[, index[, array]])
    Callback is applied to each element of the array (identical to a map()) then flat(1) is applied.
    flatMap() is often quite useful as merging both into one method is slightly more efficient.
*/
const flatMap = ['I love this', 'javascript snippets.'].flatMap(words => words.split(' '));
console.info(flatMap); // [ 'I', 'love', 'this', 'javascript', 'snippets.' ]