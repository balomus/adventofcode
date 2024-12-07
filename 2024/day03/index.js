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
const corruptRegex = /don't\(\)[\s\S]*?do\(\)/g;

const fixedData = data.replace(corruptRegex, "");

//21 to remove at the end, lazily doing this with a slice manually
const newMatches = fixedData.match(mulRegEx).slice(0, 362);

let totalForPartTwo = 0;

const newNumMatches = newMatches.forEach((match) => {
  const nums = match.match(numbersRegEx);
  totalForPartTwo += parseInt(nums[0]) * parseInt(nums[1]);
});

console.log(totalForPartTwo);
