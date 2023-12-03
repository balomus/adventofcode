import parseLines from "../utils/parse.js";
const data = parseLines("./day02/input.txt");

const maxReds = 12;
const maxGreens = 13;
const maxBlues = 14;

let totalForPartOne = 0;

const parseGamesPartOne = (str) => {
  const id = str.slice(4, str.indexOf(":"));
  const rounds = str.slice(str.indexOf(":") + 2).split("; ");

  if (rounds.every(isRoundPossible)) {
    totalForPartOne += Number(id);
  }
};

const isRoundPossible = (str) => {
  const draws = str.split(", ");
  let reds = 0;
  let greens = 0;
  let blues = 0;

  draws.forEach((draw) => {
    if (draw.includes("red")) {
      reds = draw.slice(0, draw.indexOf(" "));
    } else if (draw.includes("green")) {
      greens = draw.slice(0, draw.indexOf(" "));
    } else if (draw.includes("blue")) {
      blues = draw.slice(0, draw.indexOf(" "));
    }
  });

  if (reds > maxReds || greens > maxGreens || blues > maxBlues) {
    return false;
  } else {
    return true;
  }
};

data.forEach((game) => {
  parseGamesPartOne(game);
});

console.log(totalForPartOne);
