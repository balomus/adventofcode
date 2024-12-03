import fs from "fs";

const newLineRegex = /\r?\n|\r/g;

const removeLineBreaks = (string) => {
  return string.replace(newLineRegex, "");
};

const parseLines = (fileName) => {
  const contents = fs.readFileSync(fileName).toString().split("\n");

  const newArray = [];

  contents.forEach((element) => {
    newArray.push(removeLineBreaks(element));
  });
  return newArray;
};

export default parseLines;
