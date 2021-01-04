import { date2ms } from "./date2ms";

export default (array) => {
  const keys = array[0];
  const converted = [];
  for (let i = 1; i < array.length; i++) {
    let newObj = {};
    for (let j = 0; j < keys.length; j++) {
      if (array[i][j] && j === 0) {
        // newObj[keys[j]] = array[i][j];

        newObj[keys[j]] = date2ms(array[i][j]);
      } else if (
        keys[j] === "Hour" ||
        keys[j] === "TotalInPlay" ||
        keys[j] === "Machines" ||
        keys[j] === "DOW"
      ) {
        newObj[keys[j]] = array[i][j];
      }
    }
    converted.push(newObj);
  }

  return converted;
};
