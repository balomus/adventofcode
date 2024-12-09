// part 1
import parseLines from "../../utils/parse.js";
const data = parseLines("./2024/day04/input.txt");

let totalForPartOne = 0;

const checkIfXMAS = (string) => {
  const xmas = "XMAS";
  if (string === xmas) {
    totalForPartOne++;
  }
};

data.forEach((row, rowIndex) => {
  row.split("").forEach((char, charIndex) => {
    if (char === "X") {
      const rowForward =
        char +
        row?.[charIndex + 1] +
        row?.[charIndex + 2] +
        row?.[charIndex + 3];
      const rowBackward =
        char +
        row?.[charIndex - 1] +
        row?.[charIndex - 2] +
        row?.[charIndex - 3];
      const colDown =
        char +
        data?.[rowIndex + 1]?.[charIndex] +
        data?.[rowIndex + 2]?.[charIndex] +
        data?.[rowIndex + 3]?.[charIndex];
      const colUp =
        char +
        data?.[rowIndex - 1]?.[charIndex] +
        data?.[rowIndex - 2]?.[charIndex] +
        data?.[rowIndex - 3]?.[charIndex];
      const diagDownRight =
        char +
        data?.[rowIndex + 1]?.[charIndex + 1] +
        data?.[rowIndex + 2]?.[charIndex + 2] +
        data?.[rowIndex + 3]?.[charIndex + 3];
      const diagDownLeft =
        char +
        data?.[rowIndex + 1]?.[charIndex - 1] +
        data?.[rowIndex + 2]?.[charIndex - 2] +
        data?.[rowIndex + 3]?.[charIndex - 3];
      const diagUpRight =
        char +
        data?.[rowIndex - 1]?.[charIndex + 1] +
        data?.[rowIndex - 2]?.[charIndex + 2] +
        data?.[rowIndex - 3]?.[charIndex + 3];
      const diagUpLeft =
        char +
        data?.[rowIndex - 1]?.[charIndex - 1] +
        data?.[rowIndex - 2]?.[charIndex - 2] +
        data?.[rowIndex - 3]?.[charIndex - 3];

      checkIfXMAS(rowForward);
      checkIfXMAS(rowBackward);
      checkIfXMAS(colDown);
      checkIfXMAS(colUp);
      checkIfXMAS(diagDownRight);
      checkIfXMAS(diagDownLeft);
      checkIfXMAS(diagUpRight);
      checkIfXMAS(diagUpLeft);
    }
  });
});

console.log(totalForPartOne);

// part 2
