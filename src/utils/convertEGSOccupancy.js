import { date2ms } from "./date2ms";

export default (array) => {
  const wantedKeys = ["Business Date", "TotalInPlay", "DOW", "Hour"];
  const MaxMachines = 8;
  const keys = array.shift();
  let days = [];
  let hours = [];
  let businessDate = null;
  let day = null;
  let convertedArray = []; //convert each row into an object
  for (let i = 0; i < array.length; i++) {
    let tempObj = {};
    for (let j = 0; j < keys.length; j++) {
      if (array[i][j] && wantedKeys.indexOf(keys[j]) !== -1) {
        tempObj[keys[j]] = array[i][j];
      }
    }
    if ("Business Date" in tempObj) {
      console.log(tempObj);
    }
    convertedArray.push(tempObj);
  }
  console.table(convertedArray);

  return days;
};
