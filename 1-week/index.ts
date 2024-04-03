/* Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number) and return a Boolean. Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this? */

const isEven = (n: number): boolean => Math.abs(n) % 2 === 0;

// console.log(isEven(50)); // should log → true
// console.log(isEven(75)); // should log → false
// console.log(isEven(-21)); // should log → false

/* Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string. */

const countBs = (word: string) =>
  word.split("").reduce((acc, char) => (char === "B" ? acc++ : acc), 0);
// console.log(countBs("BOB")); // should log → 2

const countGivenchar = (word: string, char: string) =>
  word
    .split("")
    .reduce((acc, currentChar) => (currentChar === char ? acc++ : acc), 0);

// console.log(countGivenLetter("kakkerlak", "k")); // should log → 4
