// Minutes of Javascript #25 - Symbols: property keys without name collisions
// Source: https://github.com/olivierloverde/minutes-of-javascript/blob/main/snippets/25-symbols-property-keys-without-name-collisions.js

// Symbols are values that programs use as property keys without risking name collisions.
// Using Symbol(description) creates a new unique value.
const payload = {};
payload[Symbol("Description")] = 'uniqueRef #1';
payload[Symbol('Description 2')] = 'uniqueRef #2';
/*
    {
        [Symbol(Description)]: 'uniqueRef #1',
        [Symbol(Description2)]: 'uniqueRef #2'
    }
*/

// Symbol.for(key) accesses a set of existing symbols called the symbol registry.
const newSymbol = Symbol.for('symbolKey'); 
const existingSymbol = Symbol.for('symbolKey'); 
console.info(newSymbol === existingSymbol) // returns true 

// newSymbol and existingSymbol are the same symbol
const payload2 = {};
payload2[newSymbol] = 'myValue'; // { [Symbol(symbolKey)]: 'myValue' }
payload2[existingSymbol] = 'newValue'; // { [Symbol(symbolKey)]: 'newValue' }
