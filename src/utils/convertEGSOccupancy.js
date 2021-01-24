export default (array) => {
  const wantedKeys = ["Business Date", "TotalInPlay", "DOW", "Hour"];

  const keys = array.shift();
  let days = [];
  let hours = [];
  let businessDate = null;
  let day = {};
  let maxDays = [];
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
      console.log(day);
      maxDays.push({
        date: day["Business Date"],
        totalInPlay: day.totalInPlay
      });
    } else {
      hours.push(tempObj);
    }

    // convertedArray.push(tempObj);
  }
  console.log(days);
  return days;
};
