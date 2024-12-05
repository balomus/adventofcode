// part 1
import parseLines from "../../utils/parse.js";
const data = parseLines("./2024/day03/input.txt").join("");

const mulRegEx = /mul\([0-9]*,[0-9]*\)/g;
const numbersRegEx = /\d+/g;

const matches = data.match(mulRegEx);

let totalForPartOne = 0;

const numMatches = matches.forEach((match) => {
  const nums = match.match(numbersRegEx);
  totalForPartOne += parseInt(nums[0]) * parseInt(nums[1]);
});

console.log(totalForPartOne);

// part 2
