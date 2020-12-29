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
      } else {
        newObj[keys[j]] = array[i][j];
      }
    }
    converted.push(newObj);
  }

  return converted;
};
