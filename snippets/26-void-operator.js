// Minutes of Javascript #26 - The void operator
// Source: https://github.com/olivierloverde/minutes-of-javascript/blob/main/snippets/26-void-operator.js

// The void operator evaluates the given expression and then returns undefined
console.info(void {}); // Outputs: undefined


// It can be used when the return value of a function is not intended to be used
// For example: it ensure that changing API do not cause the parent arrow fonction behavior to change
button.onclick = () => void doSomething();


// void is also useful for immediately-invoked function expression
// Without the void keyword, it will result in an Uncaught SyntaxError
void function fn() {
    console.info('Hey!');
}();
