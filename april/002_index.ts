/* https://eloquentjavascript.net/04_data.html#i-8ZspxiCEC/ */ 
// The sum of a range

// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// console.log(range(1, 10)); // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1)); // → [5, 4, 3, 2]
// console.log(sum(range(1, 10))); // → 55

function range(start: number, end: number) {
    let array: number[] = []
    for (let i = start; i <= end; i++) {
        array.push(i)
    }
    return array
}
// console.log(range(1, 10));
function sum(array: number[]){
    let sum: number = 0
    for (let i = 0; i <= array.length; i++) {
        sum = sum + i
    }
    return sum
}
// console.log(sum(range(1, 10)));


function range_2(start: number, end: number, step: number) {
    let array: number[] = []
    if(Math.sign(step) === 1) {
        for (let index = start; index <= end; index = index+step) {
            array.push(index)
        }
    } else {
        for (let index = start; index >= end; index = index+step) {
            array.push(index)
        }
    }
    return array
}

// console.log(range_2(1, 10, 2));
// console.log(range_2(5, 2, -1)) 