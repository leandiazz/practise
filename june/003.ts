/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

Sample Input 
3
11 2 4
4 5 6
10 8 -12

Sample Output
15


input:
3
11 2 4
4 5 6
10 8 -12
*/

const input = [[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]]; // should output 2
const input2 = [[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]]; // should output 15

function diagonalDifference(arr: number[][]): number {
  let lfrSum = 0,
    rtlSum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    const currentNumber = arr[i + 1][i];
    lfrSum = lfrSum + currentNumber;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    const currentNumber = arr[i + 1][2 - i];
    rtlSum = rtlSum + currentNumber;
  }
  return Math.abs(lfrSum - rtlSum);
}

console.log(diagonalDifference(input));
