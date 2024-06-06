// Compare the Triplets
const a = [5, 6, 7];
const b = [3, 6, 10];

function compareTriplets(a: number[], b: number[]): number[] {
  let Alice: number = 0,
    Bob: number = 0;
  a.map((value, index) => {
    // console.log(`a: ${value}, b:${b[index]}`);
    if (value > b[index]) Alice++;
    if (value < b[index]) Bob++;
  });
  return [Alice, Bob];
}

console.log(compareTriplets(a, b));
