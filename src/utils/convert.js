import { date2ms } from "./date2ms";

export default (array) => {
  const MaxMachines = 7;
  const keys = array[0];
  let hours = [];
  for (let i = 1; i < array.length; i++) {
    let newObj = {};
    for (let j = 0; j < keys.length; j++) {
      if (array[i][j] && j === 0 && i === 1) {
        // newObj[keys[j]] = array[i][j];
        console.log(i);
        newObj[keys[j]] = date2ms(array[i][j]);
      } else if (
        keys[j] === "Hour" ||
        keys[j] === "TotalInPlay" ||
        keys[j] === "DOW"
      ) {
        newObj[keys[j]] = array[i][j];
      }
    }
    hours.push(newObj);
  }
  console.log(hours.shift());
  hours.pop();
  array.pop();
  const max = array.pop()[MaxMachines];

  return { max, hours };
};
