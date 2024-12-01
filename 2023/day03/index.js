import parseLines from "../utils/parse.js";
const data = parseLines("./day03/input.txt");

const parseLinesPartOne = (str) => {
  //   console.log(str);
  const regexToFindNumbers = /([0-9])\w+/g;
  const numberSubstrings = str.match(regexToFindNumbers);
  //   console.log(numberSubstrings);
  if (numberSubstrings !== null) {
    // console.log(str.indexOf(numberSubstrings[0]));
  } else {
    // console.log("null");
  }
};

data.forEach((line) => {
  parseLinesPartOne(line);
});

console.log(data);
