// part 1
import parseLines from "../../utils/parse.js";
const data = parseLines("./2024/day02/input.txt");

const reports = [];
data.forEach((element) => {
  reports.push(element.split(" ").map(Number));
});

const checkIfAscendingOrDescending = (arr) => {
  // check first 2 values to determine if ascending or descending
  const isAscending = arr[0] < arr[1];

  let isSafe = true;

  while (isSafe) {
    arr.forEach((element, index) => {
      if (index === 0) return;

      if (arr[index - 1] <= element) {
        if (!isAscending) {
          isSafe = false;
        }
      }
      if (arr[index - 1] >= element) {
        if (isAscending) {
          isSafe = false;
        }
      }
    });
    break;
  }

  return isSafe;
};

const checkIfDifferenceIsOneTwoOrThree = (arr) => {
  let isSafe = true;

  while (isSafe) {
    arr.forEach((element, index) => {
      if (index === 0) return;

      const difference = Math.abs(arr[index - 1] - element);

      if (difference >= 1 && difference <= 3) {
        return;
      } else {
        isSafe = false;
      }
    });
    break;
  }

  return isSafe;
};

let totalForPartOne = 0;

reports.forEach((report) => {
  if (
    checkIfAscendingOrDescending(report) &&
    checkIfDifferenceIsOneTwoOrThree(report)
  ) {
    totalForPartOne += 1;
  }
});

console.log(totalForPartOne);

// part 2
