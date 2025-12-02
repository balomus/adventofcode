// part 1
import parseLines from "../../utils/parse.js";
const data: String[] = parseLines("./2025/day01/input.txt");

let currentPosition: number = 50;
let zeroCount: number = 0;

const splitText = (str: String) => {
  const dir: String = str[0];
  const num: number = Number(str.slice(1));
  return [dir, num];
};

const turnDial = (dir: String, amount: number) => {
  if (amount > 99) {
    amount = Number(amount.toString().slice(-2));
  }

  if (dir === "L") {
    currentPosition -= amount;
    if (currentPosition < 0) {
      currentPosition += 100;
    }
  } else if (dir === "R") {
    currentPosition += amount;
    if (currentPosition > 99) {
      currentPosition -= 100;
    }
  }
};

for (let i = 0; i < data.length; i++) {
  const dir: String = splitText(data[i])[0].toString();
  const num = Number(splitText(data[i])[1]);

  turnDial(dir, num);

  if (currentPosition === 0) {
    zeroCount++;
  }
}

console.log(zeroCount);

// part 2

// console.log(data);
