import parseLines from "../utils/parse.js";
const data = parseLines("./day01/input.txt");

const getFirstAndLastDigit = (str) => {
  const regex = /([0-9])/g;
  const justNums = str.match(regex);

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

console.log("Answer for part 1:", sumForPart1);

const arrForPart2 = [];

const transformStringsToNumbers = (str) => {
  let newStr = str;
  if (str.includes("one")) {
    newStr = newStr.replaceAll("one", "o1e");
  }
  if (str.includes("two")) {
    newStr = newStr.replaceAll("two", "t2o");
  }
  if (str.includes("three")) {
    newStr = newStr.replaceAll("three", "t3ree");
  }
  if (str.includes("four")) {
    newStr = newStr.replaceAll("four", "f4ur");
  }
  if (str.includes("five")) {
    newStr = newStr.replaceAll("five", "f5ve");
  }
  if (str.includes("six")) {
    newStr = newStr.replaceAll("six", "s6x");
  }
  if (str.includes("seven")) {
    newStr = newStr.replaceAll("seven", "s7ven");
  }
  if (str.includes("eight")) {
    newStr = newStr.replaceAll("eight", "e8ght");
  }
  if (str.includes("nine")) {
    newStr = newStr.replaceAll("nine", "n9ne");
  }

  arrForPart2.push(Number(getFirstAndLastDigit(newStr)));
};

data.forEach((element) => {
  transformStringsToNumbers(element);
});

const sumForPart2 = arrForPart2.reduce((sum, cur) => sum + cur);

console.log("Answer for part 2:", sumForPart2);
