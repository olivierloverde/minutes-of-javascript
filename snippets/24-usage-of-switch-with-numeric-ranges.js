// Minutes of Javascript #24 - Usage of switch (true), an example with numeric ranges
// Source: https://github.com/olivierloverde/minutes-of-javascript/blob/main/snippets/24-usage-of-switch-with-numeric-ranges.js

// switch (true) may seem absurd but you can match against values as well as expressions. 
// Expressions will be evaluated before matching, so any expression that evals to true will be matched.
// Ref: https://262.ecma-international.org/10.0/#sec-switch-statement

// For example, you can use a switch statement with a numeric range in the case with:
function canDrink(age) {
    switch (true) {
        case (age < 18):
            return "No";
        case (age < 21):
            return "Not in the USA";
        default:
            return "Yes";
    }
}
