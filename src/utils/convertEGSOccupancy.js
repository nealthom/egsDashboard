import { date2ms } from "./date2ms";

export default (array) => {
  const wantedKeys = ["Business Date", "TotalInPlay", "DOW", "Hour"];
  const MaxMachines = 8;
  const keys = array.shift();
  let days = [];
  let hours = [];
  let businessDate = null;
  let day = {};
  let convertedArray = []; //convert each row into an object
  for (let i = 0; i < array.length; i++) {
    let tempObj = {};
    for (let j = 0; j < keys.length; j++) {
      if (array[i][j] && wantedKeys.indexOf(keys[j]) !== -1) {
        tempObj[keys[j]] = array[i][j];
      }
    }
    if ("Business Date" in tempObj) {
      if (businessDate) {
        day.hours = hours;
        hours = [];
        days.push(day);
      } else {
        businessDate = tempObj["Business Date"];
      }
      day = tempObj;
    } else {
      hours.push(tempObj);
    }
    convertedArray.push(tempObj);
  }

  return days;
};
