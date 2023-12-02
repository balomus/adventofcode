import fs from "fs";

const parseLines = (fileName) => {
  const contents = fs.readFileSync(fileName).toString().split("\n");
  return contents;
};

export default parseLines;
