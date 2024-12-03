// part 1
import parseLines from "../../utils/parse.js";
const data = parseLines("./2024/day01/input.txt");

const firstArr = [];
const secondArr = [];
let totalForPartOne = 0;

data.forEach((element) => {
  const stringSplitArr = element.split(" ").filter(Boolean);
  firstArr.push(Number(stringSplitArr[0]));
  secondArr.push(Number(stringSplitArr[1]));
});

firstArr.sort((a, b) => a - b);
secondArr.sort((a, b) => a - b);

firstArr.forEach((element, index) => {
  totalForPartOne += Math.abs(element - secondArr[index]);
});

console.log(totalForPartOne);

// part 2

let totalForPartTwo = 0;
firstArr.forEach((element, index) => {
  const multiplier = secondArr.filter((v) => v === element).length;
  const valueToAdd = element * multiplier;
  totalForPartTwo += valueToAdd;
});

console.log(totalForPartTwo);
