// Minutes of Javascript #24 - Use switch/case statement with numeric ranges

//You can use a switch statement with a numeric range in the case with:
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
