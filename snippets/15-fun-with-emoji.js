// Minutes of Javascript #14 - Fun with Emoji!
// See: https://playcode.io/651693/

// Interesting features of Emoji and Javascript
// Itβs possible to spread emoji sequences into their single parts
console.info([...'π©βπ©βπ§βπ¦β']); // returns ['π©', 'β',  'π©', 'β',  'π§', 'β','π¦', 'β']
console.info([...'π¨βπ§βπ§']); // returns [ 'π¨', 'β', 'π§', 'β', 'π§' ]
console.info([...'π¨ββ€οΈβπβπ¨']) // ['π¨', 'β',  'β€', 'οΈ',  'β',  'π', 'β',  'π¨']

// You can also combine Emoji
console.info(["π¨", "β", "π©", "β", "π§"].reduce((prev, curr) => prev + curr)) // returns "π¨βπ©βπ§"

// Zero-width joiner (ZWJ) "\u200d" acts as the glue between Emoji
function combineEmoji(arr) {
    return arr.reduce((a,b) => a + '\u200d' + b);
}
console.info(combineEmoji(['π³','π'])); // returns "π³βπ"