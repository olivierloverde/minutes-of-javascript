// Minutes of Javascript #14 - Fun with Emoji!
// See: https://playcode.io/651693/

// Interesting features of Emoji and Javascript
// It’s possible to spread emoji sequences into their single parts
console.info([...'👩‍👩‍👧‍👦‍']); // returns ['👩', '‍',  '👩', '‍',  '👧', '‍','👦', '‍']
console.info([...'👨‍👧‍👧']); // returns [ '👨', '‍', '👧', '‍', '👧' ]
console.info([...'👨‍❤️‍💋‍👨']) // ['👨', '‍',  '❤', '️',  '‍',  '💋', '‍',  '👨']

// You can also combine Emoji
console.info(["👨", "‍", "👩", "‍", "👧"].reduce((prev, curr) => prev + curr)) // returns "👨‍👩‍👧"

// Zero-width joiner (ZWJ) "\u200d" acts as the glue between Emoji
function combineEmoji(arr) {
    return arr.reduce((a,b) => a + '\u200d' + b);
}
console.info(combineEmoji(['🏳','🌈'])); // returns "🏳‍🌈"