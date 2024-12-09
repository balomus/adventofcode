// part 1
import parseLines from "../../utils/parse.js";
const data = parseLines("./2024/day04/input.txt");

let totalForPartOne = 0;

const checkIfMatch = (string, target) => {
  if (string === target) {
    totalForPartOne++;
  }
};

const generateString = (rowIndex, charIndex, rowDir, charDir, targetStr) => {
  let string = "";
  for (let i = 0; i < targetStr.length; i++) {
    string += data?.[rowIndex + i * rowDir]?.[charIndex + i * charDir];
  }
  return string;
};

const xmas = "XMAS";

data.forEach((row, rowIndex) => {
  row.split("").forEach((char, charIndex) => {
    if (char === "X") {
      const rowForward = generateString(rowIndex, charIndex, 1, 0, xmas);
      const rowBackward = generateString(rowIndex, charIndex, -1, 0, xmas);
      const colDown = generateString(rowIndex, charIndex, 0, 1, xmas);
      const colUp = generateString(rowIndex, charIndex, 0, -1, xmas);
      const diagDownRight = generateString(rowIndex, charIndex, 1, 1, xmas);
      const diagDownLeft = generateString(rowIndex, charIndex, -1, 1, xmas);
      const diagUpRight = generateString(rowIndex, charIndex, 1, -1, xmas);
      const diagUpLeft = generateString(rowIndex, charIndex, -1, -1, xmas);

      const strings = [
        rowForward,
        rowBackward,
        colDown,
        colUp,
        diagDownRight,
        diagDownLeft,
        diagUpRight,
        diagUpLeft,
      ];

      strings.forEach((string) => {
        checkIfMatch(string, "XMAS");
      });
    }
  });
});

console.log(totalForPartOne);

// part 2

const isXPattern = (rowIndex, charIndex, targetStr) => {
  const stringOne =
    data?.[rowIndex - 1]?.[charIndex - 1] +
    data?.[rowIndex]?.[charIndex] +
    data?.[rowIndex + 1]?.[charIndex + 1];

  const stringTwo =
    data?.[rowIndex - 1]?.[charIndex + 1] +
    data?.[rowIndex]?.[charIndex] +
    data?.[rowIndex + 1]?.[charIndex - 1];

  if (
    stringOne === targetStr ||
    stringOne.split("").reverse().join("") === targetStr
  ) {
    if (
      stringTwo === targetStr ||
      stringTwo.split("").reverse().join("") === targetStr
    ) {
      return true;
    }
  }
  return false;
};

let totalForPartTwo = 0;

data.forEach((row, rowIndex) => {
  row.split("").forEach((char, charIndex) => {
    if (char === "A") {
      if (isXPattern(rowIndex, charIndex, "MAS")) {
        totalForPartTwo++;
      }
    }
  });
});

console.log(totalForPartTwo);
