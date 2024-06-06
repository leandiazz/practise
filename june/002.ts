// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

const ar = [5, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar: number[]): number {
  return ar.reduce((num, acc) => (acc = acc + num), 0);
}

console.log(aVeryBigSum(ar));
