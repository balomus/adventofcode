import parseLines from "../utils/parse.js";

const data = parseLines("./day01/input.txt");

const getFirstAndLastDigit = (str) => {
  const regex = /([0-9])/g;
  const justNums = str.match(regex);

  // console.log(justNums);
  // console.log(justNums[0]);
  if (justNums === null) {
    return null;
  } else {
    return justNums[0] + justNums.pop();
  }
};

const arrForPart1 = [];

data.forEach((element) => {
  arrForPart1.push(Number(getFirstAndLastDigit(element)));
});

const sumForPart1 = arrForPart1.reduce((sum, cur) => sum + cur);

const getWordNumbers = (str) => {
  // console.log(str);
  const regex = /(zero|one|two|three|four|five|six|seven|eight|nine|[0-9])/g;
  const justStrings = str.match(regex);

  // console.log(justStrings);

  // console.log(justStrings[0], justStrings.pop());
  return (
    convertWordToNumber(justStrings[0]) + convertWordToNumber(justStrings.pop())
  );
};

const convertWordToNumber = (str) => {
  switch (str) {
    case "zero":
      return "0";
    case "one":
      return "1";
    case "two":
      return "2";
    case "three":
      return "3";
    case "four":
      return "4";
    case "five":
      return "5";
    case "six":
      return "6";
    case "seven":
      return "7";
    case "eight":
      return "8";
    case "nine":
      return "9";
    default:
      return str;
  }
};

const arrForPart2 = [];

data.forEach((element) => {
  // console.log(element);

  arrForPart2.push(Number(getWordNumbers(element)));

  // console.log(Number(getWordNumbers(element)));

  // console.log("arrForPart2", arrForPart2);
});
console.log(arrForPart2);

const sumForPart2 = arrForPart2.reduce((sum, cur) => sum + cur);

console.log("Part 1 answer:", sumForPart1);

console.log("part 2", sumForPart2);
// two1nine
