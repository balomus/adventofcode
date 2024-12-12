// part 1
import parseLines from "../../utils/parse.js";
const data = parseLines("./2024/day05/input.txt");

const pageOrderRules = data.splice(0, data.indexOf("")).map((rule) => {
  return rule.split("|");
});

const updateRules = data.splice(data.indexOf("") + 1, data.length);

const checkEveryValueAgainstEveryRule = (value, index, array) => {
  const relevantRules = getRelevantRules(value);
  for (let i = 0; i < relevantRules.length; i++) {
    const relevantRule = relevantRules[i];
    const valueRuleMatchIndex = relevantRule.indexOf(value);

    if (valueRuleMatchIndex === 0) {
      if (
        array.indexOf(relevantRule[1]) !== -1 &&
        array.indexOf(relevantRule[1]) < index
      ) {
        return false;
      }
    }
    if (valueRuleMatchIndex === 1) {
      if (array.indexOf(relevantRule[0]) > index) {
        return false;
      }
    }
  }
  return true;
};

const getRelevantRules = (value) => {
  return pageOrderRules.filter((pageOrderRule) => {
    return pageOrderRule[0] === value || pageOrderRule[1] === value;
  });
};

const answerForPartOne = [];

const findValidUpdates = () => {
  updateRules.forEach((rule) => {
    const updateArr = rule.split(",");
    const everyValueIsValid = updateArr.every(checkEveryValueAgainstEveryRule);
    if (everyValueIsValid) {
      answerForPartOne.push(updateArr[Math.floor(updateArr.length / 2)]);
    }
  });
};

findValidUpdates();

console.log(
  answerForPartOne.reduce((partialSum, a) => partialSum + Number(a), 0)
);
