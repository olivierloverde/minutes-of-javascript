// Minutes of Javascript #17 - Breaking in nested loops
// See: https://playcode.io/652649/

/* In Javascript you can specify labels to break from a specific nested loop. */

const arr1 = [1,2,3,4,5,6];
const arr2 = [1,2,3,4,5,6];
const arr3 = [1,2,3,4,5,6];

loop1:
for (const i of arr1) {
    loop2:
    for (const j of arr2) {
        loop3:
        for (const k of arr3) {
            console.info(i,j,k); // returns only 1 1 1 as the loop is stopped by the `break loop1` statement
            break loop1; 
        }  
    }   
}